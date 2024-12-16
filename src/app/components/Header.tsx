'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, FolderOpen, Zap, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'approach', 'projects'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const navItems = [
    { id: 'home', icon: Home, alt: 'Home' },
    { id: 'about', icon: User, alt: 'About us' },
    { id: 'services', icon: Briefcase, alt: 'Services' },
    { id: 'approach', icon: Zap, alt: 'Our Approach' },
    { id: 'projects', icon: FolderOpen, alt: 'Our Projects' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="focus:outline-none">
          <motion.div
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            PixelDev
          </motion.div>
        </Link>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ul className="hidden md:flex space-x-16 relative">
          {navItems.map(({ id, icon: Icon, alt }) => (
            <li
              key={id}
              onMouseEnter={() => setHoveredIcon(id)}
              onMouseLeave={() => setHoveredIcon(null)}
              className="relative"
            >
              <Link href={`#${id}`} className="focus:outline-none">
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
              {hoveredIcon === id && (
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 
                bg-purple-950 text-white text-sm rounded shadow-lg">
                  {alt}
                </div>
              )}
            </li>
          ))}
        </ul>

        <motion.button
          className="px-4 py-2 bg-purple-700 rounded-full text-white font-semibold hidden md:block"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgb(147, 51, 234)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
        <Link href="#contact">Contact Us</Link>
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="fixed md:hidden h-screen w-full top-16 left-0 bg-black bg-opacity-90 backdrop-blur-md z-50 overflow-hidden"
          >
            <ul className="flex flex-col space-y-8 py-10 items-center h-full">
              {navItems.map(({ id, icon: Icon, alt }) => (
                <li key={id} className="w-full text-center">
                  <Link
                    href={`#${id}`}
                    onClick={handleLinkClick}
                    className="block mt-4"
                  >
                    <motion.div
                      className={`text-white text-2xl font-semibold ${
                        activeSection === id ? 'text-purple-400' : 'text-white'
                      } flex items-center justify-center`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-6 h-6 mr-2" />
                      {alt}
                    </motion.div>
                  </Link>
                </li>
              ))}
              <li>
                <motion.button
                  className="px-4 py-2 bg-purple-700 rounded-full text-white font-semibold"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgb(147, 51, 234)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLinkClick}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="#contact">Contact Us</Link>
                </motion.button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

