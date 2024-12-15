'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    text: "Pixel Dev transformed our online presence. Their team's creativity and technical expertise resulted in a website that perfectly represents our brand and has significantly increased our customer engagement.",
    author: "Jane Doe",
    position: "CEO, TechInnovate Inc."
  },
  {
    text: "Working with Pixel Dev was a game-changer for our startup. They delivered a stunning logo and website that truly captured our vision. Their attention to detail and commitment to excellence is unmatched.",
    author: "John Smith",
    position: "Founder, NextGen Solutions"
  },
  {
    text: "The team at Pixel Dev went above and beyond our expectations. They not only created a beautiful website but also provided valuable insights to improve our overall digital strategy. Highly recommended!",
    author: "Emily Johnson",
    position: "Marketing Director, GreenEarth Co."
  }
]

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonial" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 font-poppins text-shadow"
        >
          What Our Clients Say
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-purple-800 bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-xl"
            >
              <p className="text-purple-100 italic mb-4 text-lg">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center">
                <img src="/placeholder.svg?height=50&width=50" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold font-poppins">{testimonials[currentIndex].author}</p>
                  <p className="text-purple-300 text-sm">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

