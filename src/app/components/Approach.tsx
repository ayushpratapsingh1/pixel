'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Search, Users, PenTool, Monitor, Repeat, Code, Cpu, Zap, Rocket, Smartphone, Headphones } from 'lucide-react'

const approachPhases = [
  {
    title: "Discovery Phase",
    steps: [
      { icon: Lightbulb, title: "Initial Consultation", description: "We begin by understanding your vision, goals, and requirements." },
      { icon: Search, title: "Research & Analysis", description: "Conduct thorough market research and competitor analysis." },
      { icon: Users, title: "User Persona Creation", description: "Develop detailed user personas to guide our design and development process." },
    ]
  },
  {
    title: "Design Phase",
    steps: [
      { icon: PenTool, title: "Wireframing", description: "Create low-fidelity wireframes to establish the basic structure." },
      { icon: Monitor, title: "UI/UX Design", description: "Develop high-fidelity designs that align with your brand and user needs." },
      { icon: Repeat, title: "Iterative Refinement", description: "Collaborate with you to refine and perfect the design." },
    ]
  },
  {
    title: "Development Phase",
    steps: [
      { icon: Code, title: "Frontend Development", description: "Build responsive and interactive user interfaces." },
      { icon: Cpu, title: "Backend Integration", description: "Develop robust server-side logic and database structures." },
      { icon: Zap, title: "Performance Optimization", description: "Optimize for speed, efficiency, and scalability." },
    ]
  },
  {
    title: "Launch & Support Phase",
    steps: [
      { icon: Rocket, title: "Deployment", description: "Carefully launch your project ensuring a smooth transition." },
      { icon: Smartphone, title: "Cross-platform Testing", description: "Rigorous testing across various devices and platforms." },
      { icon: Headphones, title: "Ongoing Support", description: "Provide continuous support and maintenance post-launch." },
    ]
  },
]

interface ApproachPhaseProps {
  title: string;
  steps: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }[];
  index: number;
}

const ApproachPhase: React.FC<ApproachPhaseProps> = ({ title, steps, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    className="bg-purple-900 bg-opacity-30 backdrop-blur rounded-lg p-6 shadow-lg hover:bg-opacity-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
  >
    <h4 className="text-xl font-semibold mb-4 text-purple-200">{title}</h4>
    {steps.map((step, stepIndex) => (
      <div key={stepIndex} className="flex items-start mb-4 last:mb-0">
        <div className="mr-4 mt-1 text-purple-400">
          <step.icon className="w-6 h-6" />
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-1 text-purple-300">{step.title}</h5>
          <p className="text-purple-400">{step.description}</p>
        </div>
      </div>
    ))}
  </motion.div>
)

export function Approach() {
  return (
    <section id="approach" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-12 font-poppins text-white text-shadow-glow">Our Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approachPhases.map((phase, phaseIndex) => (
              <ApproachPhase
                key={phaseIndex}
                title={phase.title}
                steps={phase.steps}
                index={phaseIndex}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's collaborate and bring your vision to life with cutting-edge technology and design.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 
            text-white rounded-full text-lg font-semibold hover:from-purple-700 
            hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-950/50"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

