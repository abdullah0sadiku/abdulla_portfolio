import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { useTranslation } from 'react-i18next';
import { Building, Calendar, MapPin, CheckCircle, TrendingUp } from 'lucide-react';

const Experience = () => {
  const { t } = useTranslation();
  
  const experiences = [
    {
      title: "Data Engineer (Full-Time)",
      company: "Genpact",
      period: "January 2026 - Present",
      location: "Remote & Kosovo",
      status: "current",
      description: "Working as a Data Engineer, working on enterprise data pipeline orchestration using Apache Airflow 3 and Databricks Notebooks. Creating optimized SQL queries and great POCs for clients implementing transformation workflows using dbt.",
      technologies: ["Apache Airflow", "Databricks", "SQL", "dbt", "Azure Cloud", "Python", "Linux", "Neo4j"],
      highlights: [
        "Promoted to full-time Data Engineer Associate position",
        "Developed 15+ enterprise data pipelines using Apache Airflow 3",
        "Optimized SQL queries reducing execution time by 40%",
        "Implemented dbt transformation workflows for production systems",
        "Collaborated with cross-functional teams on cloud architecture",
        "Delivring projects on time and within budget"
      ],
      color: '#00C896'
    },
    {
      title: "Data Engineer Associate (Full-Time)",
      company: "XponentL Data",
      period: "August 2025 - November 2025",
      location: "Remote",
      status: "Completed",
      description: "Started as a full-time Data Engineer Associate, working on enterprise data pipeline orchestration using Apache Airflow 3 and Databricks Notebooks. Creating optimized SQL queries and implementing transformation workflows using dbt.",
      technologies: ["Apache Airflow", "Databricks", "SQL", "dbt", "Azure Cloud", "Python", "Linux", "Neo4j"],
      highlights: [
        "Promoted to full-time Data Engineer Associate position",
        "Developed 15+ enterprise data pipelines using Apache Airflow 3",
        "Optimized SQL queries reducing execution time by 40%",
        "Implemented dbt transformation workflows for production systems",
        "Collaborated with cross-functional teams on cloud architecture"
      ],
      color: '#00C89E'
    },
    {
      title: "Full-Stack Web Developer",
      company: "Freelancer",
      period: "March 2024 - February 2025",
      location: "Remote",
      status: "Completed",
      description: "Developing web applications including Al-Kurra school management platform with role-based access, online meetings via WebRTC, and comprehensive grading systems.",
      technologies: ["Laravel", "PHP", "MySQL", "WebRTC", "JavaScript", "ReactJS", "TailwindCSS", "HTML", "CSS", "Bootstrap", "Python", "Django"],
      highlights: [
        "Built comprehensive school management system",
        "Implemented real-time video conferencing with WebRTC",
        "Designed role-based access control systems",
        "Created responsive UIs with modern frameworks"
      ],
      color: '#694E70'
    },
    {
      title: "Data Engineering Internship - Xponian Program",
      company: "XponentL Data (Genpact Company)",
      period: "February 2025 - July 2025",
      location: "Remote",
      status: "Completed",
      description: "Participating in the comprehensive Xponina Data Engineering Program at XponentL Data, focusing on enterprise-level data pipeline development and cloud-based data solutions. Working with cutting-edge technologies to build scalable data infrastructure.",
      technologies: ["Apache Airflow", "Databricks", "SQL", "Python", "Azure Cloud", "dbt", "Neo4j", "Linux", "Data Modeling"],
      highlights: [
        "Selected for competitive Xponina Data Engineering Program",
        "Building enterprise data pipelines using Apache Airflow",
        "Working with Databricks for advanced analytics workflows",
        "Implementing data transformation using dbt best practices",
        "Learning cloud-native data architecture on Azure platform"
      ],
      color: '#FF6B35'
    },
    {
      title: "Python Scripting Internship",
      company: "ROI Academy & Sharp Group LTD",
      period: "June 2023",
      location: "Kosovo",
      status: "completed",
      description: "Completed hands-on internship in Python department, working on scripting tasks aligned with real company needs. Gained experience in Python automation and API handling.",
      technologies: ["Python", "API Integration", "Automation"],
      highlights: [
        "Automated repetitive tasks using Python scripts",
        "Integrated third-party APIs for data processing",
        "Developed web scraping solutions",
        "Learned enterprise-level Python development practices"
      ],
      color: '#FFFFFF'
    }
  ];

  return (
    <motion.section 
      id="experience" 
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #132946 0%, #1e3a5f 25%, #2d5a7b 75%, #132946 100%)'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 rounded-full opacity-10"
          style={{ backgroundColor: '#00C896' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('experience.title')}
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#00C896' }}></div>
          <p className="text-xl mt-6 text-gray-300 max-w-3xl mx-auto rtl-text">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              
              <Card 
                className="border shadow-xl transition-all duration-300 hover:shadow-2xl"
                style={{ 
                  backgroundColor: 'rgba(0, 200, 150, 0.05)',
                  borderColor: 'rgba(0, 200, 150, 0.2)'
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-110"
                        style={{ backgroundColor: exp.color }}
                      >
                        <Building 
                          className={exp.color === '#FFFFFF' ? 'text-black' : 'text-white'} 
                          size={24} 
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold mt-1 text-gray-300">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col lg:items-end mt-2 lg:mt-0 space-y-2">
                          <Badge 
                            className="font-medium border"
                            style={{ 
                              backgroundColor: exp.status === 'current' ? '#00C896' : '#694E70',
                              color: '#FFFFFF',
                              borderColor: exp.status === 'current' ? '#00C896' : '#694E70'
                            }}
                          >
                            <Calendar size={14} className="mr-1" />
                            {exp.period}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-400">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed rtl-text">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 flex items-center text-white">
                          <TrendingUp size={18} className="mr-2" style={{ color: '#00C896' }} />
                          {t('experience.labels.highlights')}
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <motion.li
                              key={hIndex}
                              className="flex items-start text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: hIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle size={16} className="mt-0.5 mr-3 flex-shrink-0" style={{ color: '#00C896' }} />
                              <span className="text-sm rtl-text">{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold mb-3 text-white">
                          {t('experience.labels.technologies')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <Badge 
                                variant="outline" 
                                className="border transition-all duration-300 hover:scale-105 text-xs"
                                style={{ 
                                  borderColor: 'rgba(255, 255, 255, 0.3)',
                                  color: '#FFFFFF',
                                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                                }}
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;