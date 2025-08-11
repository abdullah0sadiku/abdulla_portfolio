import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Code, Database, Cloud, Award } from 'lucide-react';

const About = () => {
  const certifications = [
    "Databricks Certified Data Engineer Associate",
    "Apache Airflow 2 & 3 Fundamentals", 
    "Microsoft Azure Fundamentals (AZ-900)",
    "IT Essentials - Cisco",
    "Full-Stack Web Developer",
    "PCAP - Programming Essentials in Python",
    "Neo4J Certified Professional",
  ];

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building modern web applications with React, Laravel, and cutting-edge frameworks for seamless user experiences.",
      stats: "2+ Years"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Creating robust data pipelines and analytics solutions using Databricks, Airflow, and cloud technologies.",
      stats: "7 Months"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Designing scalable cloud solutions on Azure with focus on performance, security, and cost optimization.",
      stats: "Multi-Cloud"
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
            About Me
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#00C896' }}></div>
          <p className="text-xl mt-6 text-gray-300 max-w-3xl mx-auto">
            Passionate developer creating digital solutions that bridge innovation and functionality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div 
                className="absolute -inset-4 rounded-2xl opacity-20 blur-xl"
                style={{ backgroundColor: '#00C896' }}
              ></div>
              
              {/* Main Image Container */}
              <div 
                className="relative rounded-2xl overflow-hidden bg-gray-900"
                
              >
                <img
                  src="images/dulla-04.png"
                  alt="Abdulla Sadiku"
                  className="w-full  object-cover"
                />
                {/* Overlay gradient */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: 'linear-gradient(45deg, #00C89, transparent)'
                  }}
                ></div>
              </div>

              {/* Floating stats */}
              <motion.div
                className="absolute -bottom-6 -right-6 p-4 rounded-xl border backdrop-blur-sm"
                style={{ 
                  backgroundColor: 'rgba(0, 200, 150, 0.1)',
                  borderColor: '#00C896'
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">7+</div>
                  <div className="text-xs text-gray-300">Certifications</div>
                </div>
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
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Motivated Computer Science student with hands-on experience in 
                <span className="text-white font-semibold"> Data Engineering</span>, 
                <span className="text-white font-semibold"> Full-Stack Development</span>, and 
                <span className="text-white font-semibold"> Cloud Solutions</span>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Currently interning at <span className="text-white font-semibold">XponentL Data (Genpact)</span>, 
                working with cutting-edge technologies like Databricks, Apache Airflow, and Azure Cloud. 
                I specialize in transforming complex business requirements into scalable digital solutions.
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <Award className="mr-2" style={{ color: '#00C896' }} size={20} />
                Certifications & Achievements
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {certifications.map((cert, index) => (
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