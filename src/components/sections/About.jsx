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

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Images Grid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-3 w-full">
              {/* Desktop Layout */}
              <div className="hidden md:flex gap-4">
                {/* Left Column - Stacked closer */}
                <div className="flex flex-col gap-2">
                  {/* Image 1 - Top Left */}
                  <motion.div
                    className="z-10 group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, zIndex: 20 }}
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div 
                        className="absolute -inset-3 rounded-xl opacity-20 blur-xl"
                        style={{ backgroundColor: '#00C896' }}
                      ></div>
                      <div className="w-64 h-auto relative rounded-xl overflow-hidden bg-gray-900 shadow-2xl">
                        <img
                          src="images/dulla-07.jpg"
                          alt="Abdulla Sadiku - Professional"
                          className="w-full h-auto object-cover transition-all duration-300 group-hover:blur-sm group-hover:grayscale"
                        />
                        <div 
                          className="absolute inset-0 opacity-20"
                          style={{
                            background: 'linear-gradient(45deg, #00C896, transparent)'
                          }}
                        ></div>
                        {/* Hover Comment */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4"
                          style={{ backgroundColor: 'rgba(0, 200, 150, 0.6)' }}
                        >
                          <div className="text-center text-white">
                            <h4 className="font-bold text-lg mb-2">{t('about.hoverComments.professional.title')}</h4>
                            <p className="text-sm text-gray-200">"{t('about.hoverComments.professional.text')}"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Image 3 - Bottom Left (Closer to top image) */}
                  <motion.div
                    className="z-10 group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, zIndex: 20 }}
                  >
                    <div className="relative">
                      <div 
                        className="absolute -inset-3 rounded-xl opacity-25 blur-xl"
                        style={{ backgroundColor: '#00C896' }}
                      ></div>
                      <div className="w-64 h-auto relative rounded-xl overflow-hidden bg-gray-900 shadow-2xl">
                        <img
                          src="images/dulla-09.jpg"
                          alt="Abdulla Sadiku - Focused"
                          className="w-full h-auto object-cover transition-all duration-300 group-hover:blur-sm group-hover:grayscale"
                        />
                        <div 
                          className="absolute inset-0 opacity-20"
                          style={{
                            background: 'linear-gradient(225deg, #00C896, transparent)'
                          }}
                        ></div>
                        {/* Hover Comment */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4"
                          style={{ backgroundColor: 'rgba(0, 200, 150, 0.6)' }}
                        >
                          <div className="text-center text-white">
                            <h4 className="font-bold text-base mb-1">Deep Focus</h4>
                            <p className="text-sm text-gray-200">"Debugging the mysteries of the universe"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-3">
                  {/* Image 2 - Top Right */}
                  <motion.div
                    className="z-10 group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, zIndex: 20 }}
                  >
                    <div className="relative">
                      <div 
                        className="absolute -inset-3 rounded-xl opacity-15 blur-xl"
                        style={{ backgroundColor: '#00C896' }}
                      ></div>
                      <div className="w-56 h-auto relative rounded-xl overflow-hidden bg-gray-900 shadow-2xl">
                        <img
                          src="images/dulla-08.jpg"
                          alt="Abdulla Sadiku - Creative"
                          className="w-full h-auto object-cover transition-all duration-300 group-hover:blur-sm group-hover:grayscale"
                        />
                        <div 
                          className="absolute inset-0 opacity-20"
                          style={{
                            background: 'linear-gradient(135deg, #00C896, transparent)'
                          }}
                        ></div>
                        {/* Hover Comment */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3"
                          style={{ backgroundColor: 'rgba(0, 200, 150, 0.6)' }}
                        >
                          <div className="text-center text-white">
                            <h4 className="font-bold text-base mb-1">Creative Spark</h4>
                            <p className="text-sm text-gray-200">"Problem-solving mode activated"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Image 4 - Bottom Right (Landscape) */}
                  <motion.div
                    className="z-10 group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, zIndex: 20 }}
                  >
                    <div className="relative">
                      <div 
                        className="absolute -inset-3 rounded-xl opacity-18 blur-xl"
                        style={{ backgroundColor: '#00C896' }}
                      ></div>
                      <div className="w-56 h-auto relative rounded-xl overflow-hidden bg-gray-900 shadow-2xl">
                        <img
                          src="images/dulla-10.jpg"
                          alt="Abdulla Sadiku - Innovative"
                          className="w-full h-auto object-cover transition-all duration-300 group-hover:blur-sm group-hover:grayscale"
                        />
                        <div 
                          className="absolute inset-0 opacity-20"
                          style={{
                            background: 'linear-gradient(315deg, #00C896, transparent)'
                          }}
                        ></div>
                        {/* Hover Comment */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4"
                          style={{ backgroundColor: 'rgba(0, 200, 150, 0.6)' }}
                        >
                          <div className="text-center text-white">
                            <h4 className="font-bold text-base mb-1">Innovation Mode</h4>
                            <p className="text-sm text-gray-200">"Building the future, one line at a time"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Mobile Layout - Single Column */}
              <div className="md:hidden flex flex-col gap-4 w-full">
                {/* Image 1 - Mobile */}
                <motion.div
                  className="z-10 group w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, zIndex: 20 }}
                >
                  <div className="relative">
                    <div 
                      className="absolute -inset-3 rounded-xl opacity-20 blur-xl"
                      style={{ backgroundColor: '#00C896' }}
                    ></div>
                    <div className="w-full h-auto relative rounded-xl overflow-hidden bg-gray-900 shadow-2xl">
                      <img
                        src="images/dulla-07.jpg"
                        alt="Abdulla Sadiku - Professional"
                        className="w-full h-auto object-cover transition-all duration-300 group-hover:blur-sm"
                      />
                      <div 
                        className="absolute inset-0 opacity-20"
                        style={{
                          background: 'linear-gradient(45deg, #00C896, transparent)'
                        }}
                      ></div>
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4"
                        style={{ backgroundColor: 'rgba(0, 200, 150, 0.6)' }}
                      >
                        <div className="text-center text-white">
                          <h4 className="font-bold text-lg mb-2">Professional Mode</h4>
                          <p className="text-sm text-gray-200">"When the code actually works on the first try"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Image 2 - Mobile */}
                <motion.div
                  className="z-10 group w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, zIndex: 20 }}
                >
                  <div className="relative">
                    <div 
                      className="absolute -inset-3 rounded-xl opacity-15 blur-xl"
                      style={{ backgroundColor: '#00C896' }}
                    ></div>
                    <div className="w-full h-auto relative rounded-xl overflow-hidden bg-gray-900 shadow-2xl">
                      <img
                        src="images/dulla-08.jpg"
                        alt="Abdulla Sadiku - Creative"
                        className="w-full h-auto object-cover transition-all duration-300 group-hover:blur-sm"
                      />
                      <div 
                        className="absolute inset-0 opacity-20"
                        style={{
                          background: 'linear-gradient(135deg, #00C896, transparent)'
                        }}
                      ></div>
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4"
                        style={{ backgroundColor: 'rgba(0, 200, 150, 0.6)' }}
                      >
                        <div className="text-center text-white">
                          <h4 className="font-bold text-base mb-1">Creative Spark</h4>
                          <p className="text-sm text-gray-200">"Problem-solving mode activated"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Image 3 - Mobile */}
                <motion.div
                  className="z-10 group w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, zIndex: 20 }}
                >
                  <div className="relative">
                    <div 
                      className="absolute -inset-3 rounded-xl opacity-25 blur-xl"
                      style={{ backgroundColor: '#00C896' }}
                    ></div>
                    <div className="w-full h-auto relative rounded-xl overflow-hidden bg-gray-900 shadow-2xl">
                      <img
                        src="images/dulla-09.jpg"
                        alt="Abdulla Sadiku - Focused"
                        className="w-full h-auto object-cover transition-all duration-300 group-hover:blur-sm"
                      />
                      <div 
                        className="absolute inset-0 opacity-20"
                        style={{
                          background: 'linear-gradient(225deg, #00C896, transparent)'
                        }}
                      ></div>
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4"
                        style={{ backgroundColor: 'rgba(0, 200, 150, 0.6)' }}
                      >
                        <div className="text-center text-white">
                          <h4 className="font-bold text-base mb-1">Deep Focus</h4>
                          <p className="text-sm text-gray-200">"Debugging the mysteries of the universe"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Image 4 - Mobile */}
                <motion.div
                  className="z-10 group w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, zIndex: 20 }}
                >
                  <div className="relative">
                    <div 
                      className="absolute -inset-3 rounded-xl opacity-18 blur-xl"
                      style={{ backgroundColor: '#00C896' }}
                    ></div>
                    <div className="w-full h-auto relative rounded-xl overflow-hidden bg-gray-900 shadow-2xl">
                      <img
                        src="images/dulla-10.jpg"
                        alt="Abdulla Sadiku - Innovative"
                        className="w-full h-auto object-cover transition-all duration-300 group-hover:blur-sm"
                      />
                      <div 
                        className="absolute inset-0 opacity-20"
                        style={{
                          background: 'linear-gradient(315deg, #00C896, transparent)'
                        }}
                      ></div>
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4"
                        style={{ backgroundColor: 'rgba(0, 200, 150, 0.6)' }}
                      >
                        <div className="text-center text-white">
                          <h4 className="font-bold text-base mb-1">Innovation Mode</h4>
                          <p className="text-sm text-gray-200">"Building the future, one line at a time"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating elements container */}
            <div className="relative w-full h-20">

              {/* Floating stats - repositioned */}
              <motion.div
                className="absolute bottom-4 left-4 p-4 rounded-xl border backdrop-blur-sm z-30"
                style={{ 
                  backgroundColor: 'rgba(0, 200, 150, 0.1)',
                  borderColor: '#00C896'
                }}
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">8+</div>
                  <div className="text-xs text-gray-300">{t('about.stats.certs')}</div>
                </div>
              </motion.div>

              {/* Geometric Shape 1 - Circle */}
              <motion.div
                className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full z-30"
                style={{ backgroundColor: '#00C896' }}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Geometric Shape 2 - Triangle */}
              <motion.div
                className="absolute top-1/3 right-4 z-30"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div 
                  className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent"
                  style={{ borderBottomColor: '#00C896' }}
                />
              </motion.div>

              {/* Geometric Shape 3 - Circle */}
              <motion.div
                className="absolute bottom-1/3 right-12 w-2 h-2 rounded-full z-30"
                style={{ backgroundColor: '#00C896' }}
                animate={{ 
                  x: [0, 6, -6, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Geometric Shape 4 - Small Triangle */}
              <motion.div
                className="absolute top-1/2 left-8 z-30"
                animate={{ 
                  rotate: [0, -90, -180, -270, -360],
                  scale: [1, 0.8, 1.2, 0.9, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div 
                  className="w-0 h-0 border-l-1.5 border-r-1.5 border-b-3 border-transparent"
                  style={{ borderBottomColor: '#00C896' }}
                />
              </motion.div>
            </div>
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