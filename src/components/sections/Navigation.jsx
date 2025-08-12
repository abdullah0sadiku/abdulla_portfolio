import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/language-switcher.jsx';

const Navigation = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const navigationItems = [
    { id: 'home', label: t('navigation.home') },
    { id: 'about', label: t('navigation.about') },
    { id: 'skills', label: t('navigation.skills') },
    { id: 'experience', label: t('navigation.experience') },
    { id: 'projects', label: t('navigation.projects') },
    { id: 'contact', label: t('navigation.contact') }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-2'
            : 'py-4'
        }`}
        style={{ 
          backgroundColor: scrolled ? 'rgba(15, 20, 25, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 200, 150, 0.1)' : 'none'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl font-bold text-white">Abdulla<span className="text-green-400">H</span></span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              <div 
                className="flex items-center space-x-1 rounded-xl px-2 py-1 border backdrop-blur-sm"
                style={{ 
                  backgroundColor: 'rgba(0, 200, 150, 0.05)',
                  borderColor: 'rgba(0, 200, 150, 0.2)'
                }}
              >
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300`}
                    style={{ 
                      backgroundColor: activeSection === item.id ? '#00C896' : 'transparent',
                      color: activeSection === item.id ? '#FFFFFF' : '#D1D5DB'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: activeSection === item.id ? '#00C896' : 'rgba(0, 200, 150, 0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              
              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button and Language Switcher */}
            <div className="lg:hidden flex items-center space-x-3">
              <LanguageSwitcher />
              <button
                className="p-3 rounded-lg border transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(0, 200, 150, 0.1)',
                  borderColor: 'rgba(0, 200, 150, 0.3)',
                  color: '#FFFFFF'
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 backdrop-blur-md"
              style={{ backgroundColor: 'rgba(15, 20, 25, 0.9)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-20 right-4 rounded-2xl border p-6 min-w-[200px] backdrop-blur-xl"
              style={{ 
                backgroundColor: 'rgba(19, 41, 70, 0.95)',
                borderColor: 'rgba(0, 200, 150, 0.3)'
              }}
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ type: "spring", bounce: 0.3 }}
            >
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300`}
                    style={{ 
                      backgroundColor: activeSection === item.id ? '#00C896' : 'transparent',
                      color: activeSection === item.id ? '#FFFFFF' : '#D1D5DB'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      x: 4,
                      backgroundColor: activeSection === item.id ? '#00C896' : 'rgba(0, 200, 150, 0.1)',
                      color: '#FFFFFF'
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side Progress Indicator */}
      <motion.div
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col space-y-4">
          {navigationItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="group relative"
              whileHover={{ scale: 1.2 }}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === item.id
                    ? 'scale-125 border-transparent'
                    : 'border-gray-400'
                }`}
                style={{ 
                  backgroundColor: activeSection === item.id ? '#00C896' : 'transparent'
                }}
              />
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div 
                  className="px-3 py-1 rounded-lg border text-sm whitespace-nowrap backdrop-blur-sm"
                  style={{ 
                    backgroundColor: 'rgba(19, 41, 70, 0.9)',
                    borderColor: 'rgba(0, 200, 150, 0.3)',
                    color: '#FFFFFF'
                  }}
                >
                  {item.label}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;