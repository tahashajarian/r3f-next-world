import { useState } from 'react';
import React from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated, config } from '@react-spring/three';

export default function Ground(props) {
  const [planes, setPlanes] = useState([
    { rotation: new THREE.Euler(-Math.PI / 2, 0, 0), postion: [0, 0, 0] },
    { rotation: new THREE.Euler(-Math.PI / 2, 0, 0), postion: [0, 10, 0] },
    { rotation: new THREE.Euler(0, -Math.PI / 2, 0), postion: [5, 5, 0] },
    { rotation: new THREE.Euler(0, Math.PI / 2, 0), postion: [-5, 5, 0] },
    { rotation: new THREE.Euler(0, 0, 0), postion: [0, 5, -5] },
    { rotation: new THREE.Euler(0, 0, 0), postion: [0, 5, 5] },
  ]);

  const [active, setActive] = useState(false);
  const { scale } = useSpring({ scale: active ? Math.random() * 10 : 1 });
  // useFrame((state, delta, xrFrame) => {
  //   if (active) {
  //     for (let i = 0; i < planes.length; i++) {
  //       planes[i].postion = [
  //         planes[i].postion[0] * Math.random(),
  //         planes[i].postion[1] * Math.random(),
  //         planes[i].postion[2] * Math.random(),
  //       ];
  //     }
  //     setPlanes([...planes]);
  //   } else {
  //   }
  // });
  return (
    <animated.group scale={scale} onClick={(e) => setActive(!active)}>
      {planes.map((plane, index) => (
        <mesh key={index} rotation={plane.rotation} position={plane.postion}>
          <planeGeometry args={[10, 10, 20, 20]} />
          <meshStandardMaterial color='pink' wireframe />
        </mesh>
      ))}
    </animated.group>
  );
}
