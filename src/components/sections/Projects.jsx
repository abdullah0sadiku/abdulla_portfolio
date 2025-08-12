import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { useTranslation } from 'react-i18next';
import { 
  ExternalLink, 
  Github, 
  Calendar,
  Star,
  Globe,
  Code2,
  Database
} from 'lucide-react';

const Projects = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: "Al-Kurra School Management System",
      description: "A comprehensive web platform for managing schools with role-based access for Principals, Teachers, and Students. Features include performance statistics, grading, class management, and online meetings via WebRTC.",
      technologies: ["Laravel 10&11", "PHP", "MySQL", "WebRTC"],
      status: "In Progress",
      period: "Oct 2024 - Present",
      githubUrl: "https://github.com/abdullah0sadiku/Al-Kurra_School",
      featured: true,
      category: "Web Application",
      icon: Globe,
      color: '#00C896'
    },
    {
      title: "Student Gradebook Manager",
      description: "A Java-based application for managing student grades and academic records. Features comprehensive grade tracking, student performance analytics, and report generation capabilities.",
      technologies: ["Java", "Database Management"],
      status: "Completed",
      githubUrl: "https://github.com/abdullah0sadiku/Student-Gradebook-Manager",
      category: "Desktop Application",
      icon: Code2,
      color: '#694E70'
    },
    {
      title: "Reports Checkpoint",
      description: "A Python-based reporting system for generating and managing various types of reports. Includes data processing, visualization, and automated report generation features.",
      technologies: ["Python", "Data Processing"],
      status: "Completed",
      githubUrl: "https://github.com/abdullah0sadiku/Reports_Checkpoint",
      category: "Data Tool",
      icon: Database,
      color: '#FFFFFF'
    },
    {
      title: "FlyChat",
      description: "A real-time web chat application allowing users to message each other instantly through a simple and clean UI. Features real-time messaging and user authentication.",
      technologies: ["ReactJS", "PHP", "MySQL", "JavaScript"],
      status: "Completed",
      githubUrl: "https://github.com/abdullah0sadiku/flychat",
      category: "Web Application",
      icon: Globe,
      color: '#00C896'
    },
    {
      title: "Laravel E-commerce Platform",
      description: "A complete e-commerce web app with dual roles (Admin & Client). Admins can manage products and orders, while users can place and track orders by status.",
      technologies: ["Laravel 10", "PHP", "MySQL"],
      status: "Completed",
      githubUrl: "https://github.com/abdullah0sadiku/laravelproject",
      category: "E-commerce",
      icon: Globe,
      color: '#694E70'
    },
    {
      title: "Kosovo Universities Database",
      description: "A comprehensive database and web application for Kosovo universities information. Features university listings, program details, and search functionality.",
      technologies: ["Python", "Database Management"],
      status: "Completed",
      githubUrl: "https://github.com/abdullah0sadiku/kosovo_universities",
      category: "Database System",
      icon: Database,
      color: '#FFFFFF'
    }
  ];

  const getStatusColor = (status) => {
    return status === 'Completed' ? '#694E70' : '#00C896';
  };

  return (
    <section 
      id="projects" 
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f1419 0%, #132946 50%, #1e3a5f 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-5"
          style={{ backgroundColor: '#00C896' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 opacity-5"
          style={{
            background: 'linear-gradient(45deg, #694E70, #00C896)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('projects.title')}
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#00C896' }}></div>
          <p className="text-xl mt-6 text-gray-300 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={project.featured ? "lg:col-span-2" : ""}
              >
                <Card 
                  className={`border shadow-xl transition-all duration-300 hover:shadow-2xl h-full group ${
                    project.featured ? 'border-2' : ''
                  }`}
                  style={{ 
                    backgroundColor: 'rgba(0, 200, 150, 0.05)',
                    borderColor: project.featured ? '#00C896' : 'rgba(0, 200, 150, 0.2)'
                  }}
                >
                  <CardContent className="p-6">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: project.color }}
                        >
                          <ProjectIcon 
                            className={project.color === '#FFFFFF' ? 'text-black' : 'text-white'} 
                            size={20} 
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {project.title}
                          </h3>
                          <span className="text-sm text-gray-400">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {project.featured && (
                          <motion.div
                            style={{ color: '#00C896' }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          >
                            <Star size={20} fill="currentColor" />
                          </motion.div>
                        )}
                        <Badge
                          className="border font-medium"
                          style={{ 
                            backgroundColor: getStatusColor(project.status),
                            color: '#FFFFFF',
                            borderColor: getStatusColor(project.status)
                          }}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Period */}
                    {project.period && (
                      <div className="flex items-center gap-2 mb-4 text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm">{project.period}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed rtl-text">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="border text-xs"
                            style={{ 
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                              color: '#FFFFFF',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)'
                            }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl border font-medium transition-all duration-300"
                          style={{ 
                            borderColor: '#00C896',
                            color: '#00C896',
                            backgroundColor: 'rgba(0, 200, 150, 0.1)'
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: '#00C896',
                            color: '#FFFFFF'
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                          <span className="text-sm">View Code</span>
                        </motion.a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;