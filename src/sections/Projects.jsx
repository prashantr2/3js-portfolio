import React, { useState, Suspense } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import DemoComputer from '../components/DemoComputer'

import ZscalerLogo from '../components/OrgsLogos'

const projectCount = myProjects.length

export default function Projects() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const currentProject = myProjects[selectedIdx];
    
  const handleNavigation = (direction) => {
        setSelectedIdx(prevIdx => {
            if (direction == 'previous') return (prevIdx + projectCount - 1) % projectCount;
            else return (prevIdx + 1) % projectCount;
        })
  }

  return (
    <section className="c-space my-20">
        <p className="head-text">My Projects</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
            <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                <div className="absolute top-0 right-0">
                    <img src={currentProject.spotlight} alt="spotlight" className="w-full h-80 object-cover rounded-xl" />
                </div>
                <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                    <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
                </div>
                <div className="flex flex-col gap-5 text-white-600 my-5">
                    <p className="text-white text-2xl font-semibold animatedText"> {currentProject.title} </p>
                    <p className="animatedText"> {currentProject.desc} </p>
                    <p className="animatedText"> {currentProject.subdesc} </p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-5">
                    <div className="flex items-center gap-3">
                        {currentProject.tags.map((tag, idx) => (
                            <div title={tag.name} key={idx} className="tech-logo">
                                <img src={tag.path} alt={tag.name} />
                            </div>                            
                        ))}
                    </div> 
                    <a className="flex items-center gap-2 cursor-pointer text-white-600" 
                       href={currentProject.href} target="_blank">
                        <p>Check Live Site</p> 
                        <img src="/assets/arrow-up.png" className="w-3 h-3" />
                    </a>
                </div>
                <div className="flex justify-between items-center mt-7">
                    <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                        <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
                    </button>
                    <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                        <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                    </button>
                </div>
            </div>
            <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                <Canvas>
                    <ambientLight intensity={Math.PI} />
                    <directionalLight position={[10,10,5]} />
                        
                    <Center>
                        <Suspense fallback={<CanvasLoader />}>
                            <group scale={2} position={[0,-3,0]} rotation={[0,-0.1,0]} >
                                <DemoComputer texture={currentProject.texture} />
                            </group>
                            <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false} enablePan={false} />
                        </Suspense>
                    </Center>
                </Canvas>
            </div>
        </div>
    </section>
  )
}
