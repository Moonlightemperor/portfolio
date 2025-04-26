import React, { Suspense, useState } from "react";
import { myProjects } from "../Constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader";
import DemoComputer from "../Components/DemoComputer";

const projectCount = myProjects.length;
const Project = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
 const currentProject = myProjects[selectedProjectIndex]
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  return (
    <section className="c-space my-20" id="work">
      <p className="head-text text-gray_gradient">My work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1  w-full mt-10 gap-4 ">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col sm:h-[350px]  gap-1 text-white-600 *:my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="text-zinc-400 animatedText mt-[-2%]">
              {currentProject.desc}
            </p>
            <p className="text-zinc-400 animatedtext">
              {currentProject.subdesc}
            </p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div className="tech-logo bg-zinc-900 bg-opacity-[10]">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-zinc-500"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn cursor-pointer" onClick={() => handleNavigation("previous")}>
              <img
                src="/assets/left-arrow.png"
                alt="left-arrow"
                className="w-4 h-4"
              />
            </button>

            <button className="arrow-btn cursor-pointer" onClick={() => handleNavigation("next")}>
              <img
                src="/assets/right-arrow.png"
                alt="right-arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div className="border border-black bg-zinc-900 rounded-lg h-96 md:h-full">
      <Canvas>
        <ambientLight intensity={Math.PI}/>
        <directionalLight position={[10,10,5]}/>
        <Center>
          <Suspense fallback ={<CanvasLoader/>}/>
          <group scale={1.5} position={[0, -2,0]} rotation={[0, -0.1, 0]}>
           <DemoComputer texture = {currentProject.texture}/>
          </group>
        </Center>
        <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
      </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Project;
