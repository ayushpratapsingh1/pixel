'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your Digital Presence
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transforming Ideas into Stunning Digital Realities
        </motion.p>
        <motion.p
          className="text-lg md:text-xl mb-8 text-purple-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting Digital Excellence, One Pixel at a Time
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <motion.button
            className="px-6 py-3 bg-gradient-to-r bg-purple-800 rounded-full text-white font-semibold 
            text-lg flex items-center justify-center"
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.1 }}
          >
            <Zap className="mr-2" />
            <Link href="#contact">Get Started</Link>
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-transparent border-2 border-purple-600 rounded-full text-white font-semibold text-lg flex items-center justify-center"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgb(147, 51, 234)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="#services">Explore Services</Link>
            <ArrowRight className="ml-2" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Hero

