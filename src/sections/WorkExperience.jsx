import React from 'react'
import { Canvas } from '@react-three/fiber'
import { workExperiences } from '../constants'
import { ZscalerLogo, BrowserStackLogo } from '../components/OrgsLogos'
import { OrbitControls } from '@react-three/drei'

export default function WorkExperience() {
  return (
    <section className="c-space my-20" id="work">
        <div className="w-full text-white-600">
            <h3 className="head-text">My Work Experience</h3>
            <div className="work-container">
                {/* <div className="work-canvas">
                    <Canvas camera={{ position: [0, 0, 25] }}  >
                        <OrbitControls enableZoom={false} enablePan={false} 
                                       maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
                        <ambientLight intensity={0} />
                        <directionalLight position={[10, 1, 10]} intensity={5} />
                        <ZscalerLogo position={[0, 0, 0]} rotation={[0,Math.PI,Math.PI]} />
                     </Canvas>
                </div> */}
                <div className="work-content">
                    <div className="sm:py-10 py-5 sm:px-5">
                        {workExperiences.map((item, idx) => (
                            <div key={idx} className="work-content_container group">
                                <div className="flex flex-col h-full justify-start items-center py-2">
                                    <div className="work-content_logo">
                                        <img src={item.icon} alt="logo" className="w-full h-full" />
                                    </div>
                                    <div className="work-content_bar" />
                                </div>   
                                <div className="sm:p-5 px-2.5 py-5">
                                    <p className="font-bold text-white-800"> {item.name} </p>
                                    <p className="text-sm mb-5"> {item.pos} -- {item.duration} </p>
                                    <p className="group-hover:text-white transition ease-in-out duration-500">{item.title}</p>
                                    <p className="group-hover:text-white transition ease-in-out duration-500">{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
