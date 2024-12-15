'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Globe, User } from 'lucide-react'

const services = [
  { icon: Palette, title: "Logo Design", description: "Create a memorable brand identity with our custom logo design services." },
  { icon: Globe, title: "Website Design", description: "Get a stunning, responsive website that looks great on all devices." },
  { icon: User, title: "Personal Portfolio", description: "Showcase your work and skills with a professional online portfolio." },
  { icon: Code, title: "Web Development", description: "Custom web applications and features to enhance your online presence." },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 font-poppins text-shadow"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-purple-900 bg-opacity-30 backdrop-blur p-6 rounded-lg shadow-xl text-center hover:bg-purple-800 hover:bg-opacity-50 transition-colors duration-300"
    >
      <div className="flex justify-center mb-4">
        <Icon className="w-12 h-12 text-purple-300" />
      </div>
      <h3 className="text-xl font-semibold mb-2 font-poppins text-purple-100">{title}</h3>
      <p className="text-purple-200">{description}</p>
    </motion.div>
  )
}

