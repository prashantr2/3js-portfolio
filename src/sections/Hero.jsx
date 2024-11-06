import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'

export default function Hero() {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 }) 
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 }) 
    
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen flex flex-col relative">
        <div className="w-full margin-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="text-2xl sm:text-3xl font-medium text-white text-center font-generalsans">
                Hi, I am Prashant Rawat <span className="waving-hand">🖐</span>
            </p>
            <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
        </div>
        <div className="w-full h-full absolute">
            {/* <Leva hidden /> */}
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />} >
                    <PerspectiveCamera makeDefault position={[0,0,20]} />
                    <HeroCamera isMobile={isMobile} >
                        {/* <HackerRoom scale={0.07} position={[0,0,0]} rotation={[0,-Math.PI,0]} /> */}
                        <HackerRoom scale={sizes.deskScale} 
                                    position={sizes.deskPosition} 
                                    rotation={[0,-Math.PI,0]} />
                    </HeroCamera>
                    <group>
                        <Target position={sizes.targetPosition} />
                        <ReactLogo position={sizes.reactLogoPosition} />
                        <Cube position={sizes.cubePosition} />
                        <Rings position={sizes.ringPosition} />
                    </group>
                    <ambientLight intensity={1} />
                    <directionalLight intensity={2} position={[0,10,0]} />
                </Suspense>
            </Canvas>
            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href="#about" className="w-fit">
                    <Button name="Let's work together!" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </div>
    </section>
  )
}
