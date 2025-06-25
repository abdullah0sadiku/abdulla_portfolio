import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { 
  Github, 
  Linkedin, 
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
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
      technologies: ["Apache Airflow", "Databricks", "SQL", "dbt", "Azure Cloud", "Python"]
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
      githubUrl: "https://github.com/abdullah0sadiku/Student-Gradebook-Manager"
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
    "PCAP - Programming Essentials in Python"
  ];
  
  // Place this above your return statement
  // ...existing code...
const badges = [
  {
    name: "Databricks Certified Data Engineer Associate",
    image: "/images/badges/associate-badge-de.png",
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
    name: "Apache Airflow 3 Fundamentals",
    image: "src/assets/badges/astronomer.png",
    link: "https://www.credly.com/badges/640f5ca8-9552-45ab-a44c-a8025ad55f58/linked_in_profile",
    skills: ["Apache Airflow",
    "DAGs",
    "Data Pipelines",
    "Orchestration",
    "Scheduling"]
  },
  {
    name: "Apache Airflow 2 Fundamentals",
    image: "src/assets/badges/astronomer1.png",
    link: "https://www.credly.com/badges/b5abf137-8740-4f21-8606-f74e72987cf2/linked_in_profile",
    skills: ["Apache Airflow",
    "DAGs",
    "Data Pipelines",
    "Orchestration",
    "Scheduling"]
  },
  {
    name: "PCAP Python Essentials",
    image: "src/assets/badges/python.png",
    link: "src/assets/badges/pcap.png",
    skills: ["Python", "Programming", "Data Structures", "Algorithms", "Object-Oriented Programming"]
  },
  {
    name: "IT Essentials - Cisco",
    image: "src/assets/badges/ITE.png",
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
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Abdulla Sadiku
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-orange-400 transition-colors ${
                    activeSection === item ? 'text-neutral-400' : 'text-gray-300'
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
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 to-salte-200/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-white bg-clip-text text-transparent">
            Abdulla Sadiku
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full-stack Web Developer | Data Engineer | Photographer
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
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
          </div>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/abdullah0sadiku" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/abdulla-sadiku-751384291/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={32} />
            </a>
          </div>
          <Button 
            onClick={() => scrollToSection('about')}
            className="bg-slate-300 hover:bg-slate-900 hover:shadow-sm hover:shadow-white/20 text-slate-900 hover:text-slate-100 px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Learn More
            <ChevronDown className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white  text-gray-900">
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
              <div className="w-80 h-80 bg-gradient-to-br from-stone-700 to-stone-200  flex items-center justify-center">
                <img
                  src="abdulla_portfolio/images/dulla-04.png"
                  alt=""
                  className="w-80 h-80  object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Badges Section */}
      <section id="skills" className="py-20 bg-slate-800">
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
                <CardContent className="flex flex-row items-center p-6">
                  <img
                    src={badge.image}
                    alt={badge.name}
                    className="w-36 h-36 object-contain rounded-full mr-6"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl text-white font-semibold mb-1">{badge.name}</h3>
                    {badge.description && (
                      <p className="text-gray-300 mb-3">{badge.description}</p>
                    )}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {badge.skills && badge.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-slate-600 text-slate-200 rounded shadow"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-2">
                      <a
                        href={badge.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-600 text-white rounded shadow hover:bg-slate-700 transition flex items-center gap-2"
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
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-100 text-gray-900">
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card  key={index}  className="bg-slate-700 border-slate-600 transition-transform duration-300 ease-in-out hover:border-slate-200 hover:scale-102">
                <CardContent className="p-6">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
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
              </div>
            </div>
            <Card className="bg-white border-gray-300 shadow-lg">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                      placeholder="Your message..."
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

