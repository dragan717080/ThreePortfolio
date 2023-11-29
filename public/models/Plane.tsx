import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Plane({ isRotating, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF('../assets/3d/plane.glb');
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    isRotating ? actions["Take 001"].play() : actions["Take 001"].stop();
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}
