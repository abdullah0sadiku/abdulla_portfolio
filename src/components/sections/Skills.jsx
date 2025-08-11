import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { 
  Code, 
  Database, 
  Settings, 
  ExternalLink,
  Award,
  Zap,
  TrendingUp
} from 'lucide-react';

const Skills = () => {
  const skills = {
    "Frontend & Web": {
      icon: Code,
      color: '#00C896',
      skills: [
        "ReactJS", "JavaScript", "HTML & CSS", "TailwindCSS", 
        "Bootstrap", "PHP", "Laravel", "Django"
      ]
    },
    "Data & Cloud": {
      icon: Database,
      color: '#694E70',
      skills: [
        "Python", "SQL", "Databricks", "Apache Airflow", 
        "dbt", "Azure Cloud", "Linux", "MySQL"
      ]
    },
    "DevOps & Tools": {
      icon: Settings,
      color: '#FFFFFF',
      skills: [
        "GitHub", "Git", "Visual Studio Code", "Postman", 
        "Jupyter", "Azure Portal", "Neo4j"
      ]
    }
  };

  const badges = [
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      image: "images/badges/azure.png",
      link: "https://learn.microsoft.com/en-us/users/abdullasadiku-6684/credentials/fa860b70d83f55ac?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      skills: ["Azure Services", "Cloud Concepts", "Security", "Compliance"],
      featured: true,

      color: '#00C896'
    },
    {
      name: "Databricks Certified Data Engineer Associate",
      image: "images/badges/associate-badge-de.png",
      link: "https://credentials.databricks.com/fb08771c-d2a1-47d8-ac5c-455ed3b68d91#acc.nm3XpwNK",
      skills: ["Apache Spark", "Delta Lake", "Databricks", "ETL", "Python"],
      featured: true,
      color: '#694E70'
    },
    {
      name: "Apache Airflow 3 Fundamentals",
      image: "images/badges/astronomer.png",
      link: "https://www.credly.com/badges/640f5ca8-9552-45ab-a44c-a8025ad55f58/linked_in_profile",
      skills: ["Apache Airflow", "DAGs", "Data Pipelines", "Orchestration"],
      color: '#FFFFFF'
    },
    {
      name: "Neo4j Certified Professional",
      image: "images/badges/neo4j.png",
      link: "https://graphacademy.neo4j.com/c/571f17f2-8e69-4e56-ac94-625aaca94022/",
      skills: ["Cypher", "Graph Database", "Production"],
      color: '#00C896'
    },
    {
      name: "PCAP Python Essentials",
      image: "images/badges/python.png",
      link: "https://www.linkedin.com/in/abdulla-sadiku-751384291/details/certifications/1748038504484/single-media-viewer?type=DOCUMENT&profileId=ACoAAEa2Wy0BdoB8q1eyLliZsqX3FI-NxnDVHqo&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BDXTc2lX%2FQZmIXidnh%2F9gAA%3D%3D",
      skills: ["Python", "Programming", "Data Structures", "OOP"],
      color: '#694E70'
    },
    {
      name: "IT Essentials - Cisco",
      image: "images/badges/ITE.png",
      link: "https://www.credly.com/badges/376c2f14-eb49-40ba-9671-a688b44fdd39/public_url",
      skills: ["Hardware", "Networking", "Operating Systems"],
      color: '#FFFFFF'
    }
  ];

  return (
    <motion.section 
      id="skills" 
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f1419 0%, #132946 50%, #1e3a5f 100%)'
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: '#00C896' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 opacity-5"
          style={{
            background: 'linear-gradient(45deg, #694E70, #00C896)',
            clipPath: 'polygon(30% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
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
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#00C896' }}></div>
          <p className="text-xl mt-6 text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise in modern development and data technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {Object.entries(skills).map(([category, data], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card 
                className="border shadow-xl h-full transition-all duration-300 hover:shadow-2xl group"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(0, 200, 150, 0.2)'
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div 
                      className="p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: data.color }}
                    >
                      <data.icon 
                        className={data.color === '#FFFFFF' ? 'text-black' : 'text-white'} 
                        size={28} 
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {data.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="outline"
                          className="w-full text-center py-2 border transition-all duration-300 hover:scale-105 text-xs"
                          style={{ 
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            color: '#FFFFFF',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)'
                          }}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Professional Certifications
            </h3>
            <div className="w-12 h-1 mx-auto rounded-full" style={{ backgroundColor: '#00C896' }}></div>
            <p className="text-lg mt-4 text-gray-300">
              Industry-recognized credentials and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={badge.featured ? "lg:col-span-2" : ""}
              >
                <Card 
                  className={`border shadow-xl transition-all duration-300 hover:shadow-2xl ${
                    badge.featured ? 'border-2' : ''
                  }`}
                  style={{ 
                    backgroundColor: 'rgba(0, 200, 150, 0.05)',
                    borderColor: badge.featured ? '#00C896' : 'rgba(0, 200, 150, 0.2)'
                  }}
                >
                  <CardContent className={`p-8 ${badge.featured ? 'md:flex md:items-center md:space-x-8' : ''}`}>
                    <div className={`${badge.featured ? 'md:w-1/3' : ''} text-center mb-6 md:mb-0 relative`}>
                      <div className="relative inline-block">
                        <div 
                          className="w-32 h-32 rounded-xl flex items-center justify-center mx-auto p-4"
                          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        >
                          <img
                            src={badge.image}
                            alt={badge.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        
                        
                        
                        {badge.featured && (
                          <motion.div
                            className="absolute -top-2 -left-2 p-2 rounded-full"
                            style={{ backgroundColor: badge.color }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          >
                            <Award className="text-white" size={16} />
                          </motion.div>
                        )}
                      </div>
                    </div>
                    
                    <div className={`${badge.featured ? 'md:w-2/3' : ''} text-center ${badge.featured ? 'md:text-left' : ''}`}>
                      <h4 className="text-xl font-bold mb-2 text-white">
                        {badge.name}
                      </h4>
                      
                      <div className={`flex flex-wrap gap-2 mb-4 ${badge.featured ? 'justify-center md:justify-start' : 'justify-center'}`}>
                        {badge.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-lg border"
                            style={{ 
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              color: '#FFFFFF',
                              borderColor: 'rgba(255, 255, 255, 0.2)'
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <motion.a
                        href={badge.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-xl transition-all duration-300 border"
                        style={{ 
                          backgroundColor: badge.color,
                          color: badge.color === '#FFFFFF' ? '#000000' : '#FFFFFF',
                          borderColor: badge.color
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: 'transparent',
                          color: badge.color
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Zap size={16} />
                        Verify Credential
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;