'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Work {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  liveUrl: string;
}

const works: Work[] = [
  {
    title: 'Modern E-commerce Website',
    description: 'A fully responsive online store with seamless user experience.',
    fullDescription: 'This project showcases a state-of-the-art e-commerce platform...',
    image: '/placeholder.svg',
    liveUrl: 'https://example-ecommerce.com',
  },
  {
    title: 'Tech Startup Branding',
    description: 'Complete brand identity including logo and website design.',
    fullDescription: 'We developed a comprehensive brand identity for a cutting-edge tech startup...',
    image: '/placeholder.svg',
    liveUrl: 'https://example-startup.com',
  },
  {
    title: 'Portfolio for Photographer',
    description: 'Elegant portfolio showcasing the artist’s best work.',
    fullDescription: 'This project features a minimalist yet striking portfolio website...',
    image: '/placeholder.svg',
    liveUrl: 'https://example-portfolio.com',
  },
];

export function Works() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 font-poppins text-shadow"
        >
          Our Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <WorkCard key={index} work={work} onClick={() => setSelectedWork(work)} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedWork && (
          <WorkDetail work={selectedWork} onClose={() => setSelectedWork(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function WorkCard({ work, onClick }: { work: Work; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-purple-900 bg-opacity-30 backdrop-blur p-6 rounded-lg shadow-xl text-center hover:bg-purple-800 hover:bg-opacity-50 transition-colors duration-300"
      onClick={onClick}
    >
      <div className="flex justify-center mb-4">
        <Image src={work.image} alt={work.title} width={48} height={48} />
      </div>
      <h3 className="text-xl font-semibold mb-2 font-poppins text-purple-100">{work.title}</h3>
      <p className="text-purple-200">{work.description}</p>
    </motion.div>
  );
}

function WorkDetail({ work, onClose }: { work: Work; onClose: () => void }) {
  if (!work) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
    >
      <div className="bg-white p-6 rounded-lg shadow-xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-black hover:text-purple-300 transition-colors">
          Close
        </button>
        <Image src={work.image} alt={work.title} width={400} height={300} className="rounded-lg mb-4" />
        <h3 className="text-2xl font-bold mb-4 font-poppins">{work.title}</h3>
        <p className="text-gray-700 mb-6">{work.fullDescription}</p>
        <a
          href={work.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700 transition duration-300"
        >
          Visit Live Site
        </a>
      </div>
    </motion.div>
  );
}
