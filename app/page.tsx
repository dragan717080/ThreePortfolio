'use client';

import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import Image from 'next/image';
import { Canvas } from "@react-three/fiber";
import sakura from "@/public/assets/sakura.mp3";
import { soundoff, soundon } from "@/public/assets/icons";
import { HomeInfo, Loader } from './components';

export default function Home() {

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const audioRef = useRef(null);

  const Bird = lazy(() => import('@/public/models/Bird').then(module => ({ default: module.Bird })));
  const Island = lazy(() => import('@/public/models/Island').then(module => ({ default: module.Island })));
  const Plane = lazy(() => import('@/public/models/Plane').then(module => ({ default: module.Plane })));
  const Sky = lazy(() => import('@/public/models/Sky').then(module => ({ default: module.Sky })));

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current && audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className="relative h-screen">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <audio volume={0.4} loop={true} src='/assets/sakura.mp3' ref={audioRef} />
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
        camera={{ near: 0.1, far: 1000 }}
      >
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff.src : soundon.src}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  )
}
