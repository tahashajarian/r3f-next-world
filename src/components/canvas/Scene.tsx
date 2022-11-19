import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';

interface Props {
  children: React.ReactNode;
  [x: string]: any;
}

const Scene = (props: Props) => {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props} camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 10, 10] }}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {props.children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
