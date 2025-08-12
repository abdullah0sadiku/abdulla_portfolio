import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { useTranslation } from 'react-i18next';
import { 
  Github, 
  Linkedin, 
  Instagram,
  Mail, 
  Phone, 
  MapPin, 
  ArrowDown,
  Code2
} from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  const { t } = useTranslation();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 25%, #1a2332 50%, #0f1419 100%)'
      }}
    >
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large geometric shapes */}
        <motion.div
          className="absolute -top-32 -left-32 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: '#00C896' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 opacity-5"
          style={{
            background: 'linear-gradient(45deg, #00C896, #132946)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full opacity-10"
          style={{ backgroundColor: '#694E70' }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hexagonal pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C896' fill-opacity='0.1'%3E%3Cpath d='M36 18L36 6l-12 0l0 12l12 0zm-12 12L12 30l0 12l12 0l0-12zm12 0l12 0l0 12l-12 0l0-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <motion.div 
        className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-6"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Compact Name and Main Tagline */}
        <motion.div 
          className="mb-6 px-4"
          variants={fadeInUp}
        >
          {/* Main Name and Tagline in a more compact layout */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-8 mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              {t('hero.name')}
            </h1>
            <div className="hidden md:block w-px h-12 bg-gray-600"></div>
            <div className="md:text-left text-center mt-2 md:mt-0">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-tight">
                {t('hero.tagline')}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-tight">
                {t('hero.tagline2')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div 
          className="mb-10 px-4"
          variants={fadeInUp}
        >
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto text-center hero-subtitle">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 max-w-4xl mx-auto px-4"
          variants={fadeInUp}
        >
          {[
            { icon: Mail, text: t('hero.email') },
            { icon: Phone, text: t('hero.phone') },
            { icon: MapPin, text: t('hero.location') }
          ].map(({ icon: Icon, text }, index) => (
            <motion.div
              key={text}
              className="flex items-center gap-3 p-3 sm:p-4 rounded-xl border transition-all duration-300 hover:border-opacity-100 group flex-1"
              style={{ 
                backgroundColor: 'rgba(0, 200, 150, 0.05)',
                borderColor: 'rgba(0, 200, 150, 0.2)'
              }}
              whileHover={{ 
                y: -2,
                backgroundColor: 'rgba(0, 200, 150, 0.1)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex-shrink-0 p-2 rounded-lg transition-all duration-300" style={{ backgroundColor: '#00C896', boxShadow: '0 0 20px rgba(0, 200, 150, 0.5)' }}>
                <Icon className="text-white" size={18} />
              </div>
              <div className="text-sm sm:text-base text-white font-medium truncate">{text}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-3 sm:gap-4 mb-8 px-4"
          variants={fadeInUp}
        >
          {[
            { icon: Github, href: 'https://github.com/abdullah0sadiku' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/abdulla-sadiku-751384291/' },
            { icon: Instagram, href: 'https://www.instagram.com/abdulla.sadiku' }
          ].map(({ icon: Icon, href }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer" 
              className="p-3 sm:p-4 rounded-xl border transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#00C896',
                borderColor: '#00C896',
                color: '#FFFFFF'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} className="sm:w-6 sm:h-6 text-gray-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={fadeInUp} className="flex justify-center">
          <motion.button
            onClick={() => scrollToSection('about')}
            className="group px-6 py-3 text-base font-medium rounded-xl transition-all duration-300 border-2 flex items-center justify-center gap-3"
            style={{ 
              backgroundColor: '#00C896',
              borderColor: '#00C896',
              color: '#FFFFFF'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'transparent',
              color: '#00C896'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t('hero.cta')}</span>
            <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
     
    </section>
  );
};

export default Hero;