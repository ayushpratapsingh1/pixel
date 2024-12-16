'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Approach } from './components/Approach'
import { Works } from './components/Works'
import { Testimonial } from './components/Testimonial'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import ParticlesBackground from './components/ParticlesBackground' // Ensure this file exists and is correctly exported

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ParticlesBackground />
        <Hero />
        <About />
        <Services />
        <Approach />
        <Works />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

