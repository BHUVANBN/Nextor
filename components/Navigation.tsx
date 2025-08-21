'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Partners', href: '#partners' },
    { name: 'Verticals', href: '#verticals' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out  ${
        scrolled ? 'pt-4 px-4' : 'pt-0 px-0'
      }`}
    >
      <div className={`transition-all duration-500 ease-out border-transparent  ${
        scrolled 
          ? 'max-w-6xl mx-auto bg-black/10 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-5xl shadow-black/20 ' 
          : 'container-custom bg-transparent'
      }`}>
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold text-white">Nextor</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors duration-300 font-medium ${
                  scrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-300 hover:text-neon-blue'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                scrolled
                  ? 'bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm'
                  : 'btn-primary'
              }`}
            >
              Register Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled 
                ? 'text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm' 
                : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`md:hidden mt-2 transition-all duration-300 ${
              scrolled 
                ? 'mx-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-black/20' 
                : 'bg-dark-900/95 backdrop-blur-md border-t border-dark-700'
            }`}
          >
            <div className="py-6 px-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left font-medium py-3 px-4 rounded-xl transition-all duration-200 ${
                    scrolled
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-gray-300 hover:text-neon-blue hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => scrollToSection('#contact')}
                className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                  scrolled
                    ? 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                    : 'btn-primary'
                }`}
              >
                Register Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;