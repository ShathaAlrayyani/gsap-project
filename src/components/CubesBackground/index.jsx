import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import './CubesBackground.scss'

// FloatingCube component
const FloatingCube = ({ position }) => {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Floating + rotation animation
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.5;
    meshRef.current.position.y +=
      Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.6, 0.6, 0.6]} />
      <meshStandardMaterial color={"rgba(126, 125, 125, 1)"} />
    </mesh>
  );
};

// Scene that generates multiple cubes
export const Scene = () => {
  const cubes = Array.from({ length: 30 }, () => [
    (Math.random() - 0.5) * 10, // x
    (Math.random() - 0.5) * 10, // y
    (Math.random() - 0.5) * 10, // z
  ]);

  return (
    <>
      <ambientLight intensity={1} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      {cubes.map((pos, i) => (
        <FloatingCube key={i} position={pos} />
      ))}
    </>
  );
};

