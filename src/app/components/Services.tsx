'use client'

import { motion } from 'framer-motion'
import { Code, Cpu, Palette, Zap, Globe, Lock, Rocket, Users } from 'lucide-react'

const services = [
  { icon: Palette, title: "Logo Design", description: "Create a memorable brand identity with our custom logo design services." },
  { icon: Globe, title: "Website Design", description: "Get a stunning, responsive website that looks great on all devices." },
  { icon: Users, title: "Personal Portfolio", description: "Showcase your work and skills with a professional online portfolio." },
  { icon: Code, title: "Web Development", description: "Custom web applications and features to enhance your online presence." },
  { icon: Cpu, title: 'AI Integration', description: 'Incorporating artificial intelligence and machine learning to create smart, adaptive solutions that evolve with your business needs.' },
  { icon: Zap, title: 'Performance Optimization', description: 'Ensuring lightning-fast load times and smooth user interactions through advanced optimization techniques.' },
  { icon: Lock, title: 'Security First', description: 'Implementing robust security measures to protect your digital assets and user data from potential threats.' },
  { icon: Rocket, title: 'Scalable Solutions', description: 'Designing architectures that grow with your business, from startups to enterprise-level applications.' },
]

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, index }) => (
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

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-center mb-12 font-poppins text-white text-shadow-glow"
        >
          Our Services & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

