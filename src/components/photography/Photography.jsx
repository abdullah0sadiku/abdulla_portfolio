import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Send, CheckCircle, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const Photography = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        setMessageSent(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

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
        event.target.reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Photo collections organized by sections
  const collections = {
    portraits: [
      { id: 1, src: 'photography/portrait/img1.JPG', title: 'FRAME 01', desc: 'Captured the moment !!' },
      { id: 2, src: 'photography/portrait/img2.JPG', title: 'FRAME 02', desc: 'Eyes tell stories words cannot reach.' },
      { id: 3, src: 'photography/portrait/img3.JPG', title: 'FRAME 03', desc: 'Light shapes character. A quiet moment caught between breaths.' },
    ],
    landscapes: [
      { id: 5, src: 'photography/landscape/img6.jpg', title: 'HORIZON 01', desc: 'Mountains teach patience. Dawn rewards those who wait.' },
      { id: 6, src: 'photography/landscape/img5.jpg', title: 'HORIZON 02', desc: 'Forests hold secrets in their shadows.' },
    ],
    urban: [
      { id: 7, src: 'photography/urban/img2.JPG', title: 'CONCRETE 01', desc: 'Cities breathe. You just need to listen.' },
      { id: 8, src: 'photography/urban/img1.jpg', title: 'CONCRETE 02', desc: 'Steel and glass, reflecting human ambition.' },
      { id: 9, src: 'photography/urban/img3.JPG', title: 'CONCRETE 03', desc: 'Architecture as frozen music.' },
      { id: 10, src: 'photography/urban/img4.JPG', title: 'CONCRETE 04', desc: 'The city is a canvas, and we are the artists.' },
    ],
    street: [
      { id: 15, src: 'photography/street/img15.jpg', title: 'PASSING BY', desc: 'Strangers become stories in a single frame.' },
      { id: 16, src: 'photography/street/img16.jpg', title: 'PASSING BY', desc: 'Strangers become stories in a single frame.' },
      { id: 17, src: 'photography/street/img17.jpg', title: 'REFLECTION', desc: 'The city mirrors its soul in glass.' },
      { id: 18, src: 'photography/street/img18.jpg', title: 'SOLITUDE', desc: 'Alone in the crowd, yet never truly alone.' },
      { id: 19, src: 'photography/street/img19.jpg', title: 'CROSSROADS', desc: 'Where paths intersect, moments are born.' },
      { id: 20, src: 'photography/street/img20.jpg', title: 'CITY LIFE', desc: 'The city is a canvas, and we are the artists.' },
    ],
    places: [
      { 
        id: 'gjilan', 
        name: 'Gjilan', 
        country: 'Kosovo',
        layout: 'masonry',
        images: [
          '/photography/places/gjilan/img2.jpg',
          '/photography/places/gjilan/img3.jpg',
          '/photography/places/gjilan/img4.jpg',
          '/photography/places/gjilan/img5.jpg',
          '/photography/places/gjilan/img6.jpg',
        ]
      },
      { 
        id: 'prishtina', 
        name: 'Prishtina', 
        country: 'Kosovo',
        layout: 'editorial',
        images: [
          '/photography/places/prishtin/IMG_6913.JPG',
          '/photography/places/prishtin/APC_1317%20(1).jpg',
          '/photography/places/prishtin/IMG_6294.JPG',
          '/photography/places/prishtin/IMG_6626.JPG',
          '/photography/places/prishtin/IMG_6632.JPG',
          '/photography/places/prishtin/IMG_6866.JPG',
        ]
      },
      { 
        id: 'munich', 
        name: 'Munich', 
        country: 'Germany',
        layout: 'grid',
        images: [
          '/photography/places/munich/APC_0147.jpg',
          '/photography/places/munich/APC_0168%20(1).jpg',
          '/photography/places/munich/IMG_3509.jpg',
          '/photography/places/munich/img2.JPG',
        ]
      },
      { 
        id: 'saudi', 
        name: 'Saudi Arabia', 
        country: 'Middle East',
        layout: 'scattered',
        images: [
          '/photography/places/saudi/APC_0394.jpg',
          '/photography/places/saudi/APC_0435.jpg',
          '/photography/places/saudi/APC_0554.jpg',
          '/photography/places/saudi/APC_0567%20(1).jpg',
        ]
      },
    ],
    moments: [
      { id: 9, src: '/photography/moments/img9.jpg', title: 'FLEETING 01', desc: 'The sea never repeats itself.' },
      { id: 10, src: '/photography/moments/img10.jpg', title: 'FLEETING 02', desc: 'Golden hour lasts minutes. Memory lasts forever.' },
      { id: 11, src: '/photography/moments/img11.jpg', title: 'FLEETING 03', desc: 'Where water meets sand, time dissolves.' },
    ],
    minimalist: [
      { id: 20, src: '/photography/minimalist/APC_1278.jpg', title: 'SILENCE 01' },
      { id: 21, src: '/photography/minimalist/IMG_0510.jpg', title: 'SILENCE 02' },
      { id: 22, src: '/photography/minimalist/IMG_0691.jpg', title: 'SILENCE 03' },
      { id: 23, src: '/photography/minimalist/IMG_0694.jpg', title: 'SILENCE 04' },
      { id: 24, src: '/photography/minimalist/IMG_6993.jpg', title: 'SILENCE 05' },
      { id: 25, src: '/photography/minimalist/img9.jpg', title: 'SILENCE 06' },
      { id: 26, src: '/photography/minimalist/IMG_0606.jpg', title: 'SILENCE 07' },
    ],
  };

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  };

  const item = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF8' }}>
      {/* Minimal Header with Section Navigation */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: 'rgba(250, 250, 248, 0.95)', backdropFilter: 'blur(10px)' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Top Bar */}
        <div className="px-8 py-4 border-b border-stone-200/50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link 
              to="/"
              className="flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors duration-300"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
              <span className="text-sm tracking-widest uppercase">Back</span>
            </Link>
            <div className="flex items-center gap-2">
              <Camera size={18} strokeWidth={1.5} className="text-stone-400" />
              <span className="text-sm tracking-widest uppercase text-stone-600">Photography</span>
            </div>
          </div>
        </div>
        
        {/* Section Navigation */}
        <nav className="py-3 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
          <style>{`nav::-webkit-scrollbar { display: none; }`}</style>
          <div className="flex gap-1 md:gap-2 px-4 md:px-8 md:justify-center min-w-max md:min-w-0">
            {[
              { id: 'portraits', label: '01' },
              { id: 'landscapes', label: '02' },
              { id: 'urban', label: '03' },
              { id: 'moments', label: '04' },
              { id: 'street', label: '05' },
              { id: 'minimalist', label: '06' },
              { id: 'places', label: '07' },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="px-3 py-1.5 text-[10px] md:text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded transition-all duration-200 whitespace-nowrap flex-shrink-0"
              >
                <span className="md:hidden">{section.label}</span>
                <span className="hidden md:inline">{section.label} {section.id.charAt(0).toUpperCase() + section.id.slice(1)}</span>
              </button>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Cover Section */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-36">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative aspect-[4/5] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src="/photography/me.jpg"
              alt="Cover"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(20%)' }}
            />
          </motion.div>
          
          <motion.div 
            className="lg:pl-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">Abdulla Sadiku</p>
            <h1 
              className="text-5xl lg:text-7xl font-light tracking-tight mb-8"
              style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}
            >
              Visual<br />Stories
            </h1>
            <div className="w-12 h-px bg-stone-300 mb-8"></div>
            <p className="text-stone-500 leading-relaxed max-w-md" style={{ fontFamily: 'Georgia, serif' }}>
              A collection of frames captured across different moments and places. 
              Each photograph holds a fragment of time, preserved in light and shadow.
            </p>
            <div className="mt-12 flex gap-8 text-xs tracking-widest uppercase text-stone-400">
              <span>2024 — 2026</span>
              <span>42 Works</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 01: Portraits - Clean Grid */}
      <section id="portraits" className="py-32 px-8 scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-stone-400">01</span>
            <h2 className="text-3xl font-light mt-2" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>
              Portraits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.portraits.map((photo, index) => (
              <motion.div 
                key={photo.id}
                {...item}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xs tracking-widest uppercase text-stone-700">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02: Landscapes - Aligned */}
      <section id="landscapes" className="py-32 px-8 scroll-mt-32" style={{ backgroundColor: '#F5F5F3' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-stone-400">02</span>
            <h2 className="text-3xl font-light mt-2" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>
              Landscapes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collections.landscapes.map((photo, index) => (
              <motion.div 
                key={photo.id}
                {...item}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xs tracking-widest uppercase text-stone-700">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: Urban - Mixed Masonry */}
      <section id="urban" className="py-32 px-8 scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-stone-400">03</span>
            <h2 className="text-3xl font-light mt-2" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>
              Urban
            </h2>
          </motion.div>

          <div className="grid grid-cols-12 gap-6">
            {/* Left column - tall image */}
            <motion.div {...item} className="col-span-12 md:col-span-5 group">
              <div className="overflow-hidden bg-stone-100">
                <img
                  src={collections.urban[0].src}
                  alt={collections.urban[0].title}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xs tracking-widest uppercase text-stone-700">{collections.urban[0].title}</h3>
                <p className="text-sm text-stone-500 mt-2">{collections.urban[0].desc}</p>
              </div>
            </motion.div>

            {/* Right column - stacked */}
            <div className="col-span-12 md:col-span-7 space-y-6">
              {/* Top wide image */}
              <motion.div {...item} transition={{ delay: 0.15 }} className="group">
                <div className="overflow-hidden bg-stone-100">
                  <img
                    src={collections.urban[1].src}
                    alt={collections.urban[1].title}
                    className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-right">
                  <h3 className="text-xs tracking-widest uppercase text-stone-700">{collections.urban[1].title}</h3>
                </div>
              </motion.div>

              {/* Two side by side */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div {...item} transition={{ delay: 0.3 }} className="group">
                  <div className="overflow-hidden bg-stone-100">
                    <img
                      src={collections.urban[2].src}
                      alt={collections.urban[2].title}
                      className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xs tracking-widest uppercase text-stone-700">{collections.urban[2].title}</h3>
                  </div>
                </motion.div>
                
                <motion.div {...item} transition={{ delay: 0.4 }} className="group mt-8">
                  <div className="overflow-hidden bg-stone-100">
                    <img
                      src={collections.urban[3].src}
                      alt={collections.urban[3].title}
                      className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xs tracking-widest uppercase text-stone-700">{collections.urban[3].title}</h3>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Moments - Editorial Flow */}
      <section id="moments" className="py-32 px-8 scroll-mt-32" style={{ backgroundColor: '#F5F5F3' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-stone-400">04</span>
            <h2 className="text-3xl font-light mt-2" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>
              Fleeting Moments
            </h2>
            <p className="text-sm text-stone-500 max-w-md mx-auto mt-4 hidden md:block" style={{ fontFamily: 'Georgia, serif' }}>
              Time moves. The camera catches what the eye forgets.
            </p>
          </motion.div>

          <div className="grid grid-cols-12 gap-4">
            {/* Left: 01 - tall, spans both rows */}
            <motion.div {...item} className="col-span-12 md:col-span-6 md:row-span-2 group">
              <div className="overflow-hidden bg-stone-200 h-full">
                <img
                  src={collections.moments[0].src}
                  alt={collections.moments[0].title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xs tracking-widest uppercase text-stone-700">{collections.moments[0].title}</h3>
              </div>
            </motion.div>
            
            {/* Right top: 02 */}
            <motion.div {...item} transition={{ delay: 0.1 }} className="col-span-6 md:col-span-6 group">
              <div className="overflow-hidden bg-stone-200">
                <img
                  src={collections.moments[1].src}
                  alt={collections.moments[1].title}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xs tracking-widest uppercase text-stone-700">{collections.moments[1].title}</h3>
                <p className="text-xs text-stone-500 mt-1">{collections.moments[1].desc}</p>
              </div>
            </motion.div>

            {/* Right bottom: 03 */}
            <motion.div {...item} transition={{ delay: 0.2 }} className="col-span-6 md:col-span-6 group">
              <div className="overflow-hidden bg-stone-200">
                <img
                  src={collections.moments[2].src}
                  alt={collections.moments[2].title}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xs tracking-widest uppercase text-stone-700">{collections.moments[2].title}</h3>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 05: Street Photography - Clean Grid */}
      <section id="street" className="py-32 px-8 scroll-mt-32" style={{ backgroundColor: '#F5F5F3' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-stone-400">05</span>
            <h2 className="text-3xl font-light mt-2" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>
              Street Photography
            </h2>
          </motion.div>

          {/* Row 1 - 3 images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {collections.street.slice(0, 3).map((photo, index) => (
              <motion.div 
                key={photo.id}
                {...item}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xs tracking-widest uppercase text-stone-700">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Row 2 - 2 images centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {collections.street.slice(3, 5).map((photo, index) => (
              <motion.div 
                key={photo.id}
                {...item}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xs tracking-widest uppercase text-stone-700">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 06: Minimalist - Natural Ratios */}
      <section id="minimalist" className="py-32 px-8 scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-stone-400">06</span>
            <h2 className="text-3xl font-light mt-2" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>
              Minimalist
            </h2>
          </motion.div>

          {/* Masonry-style grid with natural ratios */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {collections.minimalist.map((photo, index) => (
              <motion.div 
                key={photo.id}
                {...item}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group break-inside-avoid"
              >
                <div className="overflow-hidden bg-stone-100">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-xs tracking-widest uppercase text-stone-500">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            
      {/* Section 07: Places - Unique Layouts */}
      <section id="places" className="py-32 px-8 scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-stone-400">07</span>
            <h2 className="text-3xl font-light mt-2" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>
              Places
            </h2>
          </motion.div>

          <div className="space-y-24">
            {/* All places use consistent masonry layout */}
            {collections.places.map((place, placeIndex) => (
              <motion.div key={place.id} {...fadeUp} transition={{ delay: placeIndex * 0.1 }}>
                <div className="flex items-center gap-4 mb-6">
                  <MapPin size={16} className="text-stone-400" />
                  <h3 className="text-xl font-light" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>
                    {place.name}
                  </h3>
                  <span className="text-xs tracking-widest uppercase text-stone-400">{place.country}</span>
                </div>
                <div className="columns-2 md:columns-3 gap-3">
                  {place.images.map((img, i) => (
                    <motion.div 
                      key={i} 
                      {...item} 
                      transition={{ delay: i * 0.08 }} 
                      className="break-inside-avoid mb-3 group"
                    >
                      <div className="overflow-hidden bg-stone-100">
                        <img 
                          src={img} 
                          alt={`${place.name} ${i + 1}`} 
                          className="w-full h-auto transition-all duration-500 group-hover:scale-[1.02]" 
                          loading="lazy" 
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Work */}
      <section className="py-32 px-8" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-light mb-12" style={{ fontFamily: 'Georgia, serif', color: '#FAFAF8' }}>
              About the Work
            </h2>
            <p className="text-stone-400 leading-loose mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Photography is observation. It's the practice of paying attention—to light, 
              to gesture, to the spaces between things. These images aren't about technical perfection. 
              They're about presence. About being somewhere fully enough to recognize when 
              a moment deserves to be kept.
            </p>
            <p className="text-stone-500 leading-loose" style={{ fontFamily: 'Georgia, serif' }}>
              Each frame here represents a decision to stop, to look, and to preserve. 
              Whether it's the geometry of a city street or the expression in a stranger's eye, 
              these photographs are invitations to see what might otherwise go unnoticed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-8" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left - Text */}
            <motion.div {...fadeUp}>
              <span className="text-xs tracking-[0.3em] uppercase text-stone-400">Get in Touch</span>
              <h2 className="text-4xl lg:text-5xl font-light mt-4 mb-8" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>
                Let's Work<br />Together
              </h2>
              <div className="w-12 h-px bg-stone-300 mb-8"></div>
              <p className="text-stone-500 leading-relaxed mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                Interested in collaborating on a project? Have a story you'd like captured? 
                Or simply want to discuss photography over coffee? I'd love to hear from you.
              </p>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs tracking-widest uppercase text-stone-400 mb-1">Email</p>
                  <a href="mailto:dawa.developer@outlook.com" className="text-stone-700 hover:text-stone-900 transition-colors">
                    dawa.developer@outlook.com  
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-stone-400 mb-1">Phone</p>
                  <a href="tel:+38348285002" className="text-stone-700 hover:text-stone-900 transition-colors">
                    +383 48 285002
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-stone-400 mb-1">Based in</p>
                  <p className="text-stone-700">Prishtina, Kosovo</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              {messageSent ? (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex p-4 rounded-full mb-6" style={{ backgroundColor: '#1a1a1a' }}>
                    <CheckCircle className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-light mb-3" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>
                    Message Sent
                  </h3>
                  <p className="text-stone-500">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={onSubmit}>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-stone-400 mb-3 block">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors duration-300"
                      placeholder="John Doe"
                      required
                      style={{ fontFamily: 'Georgia, serif' }}
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs tracking-widest uppercase text-stone-400 mb-3 block">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors duration-300"
                      placeholder="john@example.com"
                      required
                      style={{ fontFamily: 'Georgia, serif' }}
                    />
                  </div>

                  <div>
                    <label className="text-xs tracking-widest uppercase text-stone-400 mb-3 block">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      name="subject"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors duration-300"
                      placeholder="Photography Inquiry"
                      style={{ fontFamily: 'Georgia, serif' }}
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs tracking-widest uppercase text-stone-400 mb-3 block">
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      name="message"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project..."
                      required
                      style={{ fontFamily: 'Georgia, serif' }}
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-3 mt-4 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 disabled:opacity-50"
                    style={{ 
                      backgroundColor: '#1a1a1a',
                      color: '#FAFAF8'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / Thank You */}
      <section className="py-32 px-8" style={{ backgroundColor: '#F5F5F3' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div {...fadeUp}>
            <h2 
              className="text-5xl lg:text-6xl font-light mb-8"
              style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}
            >
              Thank You
            </h2>
            <div className="w-12 h-px bg-stone-300 mb-8"></div>
            <p className="text-stone-500 leading-relaxed mb-8">
              For taking the time to view this collection. Every photograph 
              finds its meaning in being seen.
            </p>
            <div className="space-y-2 text-sm text-stone-600">
              <p className="font-medium">Abdulla Sadiku</p>
              <p className="text-stone-400">Photographer & Data Engineer</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="lg:text-right">
            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Contact</p>
                <p className="text-stone-600">dawa.developer@outlook.com</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Location</p>
                <p className="text-stone-600">Gjilan, Kosovo</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Year</p>
                <p className="text-stone-600">2024 — 2026</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-stone-400 mb-3">Follow</p>
                <div className="flex gap-4 lg:justify-end">
                  <a 
                    href="https://github.com/abdullah0sadiku" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 border border-stone-300 text-stone-500 hover:border-stone-800 hover:text-stone-800 transition-all duration-300"
                  >
                    <Github size={18} strokeWidth={1.5} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/abdulla-sadiku-751384291/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 border border-stone-300 text-stone-500 hover:border-stone-800 hover:text-stone-800 transition-all duration-300"
                  >
                    <Linkedin size={18} strokeWidth={1.5} />
                  </a>
                  <a 
                    href="https://www.instagram.com/abdulla.sadiku" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 border border-stone-300 text-stone-500 hover:border-stone-800 hover:text-stone-800 transition-all duration-300"
                  >
                    <Instagram size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
            
            <Link 
              to="/"
              className="inline-flex items-center gap-3 mt-12 text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900 transition-colors duration-300"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
              <span>Return to Portfolio</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bottom Bar */}
      <footer className="py-6 px-8 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-stone-400">
          <span>© 2026 Abdulla Sadiku</span>
          <span>All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
};

export default Photography;

