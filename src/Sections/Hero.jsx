import { PerspectiveCamera,  } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import {HackerRoom} from "../Components/HackerRoom"
import CanvasLoader from "../Components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../Constants";
import Target from "../Components/Target";
import ReactLogo from "../Components/Reactlogo";
import Cube from "../Components/Cube";
import HeroCamera from "../Components/HeroCamera";
import Buttons from "../Components/Buttons";
import Rings from "../Components/Rings";


const Hero = () => {
  // const x = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },

  //   scale: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  // });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isMobile, isTablet, isSmall)
  return (
    <div className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-20 mt-20 c-space gap-3">
        <p className="sm:text-2xl text-xl font-medium text-white text-center font-Generalsans ">
          Hi, I am Pradyumna <span className="waving-hand">👋</span>
        </p>
        <p className="text-gray_gradient hero_tag">
          Frontend Developer | React, Tailwind, GSAP
        </p>

        <div className="w-full h-full absolute inset-0">

          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <HeroCamera isMobile={isMobile} >

<HackerRoom scale={sizes.deskScale}
position={sizes.deskPosition}
rotation={[0,Math.PI, 0]}/>
              {/* <HackerRoom
                // scale={0.10}
                scale={sizes.deskScale}
                // position={[1,-11,0]}
                // rotation={[0,280,0]}
                position={sizes.deskPosition}
                rotation={[0, Math.PI, 0]}
              /> */}
              </HeroCamera>
              <group scale={1}>
                <Target position={sizes.targetPosition}/>
              <ReactLogo position = {sizes.reactLogoPosition}/>
              <Cube position={sizes.cubePosition}/>
            <Rings position={sizes.ringPosition}/>
              </group>
              
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>

        <div className="absolute bottom-[1%] left-0 right-0 w-full z-10 c-space">
          <a href="#about" className="w-fit">
            <Buttons name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-90"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
