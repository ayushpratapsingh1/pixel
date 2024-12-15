'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, Send } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 font-poppins text-shadow"
        >
          Contact Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto bg-purple-900 bg-opacity-30 backdrop-blur rounded-lg p-8 shadow-xl"
        >
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-purple-100">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 bg-purple-800 bg-opacity-50 border border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-purple-100">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-purple-800 bg-opacity-50 border border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-purple-100">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 bg-purple-800 bg-opacity-50 border border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
              ></textarea>
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-purple-600 rounded-full text-white"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-purple-600 rounded-full text-white"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:contact@pixeldev.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-purple-600 rounded-full text-white"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 flex items-center justify-center"
            >
              Send Message
              <Send className="ml-2 w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

