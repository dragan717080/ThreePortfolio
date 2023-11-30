import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Mesh } from 'three';
import { MeshInterface } from "@/app/interfaces";

export function Plane({ isRotating, position, rotation, scale }: MeshInterface) {
  const ref = useRef<Mesh | null>(null!);
  const { scene, animations } = useGLTF('../assets/3d/plane.glb');
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    isRotating ? actions!["Take 001"]!.play() : actions!["Take 001"]!.stop();
  }, [actions, isRotating]);

  return (
    <mesh position={position} rotation={rotation} scale={scale} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}
