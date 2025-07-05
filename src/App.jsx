import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { 
  Github, 
  Linkedin, 
  Instagram,
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code,
  Database,
  Camera,
  Download,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import './App.css';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [messageSent, setMessageSent] = useState(false);
  const [videoLangIndexes, setVideoLangIndexes] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const langDisplay = { ar: "Arabic", en: "English", shq: "Shqip" };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };


  const imagePaths = Array.from({ length: 24 }).map((_, index) =>
    `/abdulla_portfolio/images/gallery/img${index + 1}.JPG`
  );
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const onClickDownload = () => {
    const link = document.createElement('a');
    link.href = 'resume/Resume Abdulla Sadiku.docx'; 
    link.download = 'Abdulla_Sadiku_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bae298c3-69be-48fc-a10e-91797b9dbd0c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setMessageSent(true);
    }
  };

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 1000); // 2 seconds before refresh
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects','gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const skills = {
    "Web Development": [
      "HTML & CSS",
      "JavaScript",
      "ReactJS",
      "PHP",
      "Laravel",
      "Django",
      "MySQL",
      "Bootstrap",
      "TailwindCSS"
    ],
    "Data Engineering & Cloud": [
      "Python",
      "SQL",
      "Databricks",
      "Apache Airflow",
      "dbt",
      "Azure Cloud",
      "Linux"
    ],
    "Tools & Platforms": [
      "GitHub",
      "Git",
      "Visual Studio Code",
      "Postman",
      "Jupyter",
      "Azure Portal"
    ]
  };

  const experiences = [
    {
      title: "Data Engineering Internship",
      company: "XponentL Data (Genpact Company)",
      period: "February 2025 - Present",
      description: "Working on data pipeline orchestration using Apache Airflow 3 and Databricks Notebooks. Creating optimized SQL queries and implementing transformation workflows using dbt.",
      technologies: ["Apache Airflow", "Databricks", "SQL", "dbt", "Azure Cloud", "Python","Linux","Neo4j"]
    },
    {
      title: "Full-Stack Web Developer",
      company: "Freelancer",
      period: "March 2024 - Present",
      description: "Developing web applications including Al-Kurra school management platform with role-based access, online meetings via WebRTC, and comprehensive grading systems.",
      technologies: ["Laravel", "PHP", "MySQL", "WebRTC", "JavaScript","ReactJS", "TailwindCSS", "HTML", "CSS" , "Bootstrap", "Python" , "Django"]
    },
    {
      title: "Python Scripting Internship",
      company: "ROI Academy & Sharp Group LTD",
      period: "June 2023",
      description: "Completed hands-on internship in Python department, working on scripting tasks aligned with real company needs. Gained experience in Python automation and API handling.",
      technologies: ["Python", "API Integration", "Automation"]
    }
  ];

  const projects = [
    {
      title: "Al-Kurra School Management System",
      description: "A comprehensive web platform for managing schools with role-based access for Principals, Teachers, and Students. Features include performance statistics, grading, class management, and online meetings via WebRTC.",
      technologies: ["Laravel 10&11", "PHP", "MySQL", "WebRTC"],
      status: "In Progress",
      period: "Oct 2024 - Present",
      githubUrl: "https://github.com/abdullah0sadiku/Al-Kurra_School"
    },
    {
      title: "Student Gradebook Manager",
      description: "A Java-based application for managing student grades and academic records. Features comprehensive grade tracking, student performance analytics, and report generation capabilities.",
      technologies: ["Java", "Database Management"],
      status: "Completed",
      githubUrl: "https://github.com/abdullah0sadiku/Student-Gradebook-Manager"
    },
    {
      title: "Abdulla Portfolio",
      description: "Simple landing page portfolio showcasing my skills, projects, and contact information. Built with ReactJS and TailwindCSS for a modern look.",
      technologies: ["ReactJS", "TailwindCSS"],
      status: "Completed",
      githubUrl: "https://github.com/abdullah0sadiku/abdulla_portfolio"
    },
    {
      title: "Reports Checkpoint",
      description: "A Python-based reporting system for generating and managing various types of reports. Includes data processing, visualization, and automated report generation features.",
      technologies: ["Python", "Data Processing"],
      status: "Completed",
      githubUrl: "https://github.com/abdullah0sadiku/Reports_Checkpoint"
    },
    {
      title: "FlyChat",
      description: "A real-time web chat application allowing users to message each other instantly through a simple and clean UI. Features real-time messaging and user authentication.",
      technologies: ["ReactJS", "PHP", "MySQL", "JavaScript"],
      status: "Completed",
      githubUrl: "https://github.com/abdullah0sadiku/flychat"
    },
    {
      title: "Laravel E-commerce Platform",
      description: "A complete e-commerce web app with dual roles (Admin & Client). Admins can manage products and orders, while users can place and track orders by status. Includes category browsing and dynamic search system.",
      technologies: ["Laravel 10", "PHP", "MySQL"],
      status: "Completed",
      githubUrl: "https://github.com/abdullah0sadiku/laravelproject"
    },
    {
      title: "Kosovo Universities Database",
      description: "A comprehensive database and web application for Kosovo universities information. Features university listings, program details, and search functionality for prospective students.",
      technologies: ["Python", "Database Management"],
      status: "Completed",
      githubUrl: "https://github.com/abdullah0sadiku/kosovo_universities"
    },
    {
      title: "TechNova",
      description: "A static front-end e-commerce page replica built with foundational web tools for design and layout practice. Showcases modern web design principles and responsive layouts.",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Completed"
    }
  ];

  const certifications = [
    "Databricks Certified Data Engineer Associate",
    "Apache Airflow 2 & 3 Fundamentals",
    "IT Essentials - Cisco",
    "Full-Stack Web Developer",
    "PCAP - Programming Essentials in Python",
    "Neo4J Certified Professional",
  ];
  
  // Place this above your return statement
  // ...existing code...
