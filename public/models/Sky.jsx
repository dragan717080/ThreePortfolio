import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Sky({ isRotating }) {
  const { scene } = useGLTF('../assets/3d/sky.glb');
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={scene} />
    </mesh>
  );
}
