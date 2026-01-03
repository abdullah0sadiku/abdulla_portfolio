import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Code, Database, Cloud, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  // Calculate months of Data Engineering experience (started February 2025)
  const calculateDataEngineeringExperience = () => {
    const startDate = new Date(2025, 1, 1); // February 2025 (month is 0-indexed)
    const currentDate = new Date();
    
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;
    
    return totalMonths > 0 ? `${totalMonths} ${totalMonths === 1 ? 'Month' : 'Months'}` : '< 1 Month';
  };

  const highlights = [
    {
      icon: Code,
      title: t('about.highlights.fullStack.title'),
      description: t('about.highlights.fullStack.description'),
      stats: t('about.highlights.fullStack.stats')
    },
    {
      icon: Database,
      title: t('about.highlights.dataEngineering.title'),
      description: t('about.highlights.dataEngineering.description'),
      stats: calculateDataEngineeringExperience()
    },
    {
      icon: Cloud,
      title: t('about.highlights.cloud.title'),
      description: t('about.highlights.cloud.description'),
      stats: t('about.highlights.cloud.stats')
    }
  ];

  return (
    <motion.section 
      id="about" 
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #132946 0%, #1e3a5f 50%, #2d5a7b 100%)'
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300C896' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-2c9.946 0 18-8.054 18-18s-8.054-18-18-18V0c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('about.title')}
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#00C896' }}></div>
          <p className="text-xl mt-6 text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Single Profile Image */}
          <motion.div
            className="relative flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Glow effect */}
              <div 
                className="absolute -inset-4 rounded-2xl opacity-30 blur-2xl"
                style={{ backgroundColor: '#00C896' }}
              ></div>
              
              {/* Image container */}
              <div className="relative w-full max-w-sm md:max-w-md rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
                <img
                  src="images/dulla-07.jpg"
                  alt="Abdulla Sadiku - Professional"
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: 'linear-gradient(45deg, #00C896, transparent)'
                  }}
                ></div>
                
                {/* Hover overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6"
                  style={{ backgroundColor: 'rgba(0, 200, 150, 0.7)' }}
                >
                  <div className="text-center text-white">
                    <h4 className="font-bold text-xl mb-2">{t('about.hoverComments.professional.title')}</h4>
                    <p className="text-sm text-gray-100">"{t('about.hoverComments.professional.text')}"</p>
                  </div>
                </div>
              </div>

              {/* Floating stats badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 p-3 md:p-4 rounded-xl border backdrop-blur-sm z-30"
                style={{ 
                  backgroundColor: 'rgba(19, 41, 70, 0.9)',
                  borderColor: '#00C896'
                }}
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-white">8+</div>
                  <div className="text-[10px] md:text-xs text-gray-300">{t('about.stats.certs')}</div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-3 -left-3 w-6 h-6 rounded-full z-20"
                style={{ backgroundColor: '#00C896', opacity: 0.6 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/4 -right-2 w-3 h-3 rounded-full z-20"
                style={{ backgroundColor: '#00C896', opacity: 0.4 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 about-description">
                {t('about.description1')}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 about-description">
                {t('about.description2')}
              </p>
              <p className="text-base text-gray-400 leading-relaxed about-description">
                <em>{t('about.warning')}</em>
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <Award className="mr-2" style={{ color: '#00C896' }} size={20} />
                {t('about.certificationsTitle')}
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {t('about.certifications', { returnObjects: true }).map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#00C896' }}></div>
                    <Badge 
                      variant="secondary" 
                      className="text-sm font-medium"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#FFFFFF',
                        border: '1px solid rgba(0, 200, 150, 0.2)'
                      }}
                    >
                      {cert}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                className="border shadow-xl h-full transition-all duration-300 hover:shadow-2xl"
                style={{ 
                  backgroundColor: 'rgba(0, 200, 150, 0.05)',
                  borderColor: 'rgba(0, 200, 150, 0.2)'
                }}
              >
                <CardContent className="p-8 text-center">
                  <div 
                    className="inline-flex p-4 rounded-xl mb-6 relative"
                    style={{ backgroundColor: '#00C896' }}
                  >
                    <highlight.icon className="text-white" size={32} />
                    <div 
                      className="w-16  absolute -top-2 -right-2 px-2 py-1 rounded-lg text-xs font-bold"
                      style={{ backgroundColor: '#132946', color: '#00C896' }}
                    >
                      {highlight.stats}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;