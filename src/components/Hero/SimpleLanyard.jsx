// src\components\Hero\SimpleLanyard.jsx
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Simple animated card component
function AnimatedCard({ position = [0, 0, 0] }) {
  const cardRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (cardRef.current) {
      // Gentle swaying animation
      cardRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      cardRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;

      // Floating animation
      cardRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;

      // Scale on hover
      const targetScale = hovered ? 1.1 : 1;
      cardRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group
      ref={cardRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={() => setClicked(true)}
      onPointerUp={() => setClicked(false)}
    >
      {/* Card Background */}
      <Box args={[2, 3, 0.1]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color={hovered ? "#4fd1c7" : "#2a2a2a"}
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Box>
      
      {/* Card Text */}
      <Text
        position={[0, 0.5, 0.06]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        MCT
      </Text>

      <Text
        position={[0, 0, 0.06]}
        fontSize={0.15}
        color="#4fd1c7"
        anchorX="center"
        anchorY="middle"
      >
        Modern Code
      </Text>

      <Text
        position={[0, -0.3, 0.06]}
        fontSize={0.15}
        color="#4fd1c7"
        anchorX="center"
        anchorY="middle"
      >
        Technology
      </Text>
      
      {/* Lanyard String */}
      <Box args={[0.05, 2, 0.05]} position={[0, 2, 0]}>
        <meshBasicMaterial color="#666" />
      </Box>
      
      {/* Lanyard Connector */}
      <Sphere args={[0.1]} position={[0, 3.5, 0]}>
        <meshPhysicalMaterial color="#888" metalness={1} roughness={0.3} />
      </Sphere>
    </group>
  );
}

// Simple Lanyard component without physics
export default function SimpleLanyard({ 
  position = [0, 0, 20], 
  fov = 30, 
  transparent = true 
}) {
  return (
    <div className="simple-lanyard-container">
      <Canvas
        camera={{ position: position, fov: fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <AnimatedCard position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
