'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-purple-800 bg-opacity-50 backdrop-blur-md text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold font-poppins">Pixel Dev</h3>
            <p className="mt-2 text-sm">Crafting digital experiences that inspire.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3 text-center mb-6 md:mb-0"
          >
            <h4 className="text-lg font-semibold mb-2 font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Works', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-purple-300 transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/3 text-center md:text-right"
          >
            <h4 className="text-lg font-semibold mb-2 font-poppins">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="hover:text-purple-300 transition duration-300">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center text-sm"
        >
          <p>&copy; 2024 Pixel Dev. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

