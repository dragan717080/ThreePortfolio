'use client';

import { useState, useEffect, useLayoutEffect, useRef, Suspense, lazy } from 'react';
import Image from 'next/image';
import { Canvas } from "@react-three/fiber";
import { soundoff, soundon } from "@/public/assets/icons";
import { HomeInfo, Loader, AvatarPointerCanvas } from './components';
import { Preload } from '@react-three/drei';
import { Position } from './interfaces';
import './animations.css';

export default function Home() {
  const [isSuspended, setIsSuspended] = useState(true)
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const Bird = lazy(() => import('@/public/models/Bird').then(module => ({ default: module.Bird })));
  const Island = lazy(() => import('@/public/models/Island').then(module => ({ default: module.Island })));
  const Plane = lazy(() => import('@/public/models/Plane').then(module => ({ default: module.Plane })));
  const Sky = lazy(() => import('@/public/models/Sky').then(module => ({ default: module.Sky })));

  type Position = [number, number, number];

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (typeof (window) === 'undefined') {
      return [[0, 0, 0], [0, 0, 0]];
    }

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
    if (typeof (window) === 'undefined') {
      return [[0, 0, 0], [0, 0, 0]];
    }

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

  /*   // Remove header padding on large screens on mount
    useLayoutEffect(() => {
      const header = document.getElementsByTagName('header')[0];
      header.classList.add('2xl:px-0');
    }, []);
  
    // Add header padding on large screens on unmoun
    useEffect(() => {
      return () => {
        const header = document.getElementsByTagName('header')[0];
        header.classList.remove('2xl:px-0');
      }
    }, []); */

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current!.volume = 0.4;
      audioRef.current!.loop = true;
      audioRef.current!.play();
    }

    return () => {
      audioRef.current && audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className="relative h-screen">
      <div className='absolute top-28 left-0 right-0 z-10 row'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <audio src='/assets/ambient-music.mp3' ref={audioRef} />
      <Canvas
        className={`w-full min-w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
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
            color='#B1E1FF'
            groundColor='#000000'
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition as Position}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale as Position}
            currentFocusPoint={{ x: 0, y: 0, z: 0 }}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition as Position}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale as Position}
          />
        </Suspense>
        <Preload all />
      </Canvas>
      <div className='absolute bottom-2 left-2 lg:bottom-5 lg:left-5 2xl:bottom-7 2xl:left-7'>
        <Image
          height={40}
          width={40}
          src={!isPlayingMusic ? soundoff.src : soundon.src}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='h-10 md:h-12 2xl:h-14 w-10 md:w-12 2xl:w-14 pointer object-contain'
        />
      </div>
    </section>
  )
}
