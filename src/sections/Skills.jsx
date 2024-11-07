import React , { useRef, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, RoundedBox, Text } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'
import gsap from 'gsap'
import { skills } from '../constants'
import { useGSAP } from '@gsap/react'

function LogoBrick({ skillNameRef, imageUrl, title, color, totalBricks, id, ...props }) {
    const logoTexture = useLoader(TextureLoader, `/assets/${imageUrl}`);
    logoTexture.magFilter = THREE.NearestFilter;
    logoTexture.minFilter = THREE.LinearMipMapLinearFilter;
    
    const [state, setState] = useState(0);
    const meshRef = useRef()
    
    useEffect(() => {
        if (!state) {
            gsap.fromTo(meshRef.current.position, {
                y: -totalBricks/3+id
            }, {
                y: -totalBricks/2-totalBricks+id,
                duration: 4,
                delay: id/2,
                ease: 'power1.inOut'  
            })
            gsap.fromTo(meshRef.current.rotation, {
                y: 0,
            }, {
                y: Math.PI,
                duration: 4,
                delay: id/2,
                ease: 'power1.inOut'  
            })
            gsap.fromTo(meshRef.current.rotation, {
                z: 0,
            }, {
                z: Math.PI/2,
                duration: 1,
                delay: 0.75+id/2,
                delayReverse: 0.75,
                ease: 'power1.inOut',
                yoyo: true,
                repeat: 1
            })
        } else {
            gsap.fromTo(meshRef.current.position, {
                y: -totalBricks/2-totalBricks+id,
            }, {
                y: -totalBricks/3+id,
                duration: 4,
                delay: (totalBricks-id)/2,
                ease: 'power1.inOut'  
            })
            gsap.fromTo(meshRef.current.rotation, {
                y: Math.PI
            }, {
                y: 2*Math.PI,
                duration: 4,
                delay: (totalBricks-id)/2,
                ease: 'power1.inOut'  
            })
        }
    }, [state])
    
    useEffect(() => {
        const intvl = setInterval(() => {
            setState(prev => !prev);
        }, (totalBricks + 5)*1000)            
        return () => {
            clearInterval(intvl);
        }
    }, [])
    
    return (
    <mesh ref={meshRef} {...props} rotation={[0,Math.PI/5,0]} >
       <RoundedBox args={[3.05,1.05,0.05]} position={[0,0,-0.8]} radius={0.2} >
           <meshStandardMaterial attach="material" color="#ccc" emissive="#ccc" emissiveIntensity={0.75} /> 
       </RoundedBox>
       <RoundedBox args={[3.05,1.05,0.05]} position={[0,0,0.8]} radius={0.2} >
           <meshStandardMaterial attach="material" color="#ccc" emissive="#ccc" emissiveIntensity={0.75} /> 
       </RoundedBox>
        <RoundedBox args={[3,1,3]} radius={0.2} >
           <meshStandardMaterial attach="material" color={color} emissive={color} emissiveIntensity={0.75} /> 
       </RoundedBox>
       <mesh rotation={[-Math.PI/2,0,0]} position={[0,0.55,0]} scale={0.75}>
           <meshBasicMaterial map={logoTexture} attach="material" /> 
           <planeGeometry args={[2,2]}  />
       </mesh>
    </mesh>
    )
}

const randomColor = () => {
    const arr = ['7f', '8f', '9f', 'af'];
    const first = arr[Math.floor(Math.random()*arr.length)]
    const second = arr[Math.floor(Math.random()*arr.length)]
    let third = arr[Math.floor(Math.random()*arr.length)]
    if (first == second) third = arr.filter(x => x != first)[0]

    return `#${first}${second}${third}`
}

export default function Skills() {
  const skillNameRef = useRef(); 
    
  skills.forEach(skill => {
      skill['color'] = randomColor();
  }) 

  return (
    <section className="hidden lg:flex col-span-1 mt-28" id="skills">
        <div className="w-full text-white-600 min-h-full flex-grow flex flex-col justify-between">
            <h3 className="head-text h-fit">My Skills</h3>
            <div className="skills-container relative flex-grow flex">
                <p ref={skillNameRef} className="text-md absolute top-2"></p>
                <div className="skills-canvas min-h-full flex-grow">
                    <Canvas flat linear camera={{ position: [0, 4, 15] }} >
                        <ambientLight intensity={Math.PI / 3} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI/2} />
                        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI/2} />
                        {skills.map((skill, idx) => (
                            <LogoBrick key={skill.id} title={skill.name} skillNameRef={skillNameRef} color={skill.color} 
                                       totalBricks={skills.length} id={skill.id} 
                                       position={[0, (-skills.length/2+idx)*1, 0]} imageUrl={skill.imageUrl} />
                        ))}
                        <OrbitControls enableZoom={false} enablePan={true} autoRotate={true}
                                       minPolarAngle={Math.PI/4} maxPolarAngle={Math.PI/2} />
                     </Canvas>
                </div>
            </div>
        </div>
    </section>
  )
}