import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer 
      className="py-12 border-t relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0f1419 0%, #132946 100%)',
        borderColor: 'rgba(0, 200, 150, 0.2)'
      }}
    >
      {/* Background Element */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: '#00C896' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-3">
              
              <span className="text-2xl font-bold text-white">Abdulla<span className="text-green-400">H</span></span>
            </div>
          </motion.div>

          {/* Main Text */}
          <div className="flex items-center justify-center gap-2 text-gray-300 flex-wrap">
            <span className="font-light">© 2025 Abdulla Sadiku. Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart style={{ color: '#00C896' }} size={16} fill="currentColor" />
            </motion.div>
            <span className="font-light">using</span>
            <Code style={{ color: '#00C896' }} size={16} />
            <span className="font-semibold text-white">
              React & TailwindCSS
            </span>
          </div>
          
          {/* Animated Line */}
          <motion.div
            className="w-32 h-1 mx-auto rounded-full"
            style={{ backgroundColor: '#00C896' }}
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          
          {/* Tagline */}
          <p className="text-sm text-gray-400 font-light max-w-md mx-auto">
            Crafting the future of digital experiences with modern technology and creative innovation
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full border"
                style={{ 
                  backgroundColor: 'rgba(0, 200, 150, 0.1)',
                  color: '#00C896',
                  borderColor: 'rgba(0, 200, 150, 0.3)'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: '#00C896',
                  color: '#FFFFFF'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;