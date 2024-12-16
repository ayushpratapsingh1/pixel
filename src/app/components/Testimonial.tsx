'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  text: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Pixel Dev transformed our online presence. Their team\'s creativity and technical expertise resulted in a website that perfectly represents our brand and has significantly increased our customer engagement.',
    author: 'Jane Doe',
    position: 'CEO, TechInnovate Inc.',
  },
  {
    text: 'Working with Pixel Dev was a game-changer for our startup. They delivered a stunning logo and website that truly captured our vision. Their attention to detail and commitment to excellence is unmatched.',
    author: 'John Smith',
    position: 'Founder, NextGen Solutions',
  },
  {
    text: 'The team at Pixel Dev went above and beyond our expectations. They not only created a beautiful website but also provided valuable insights to improve our overall digital strategy. Highly recommended!',
    author: 'Emily Johnson',
    position: 'Marketing Director, GreenEarth Co.',
  },
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center p-4 sm:p-8">
      <div className="testimonial-container relative max-w-4xl w-full p-6 sm:p-8 bg-purple-900 
      bg-opacity-20 
      backdrop-blur-md rounded-lg shadow-lg transition-transform duration-300 transform 
      hover:scale-105 mx-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
          What Our Clients Say
        </h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-md md:text-lg sm:text-xl italic text-gray-300 leading-relaxed">
              &quot;{testimonials[currentIndex].text}&quot;
            </p>
            <div className="mt-4">
              <h3 className="text-md md:text-lg font-semibold text-white">
                {testimonials[currentIndex].author}
              </h3>
              <p className="text-sm text-gray-400">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
