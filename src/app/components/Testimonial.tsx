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
    "text": "Pixel Dev transformed my vision into reality with an outstanding website for my dental clinic. Their ability to design a professional and informative platform has made it easier for patients to learn about our services and book appointments. The website beautifully showcases our cutting-edge equipment and treatments.",
    "author": "Dr. Suraj Sharma",
    "position": "Dentist, Sunrise Dental Clinic"
  },
  {
    "text": "As a photographer, my website needed to reflect the passion and artistry of my work. Pixel Dev delivered beyond expectations, creating a visually stunning and easy-to-navigate portfolio that showcases my landscapes, portraits, and event photography. Their attention to detail and seamless design have made it effortless for clients to connect and book my services.",
    "author": "Hari Mishra",
    "position": "Photographer, HariOM Photography"
  },
  {
    "text": "I wanted a website to present my technical skills and projects professionally, and Pixel Dev exceeded my expectations. They created a sleek, modern portfolio that highlights my work in web development, machine learning, and data science. The website's intuitive layout and design have been instrumental in showcasing my abilities to recruiters and collaborators.",
    "author": "Harish Garg",
    "position": "Computer Science Student"
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
