'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-20">
      <motion.div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 font-poppins text-shadow"
        >
          About Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center bg-purple-900 bg-opacity-30 backdrop-blur-md rounded-lg p-8 shadow-xl"
        >
          <p className="text-lg mb-6 text-purple-100">
            Pixel Dev is a cutting-edge digital studio specializing in creating stunning websites, logos, and digital experiences. Our team of skilled designers and developers are passionate about turning your vision into reality.
          </p>
          <p className="text-lg text-purple-100">
            With a focus on innovation and creativity, we deliver exceptional results that help your business stand out in the digital landscape. From personal portfolios to corporate websites, we&apos;re here to elevate your online presence.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}