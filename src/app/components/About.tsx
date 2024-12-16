'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <div id="about" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-bold text-center mb-12 font-poppins text-white text-shadow-glow"
      >
        About Us
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-6xl mx-auto mb-16 px-4 sm:px-6 lg:px-8 text-center"
      >
        <h3 className="text-xl md:text-3xl font-semibold mb-6 text-purple-300 text-center">Innovating the Digital Frontier</h3>
        <p className="text-md md:text-lg mb-6 text-purple-100 text-center">
          Pixel Dev is a cutting-edge digital studio at the forefront of web technology and design. Our team of visionary developers and designers are passionate about crafting digital experiences that not only meet but exceed the expectations of the modern web. With years of combined experience and a finger on the pulse of the latest tech trends, we're your partners in digital innovation.
        </p>
        <p className="text-md md:text-lg mb-6 text-purple-100 text-center">
          We blend creativity with technical expertise to deliver solutions that are not just visually stunning, but also robust, scalable, and future-proof. From startups to enterprises, we're committed to elevating your digital presence and driving your business forward in the ever-evolving digital landscape.
        </p>
        <p className="text-md md:text-lg text-purple-100 text-center">
          At Pixel Dev, we believe that great technology should be accessible to all. That's why we work with businesses of all sizes, from ambitious startups to established corporations, tailoring our approach to meet your unique needs and budget. Our goal is to democratize cutting-edge web development and design, ensuring that every business can harness the power of the digital realm to its fullest potential.
        </p>
      </motion.div>
    </div>
  )
}

