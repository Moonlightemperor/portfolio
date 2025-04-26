
import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props)=> {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float floatIntensity={1}  >
      <group scale={0.3}  {...props} dispose={null} >
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[-5.99, -5.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.59, 0.59, 0.6]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo;