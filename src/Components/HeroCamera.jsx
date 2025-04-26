import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { useRef } from 'react'

const HeroCamera = ({children, isMobile}) => {

  const groupref = useRef();
  useFrame((state, delta)=>{
    easing.damp3(state.camera.position, [0,0,20], 0.25 , delta);

    if(!isMobile){
      easing.dampE(groupref.current.rotation, [-state.pointer.y/3, -state.pointer.x/5, 0] , 0.25 , delta)
    }
  })
  return (
    <group scale={0.8} ref={groupref}>
      {children}
    </group>
  )
}

export default HeroCamera
