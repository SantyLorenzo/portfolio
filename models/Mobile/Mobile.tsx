"use client"

import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    mobile: THREE.Mesh
  }
  materials: {
    ['Material.179']: THREE.MeshStandardMaterial
  }
}

export function MobileModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Mobile.glb') as GLTFResult
  return (
    <Canvas camera={{ position: [0.8, 0.1, 0] }} style={{ width: '200px', height: '300px', display: 'flex', alignItems: 'center' }}>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          geometry={nodes.mobile.geometry}
          material={materials['Material.179']}
        />
      </group>

      <OrbitControls
        autoRotate
        zoom0={10}
        rotateSpeed={1}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

useGLTF.preload('/Mobile.glb')
