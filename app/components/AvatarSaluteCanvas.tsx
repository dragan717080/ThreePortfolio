'use client';

import { FC, useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, Loader, useGLTF } from '@react-three/drei';
import { OrbitControls, useAnimations, Preload } from '@react-three/drei/core';

const Avatar: FC = () => {
  const avatar = useGLTF('/assets/3d/avatar.glb');

  const { actions, names } = useAnimations(avatar.animations, avatar.scene);
  useEffect(() => {
    actions['salute'].fadeIn(0.5).play();
  }, []);

  return (
    <group>
      <primitive
        object={avatar.scene}
        scale={4}
        position-x={-1}
        position-y={-2}
        rotation-y={-0.5}
      />
    </group>
  )
}

const AvatarSaluteCanvas: FC = () => {
  return (
		<Canvas dpr={[0, 2]}>
			<ambientLight intensity={0.5} />
			<pointLight position={[1, 1, 1]} />
			<OrbitControls />
			<Suspense fallback={<Html><Loader /></Html>}>
				<Avatar />
			</Suspense>
			<Preload all />
		</Canvas>
  )
}

export default AvatarSaluteCanvas;
