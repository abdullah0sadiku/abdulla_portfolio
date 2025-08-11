import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Github,
  Linkedin,
  Instagram,
  Send,
  CheckCircle,
  MessageCircle,
  User,
  AtSign,
  FileText
} from 'lucide-react';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClickDownload = () => {
    const link = document.createElement('a');
    link.href = 'resume/Resume Abdulla Sadiku.docx'; 
    link.download = 'Abdulla_Sadiku_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target);
    formData.append("access_key", "bae298c3-69be-48fc-a10e-91797b9dbd0c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
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
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "abdullahbalisadiku@gmail.com",
      href: "mailto:abdullahbalisadiku@gmail.com",
      color: '#00C896'
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+383 48 285002",
      href: "tel:+38348285002",
      color: '#694E70'
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gjilan, Kosovo",
      href: "#",
      color: '#FFFFFF'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/abdullah0sadiku",
      color: '#FFFFFF'
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/abdulla-sadiku-751384291/",
      color: '#00C896'
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/abdulla.sadiku",
      color: '#694E70'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f1419 0%, #132946 50%, #1e3a5f 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: '#00C896' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
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
            clipPath: 'polygon(30% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white relative">
            Get In Touch
            <motion.div
              className="absolute -top-2 -right-8 p-2 rounded-lg"
              style={{ backgroundColor: '#00C896' }}
              animate={{ 
                rotate: [0, 360] 
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <MessageCircle size={24} className="text-white" />
            </motion.div>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#00C896' }}></div>
          <p className="text-xl mt-6 text-gray-300 max-w-3xl mx-auto">
            Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-white">
                  Let's Connect
                </h3>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={onClickDownload}
                    className="flex items-center gap-2 px-6 py-3 font-medium rounded-xl border-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: '#00C896',
                      borderColor: '#00C896',
                      color: '#FFFFFF'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#00C896';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#00C896';
                      e.target.style.color = '#FFFFFF';
                    }}
                  >
                    <Download size={16} />
                    Download CV
                  </Button>
                </motion.div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind 
                or just want to chat about technology, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    className="border shadow-xl transition-all duration-300 hover:shadow-2xl group cursor-pointer"
                    style={{ 
                      backgroundColor: 'rgba(0, 200, 150, 0.05)',
                      borderColor: 'rgba(0, 200, 150, 0.2)'
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div 
                          className="p-3 rounded-xl group-hover:scale-110 transition-all duration-300"
                          style={{ 
                            backgroundColor: '#00C896',
                            boxShadow: '0 0 20px rgba(0, 200, 150, 0.5)'
                          }}
                        >
                          <method.icon 
                            className="text-white" 
                            size={24} 
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-400 mb-1">
                            {method.label}
                          </p>
                          <a 
                            href={method.href}
                            className="text-lg font-semibold text-white hover:underline transition-colors"
                          >
                            {method.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border transition-all duration-300"
                    style={{
                      color: '#FFFFFF'
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      backgroundColor: '#00C896',
                      borderColor: '#00C896',
                      color: '#FFFFFF'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card 
              className="border shadow-2xl"
              style={{ 
                backgroundColor: 'rgba(0, 200, 150, 0.05)',
                borderColor: 'rgba(0, 200, 150, 0.2)'
              }}
            >
              <CardContent className="p-8">
                {messageSent ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6">
                      <div 
                        className="inline-flex p-4 rounded-full mb-4"
                        style={{ backgroundColor: '#00C896' }}
                      >
                        <CheckCircle className="text-white" size={48} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form className="space-y-6" onSubmit={onSubmit}>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-white">
                        <User size={16} style={{ color: '#00C896' }} />
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none backdrop-blur-sm"
                        style={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          color: '#FFFFFF'
                        }}
                        placeholder="Your full name"
                        required
                        onFocus={(e) => {
                          e.target.style.borderColor = '#00C896';
                          e.target.style.backgroundColor = 'rgba(0, 200, 150, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        }}
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-white">
                        <AtSign size={16} style={{ color: '#00C896' }} />
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none backdrop-blur-sm"
                        style={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          color: '#FFFFFF'
                        }}
                        placeholder="your.email@example.com"
                        required
                        onFocus={(e) => {
                          e.target.style.borderColor = '#00C896';
                          e.target.style.backgroundColor = 'rgba(0, 200, 150, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        }}
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-white">
                        <FileText size={16} style={{ color: '#00C896' }} />
                        Message
                      </label>
                      <textarea 
                        rows={5}
                        name="message"
                        className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none backdrop-blur-sm"
                        style={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          color: '#FFFFFF'
                        }}
                        placeholder="Tell me about your project or just say hello..."
                        required
                        onFocus={(e) => {
                          e.target.style.borderColor = '#00C896';
                          e.target.style.backgroundColor = 'rgba(0, 200, 150, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        }}
                      />
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 font-semibold transition-all duration-300 border-2 rounded-xl disabled:opacity-50"
                        style={{ 
                          backgroundColor: '#00C896',
                          borderColor: '#00C896',
                          color: '#FFFFFF'
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#00C896';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
                            e.target.style.backgroundColor = '#00C896';
                            e.target.style.color = '#FFFFFF';
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div 
                              className="animate-spin rounded-full h-5 w-5 border-b-2 mr-3"
                              style={{ borderColor: '#FFFFFF' }}
                            />
                            Sending Message...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send size={20} className="mr-3" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;