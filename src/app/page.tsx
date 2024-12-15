'use client'

import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Works } from './components/Works'
import { Testimonial } from './components/Testimonial'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import ParticlesBackground from './components/ParticlesBackground'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ParticlesBackground />
        <Hero />
        <About />
        <Services />
        <Works />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

