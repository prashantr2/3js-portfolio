import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

export default function Target(props) {
  const { nodes, materials } = useGLTF('/models/react.glb')

  return (
    <Float dispose={null}>
        <group position={[10,10,0]} scale={0.4} {...props}> 
            <mesh 
                geometry={nodes['React-Logo_Material002_0'].geometry} 
                material={materials['Material.002']}
                position={[0,0.8,0.18]}
                rotation={[0,0,-Math.PI/2]}
                scale={[0.39,0.39,0.52]}
            />
        </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')