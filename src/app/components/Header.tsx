'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, FolderOpen, MessageSquare, ChevronUp, Menu } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
      setShowScrollTop(window.pageYOffset > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            PixelDev
          </motion.div>
        </Link>

        {/* Hamburger icon for mobile view */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-16">
          {[
            { id: 'home', icon: Home, label: 'Home' },
            { id: 'about', icon: User, label: 'About' },
            { id: 'services', icon: Briefcase, label: 'Services' },
            { id: 'projects', icon: FolderOpen, label: 'Projects' },
            { id: 'contact', icon: MessageSquare, label: 'Contact' },
          ].map(({ id, icon: Icon, label }) => (
            <li key={id}>
              <Link href={`#${id}`}>
                <motion.div
                  className={`text-lg font-semibold ${
                    activeSection === id ? 'text-purple-400' : 'text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <motion.button
          className="px-4 py-2 bg-purple-600 rounded-full text-white font-semibold hidden md:block"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgb(147, 51, 234)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Contact Us
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute h-screen top-16 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md z-50">
          <ul className="flex flex-col space-y-4 py-4 items-center">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' },
            ].map(({ id, label }) => (
              <li key={id} className="px-4">
                <Link href={`#${id}`} onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.div
                    className="text-white text-lg font-semibold"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {label}
                  </motion.div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
