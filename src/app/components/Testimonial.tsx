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
    <div className="testimonial-container p-8 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Clients Say</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg italic text-gray-700">
            &quot;{testimonials[currentIndex].text}&quot;
          </p>
          <div className="mt-4">
            <h3 className="text-md font-semibold text-gray-800">
              {testimonials[currentIndex].author}
            </h3>
            <p className="text-sm text-gray-600">
              {testimonials[currentIndex].position}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
