import { useState } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import WorkExperience from './sections/WorkExperience'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <div className="grid grid-cols-1 md:grid-cols-4 c-space my-10">
        <Skills />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

export default App