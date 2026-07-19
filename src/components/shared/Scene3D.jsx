'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Sparkles, ContactShadows } from '@react-three/drei'

// The interactive 3D Object
function AbstractShape(props) {
  const meshRef = useRef(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate slowly over time
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* A complex, techy shape */}
      <icosahedronGeometry args={[2, 1]} />
      {/* Wireframe glowing material */}
      <meshStandardMaterial
        color={hovered ? '#fff' : '#00D9FF'}
        wireframe={true}
        emissive={hovered ? '#fff' : '#00D9FF'}
        emissiveIntensity={hovered ? 2 : 1}
        roughness={0.2}
      />
    </mesh>
  )
}

function InnerCore() {
  const coreRef = useRef(null)
  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.5
      coreRef.current.rotation.y -= delta * 0.4
    }
  })
  return (
    <mesh ref={coreRef} scale={1.2}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={0.8} />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#00D9FF" intensity={2} />

        {/* Floating Animation Wrapper */}
        <Float
          speed={2} // Animation speed
          rotationIntensity={1} // XYZ rotation intensity
          floatIntensity={2} // Up/down float intensity
        >
          <AbstractShape />
          <InnerCore />
        </Float>

        {/* Floating Cyber Particles */}
        <Sparkles count={150} scale={12} size={2} speed={0.4} color="#00D9FF" opacity={0.6} />

        {/* Shadow on the "floor" */}
        <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />

        {/* Controls so the user can drag/rotate */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  )
}