const badges = [
  {
    name: "Databricks Certified Data Engineer Associate",
    image: "images/badges/associate-badge-de.png",
    link: "https://credentials.databricks.com/fb08771c-d2a1-47d8-ac5c-455ed3b68d91#acc.nm3XpwNK",
    skills: [
    "Apache Spark",
    "Delta Lake",
    "Databricks",
    "Lakehouse",
    "Delta Live Tables",
    "Data Pipelines",
    "ETL",
    "Production",
    "SQL",
    "Python"]
  },
  {
    name: "Neo4j Certified Professional",
    image: "images/badges/neo4j.png",
    link: "https://graphacademy.neo4j.com/c/571f17f2-8e69-4e56-ac94-625aaca94022/",
    skills: [
    "Cypher",
    "Production",
    "SQL",
    "Python"]
  },
  {
    name: "Apache Airflow 3 Fundamentals",
    image: "images/badges/astronomer.png",
    link: "https://www.credly.com/badges/640f5ca8-9552-45ab-a44c-a8025ad55f58/linked_in_profile",
    skills: ["Apache Airflow",
    "DAGs",
    "Data Pipelines",
    "Orchestration",
    "Scheduling"]
  },
  {
    name: "Apache Airflow 2 Fundamentals",
    image: "images/badges/astronomer1.png",
    link: "https://www.credly.com/badges/b5abf137-8740-4f21-8606-f74e72987cf2/linked_in_profile",
    skills: ["Apache Airflow",
    "DAGs",
    "Data Pipelines",
    "Orchestration",
    "Scheduling"]
  },
  {
    name: "PCAP Python Essentials",
    image: "images/badges/python.png",
    link: "https://www.linkedin.com/in/abdulla-sadiku-751384291/details/certifications/1748038504484/single-media-viewer?type=DOCUMENT&profileId=ACoAAEa2Wy0BdoB8q1eyLliZsqX3FI-NxnDVHqo&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BDXTc2lX%2FQZmIXidnh%2F9gAA%3D%3D",
    skills: ["Python", "Programming", "Data Structures", "Algorithms", "Object-Oriented Programming"]
  },
  {
    name: "IT Essentials - Cisco",
    image: "images/badges/ITE.png",
    link: "https://www.credly.com/badges/376c2f14-eb49-40ba-9671-a688b44fdd39/public_url",
    skills: ["Computer Hardware",
    "Laptops",
    "Mobile Devices",
    "Networking Concepts",
    "Operating Systems",
    "Printers",
    "Troubleshooting"]
  },
];

  
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav
  className={`
    fixed top-0 w-full z-50 transition-all duration-300
    ${scrolled
      ? 'bg-slate-700 backdrop-blur-sm  opacity-100 pointer-events-auto'
      : 'bg-transparent border-transparent opacity-100 pointer-events-auto'}
  `}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
      <div className="text-2xl font-bold text-white">
        DAWA
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {['home', 'about', 'skills', 'experience', 'projects','gallery','contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`capitalize hover:text-stone-100 transition-colors ${
              activeSection === item ? 'text-stone-100' : 'text-gray-400'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="md:hidden py-4 border-t border-gray-800">
        {['home', 'about', 'skills', 'experience', 'projects','gallery','contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="block w-full text-left py-2 capitalize hover:text-orange-400 transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
    )}
  </div>
</nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-stone-400"></div>
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-white bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Abdulla Sadiku
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            variants={fadeInUp}
          >
            Full-stack Web Developer | Data Engineer <br /> Photographer | Graphic Designer | Video Editor
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 text-orange-400">
              <Mail size={20} />
              <span>abdullahbalisadiku@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-orange-400">
              <Phone size={20} />
              <span>+383 48 285002</span>
            </div>
            <div className="flex items-center gap-2 text-orange-400">
              <MapPin size={20} />
              <span>Gjilan, Kosovo</span>
            </div>
          </motion.div>
          <motion.div 
            className="flex justify-center gap-6 mb-12"
            variants={fadeInUp}
          >
            <a href="https://github.com/abdullah0sadiku" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/abdulla-sadiku-751384291/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={32} />
            </a>
            <a href="https://www.instagram.com/abdulla.sadiku" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={32} />
            </a>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-br from-slate-300 to-slate-400 hover:from-slate-900  text-slate-900 hover:text-slate-100 px-8 py-3 rounded-sm font-semibold transition-colors"
            >
              Learn More
              <ChevronDown className="ml-2" size={20} />
            </Button>
          </motion.div>
        </motion.div>

      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 bg-gradient-to-l from-slate-300 to-white text-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Motivated and detail-oriented Computer Science student with hands-on experience in Data Engineering, Full-Stack Web Development, and Python scripting. Currently interning at XponentL Data (a Genpact company), where I work with tools like Databricks, Airflow 3, SQL, dbt, and Azure Cloud.
              </p>
              <p className="text-lg text-gray-700 mb-6 align-justify">
                I completed a 6-month bootcamp in Full-Stack Web Development and have a strong 
                background in debugging, open-source contribution, and delivering clean, scalable code. 
                I'm passionate about solving real-world problems through technology, with growing 
                interest in AI and cloud-native solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="primary" className="px-2 py-1 text-xs bg-slate-600 text-slate-200 rounded shadow">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-slate-800 to-slate-300  flex items-center justify-center">
                <img
                  src="images/dulla-04.png"
                  alt=""
                  className="w-full h-full  object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills & Badges Section */}
      <motion.section 
        id="skills" 
        className="py-20 bg-gradient-to-br from-slate-700 to-neutral-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies & Badges</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="bg-slate-700 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {index === 0 && <Code className="mr-3 text-orange-500" size={24} />}
                    {index === 1 && <Database className="mr-3 text-orange-500" size={24} />}
                    {index === 2 && <Camera className="mr-3 text-orange-500" size={24} />}
                    <h3 className="text-xl text-white font-semibold">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                     <Badge
                        key={skillIndex}
                        variant="outline"
                        className="border-gray-500 text-gray-100 shadow-xl shadow-white/10 hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {badges.map((badge, index) => (
              <Card
                key={badge.name}
                className="bg-slate-700 border-slate-600 transition-transform duration-300 ease-in-out hover:scale-102 "
              >
                <CardContent className="flex flex-col md:flex-row items-center p-6">
                  <img
                    src={badge.image}
                    alt={badge.name}
                    className="w-36 h-36 object-contain rounded-full mb-4 md:mb-0 md:mr-6"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl text-white font-semibold mb-1">{badge.name}</h3>
                    {badge.description && (
                      <p className="text-gray-300 mb-3">{badge.description}</p>
                    )}
                    <div className="flex flex-wrap gap-2 mb-3 justify-center md:justify-start">
                      {badge.skills && badge.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-slate-600 text-slate-200 rounded shadow"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-2 justify-center md:justify-start">
                      <a
                        href={badge.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-600 text-white rounded shadow hover:bg-slate-300 hover:text-slate-950 transition flex items-center gap-2"
                      >
                        <ExternalLink size={18} /> View
                      </a>
                      
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="py-20 bg-gray-100 text-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white border-gray-300 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-orange-600">{exp.title}</h3>
                      <p className="text-lg text-gray-700">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="border-orange-500 text-orange-600 mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gray-200 text-gray-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-neutral-700 to-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Only show dropdown if project has videoUrl as array and lang
            const hasVideo = Array.isArray(project.videoUrl) && Array.isArray(project.lang);
            const selectedLangIdx = videoLangIndexes[index] || 0;
            return (
              <Card
                key={index}
                className={`bg-slate-700 border-slate-600 transition-transform duration-300 ease-in-out  hover:scale-102 
                ${hasVideo ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <CardContent className={`p-4 ${hasVideo ? 'flex flex-col md:flex-row gap-4 items-start' : ''}`}>
                  <div className={`${hasVideo ? 'w-full md:w-1/2' : ''}`}>
                    {/* ...existing project info... */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-yellow-500">{project.title}</h3>
                      <div className="flex gap-2">
                        <Badge
                          variant={project.status === 'Completed' ? 'default' : 'secondary'}
                          className={project.status === 'Completed' ? 'bg-green-600' : 'bg-yellow-600'}
                        >
                          {project.status}
                        </Badge>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-400 hover:text-orange-300 transition-colors"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                    {project.period && (
                      <p className="text-sm text-gray-400 mb-3">{project.period}</p>
                    )}
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {hasVideo && (
                    <div className="w-full md:w-1/2">
                      <div className='flex flex-row justify-between items-center mb-2'>
                        <p className='text-lg text-gray-400 mb-2'>
                          Watch the video in:
                        </p>
                        <select
                          className="mb-2 px-2 py-1 rounded bg-slate-800 text-white border border-slate-600"
                          value={selectedLangIdx}
                          onChange={e => setVideoLangIndexes({
                            ...videoLangIndexes,
                            [index]: Number(e.target.value)
                          })}
                          >
                          {project.lang.map((lang, i) => (
                            <option key={lang} value={i}>
                              {langDisplay[lang] || lang}
                            </option>
                          ))}
                        </select>
                      </div>
                      <iframe
                        src={project.videoUrl[selectedLangIdx]}
                        className="w-full h-64 md:h-48 lg:h-56 rounded-lg"
                        frameBorder="0"
                        allowFullScreen
                        title={`Project Video ${project.title}`}
                      ></iframe>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
    
      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
          <div className="p-6"> {/* Add some padding around your gallery */}
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
              <Masonry gutter="36px"> {/* Add gutter for spacing between images */}
                {imagePaths.map((imageSrc, index) => (
                  <div key={index} className="bg-white shadow-lg overflow-hidden">
                    <img
                      src={imageSrc}
                      alt={`img${index + 1}.JPG`}
                      // No fixed height or object-cover needed here typically,
                      // Masonry handles the height based on aspect ratio
                      style={{ width: '100%', display: 'block'}} // Basic image styling
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </section>
    
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex flex-row justify-between">Let's Connect  <Button onClick={onClickDownload}> <Download size={12} /> Download CV</Button> </h3>
              <p className="text-lg text-gray-700 mb-6">
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-orange-500" size={20} />
                  <span>abdullahbalisadiku@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-orange-500" size={20} />
                  <span>+383 48 285002</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-orange-500" size={20} />
                  <span>Gjilan, Kosovo</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/abdullah0sadiku" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-slate-950 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/abdulla-sadiku-751384291/" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-slate-950 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="www.instagram.com/abdulla.sadiku" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-slate-950 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            <Card className="bg-white border-gray-300 shadow-lg">
              <CardContent className="p-6">
                {messageSent && (
                  <div className="mb-4 p-3 rounded bg-green-100 text-green-800 text-center font-semibold">
                    Message sent successfully!
                  </div>
                )}
                <form className="space-y-4" onSubmit={onSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name" // Added name attribute
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email" // Added name attribute
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      name="message" // Added name attribute
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  <Button className="w-full bg-yellow-500 hover:bg-orange-500 text-slate-900 font-semibold transition-colors">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Abdulla Sadiku. Built with React and TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

