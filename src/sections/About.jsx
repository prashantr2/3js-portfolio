import React, { useState, useRef } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

export default function About() {
  const [hasCopied, setHasCopied] = useState(false);
  const myEmail = 'prashantrawat2mx@gmail.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(myEmail)
      
    setHasCopied(true);
    setTimeout(() => {
        setHasCopied(false);
    }, 2000)
  } 

  const pointsData = [{
    lat: 12.97, lng: 77.59, size: 0.1, color: 'orange',
  }] 
    
  const arcsData = [
        {lat: 51.50, lng: 0.12},        // UK
        {lat: 36.77, lng: -119.41},     // USA
        {lat: 41.87, lng: 12.56},       // Italy
        {lat: 1.35, lng: 103.81},       // Singapore
        {lat: -25.27, lng: 133.77}      // Australia
    ].map(loc => (
        {
            startLat: 12.97,
            startLng: 77.59,
            endLat: loc.lat,
            endLng: loc.lng,
            color: ['green', 'white']
        }
    ))
    
  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="cols-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                       <p className="grid-headtext">Hi, I'm Prashant</p> 
                       <p className="grid-subtext">With 1+ year(s) of experience, I have worked with highly scalable backend systems, along with exposure to latest frontend technologies.</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/mern.avif" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                       <p className="grid-headtext">Tech Stack</p> 
                       <p className="grid-subtext">I specialize in Python, Javascript/TypeScript with focus on MERN Stack</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)"
                               backgroundImageOpacity={0.5} showAtmosphere showGraticules
                               globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                               bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" 
                               pointsData={pointsData}
                               pointAltitude={0.2}
                               pointRadius={0.3}
                               pointColor={'color'}
                               arcColor={'color'}
                               arcStroke={1}
                               arcAltitude={0.35}
                               arcsData={arcsData}
                        />
                    </div>
                    <div>
                       <p className="grid-headtext">I can work remotely across most timezones</p> 
                       <p className="grid-subtext">I'm based in India, with remote work available</p>
                       <a href="#contact">
                           <Button name="Contact Me" isBeam containerClass="mt-10 w-full" />
                       </a>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                       <p className="grid-headtext">My Passion for Coding</p> 
                       <p className="grid-subtext">I love solving problems and building things through code. Coding isn't just my profession - it is my passion</p>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                    <div className="space-y-2 flex flex-col w-full items-center">
                       <p className="grid-headtext">Contact me</p> 
                       <button className="copy-container" onClick={handleCopy} >
                          <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg' } className={!hasCopied && 'hover:animate-bounce'} />
                       </button>
                       <p className="w-full text-white text-sm text-center">{ hasCopied ? 'Copied prashantrawat2mx@gmail.com': 'Copy Email'}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
