import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card.jsx';
import { X, ZoomIn, Camera, Grid3X3 } from 'lucide-react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const imagePaths = Array.from({ length: 24 }).map((_, index) => ({
    src: `/abdulla_portfolio/images/gallery/img${index + 1}.JPG`,
    alt: `Gallery Image ${index + 1}`,
    id: index + 1
  }));

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section 
      id="gallery" 
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #132946 0%, #1e3a5f 25%, #2d5a7b 75%, #132946 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-10"
          style={{ backgroundColor: '#00C896' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-24 h-24 opacity-5"
          style={{
            background: 'linear-gradient(45deg, #694E70, #00C896)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
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
            Creative Gallery
            <motion.div
              className="absolute -top-2 -right-8 p-2 rounded-lg"
              style={{ backgroundColor: '#00C896' }}
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Camera size={24} className="text-white" />
            </motion.div>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#00C896' }}></div>
          <p className="text-xl mt-6 text-gray-300 max-w-3xl mx-auto">
            A visual journey through creativity, moments, and artistic expression
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-6"
        >
          <ResponsiveMasonry 
            columnsCountBreakPoints={{ 
              350: 1, 
              750: 2, 
              900: 3, 
              1200: 4 
            }}
          >
            <Masonry gutter="24px">
              {imagePaths.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  <Card 
                    className="group relative overflow-hidden shadow-xl border transition-all duration-500 hover:shadow-2xl"
                    style={{ 
                      backgroundColor: 'rgba(0, 200, 150, 0.05)',
                      borderColor: 'rgba(0, 200, 150, 0.2)'
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
                        style={{ display: 'block' }}
                      />
                      
                      {/* Overlay */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(0, 200, 150, 0.8)' }}
                      >
                        <motion.button
                          onClick={() => openLightbox(image)}
                          className="p-4 rounded-xl border-2 backdrop-blur-sm transition-all duration-300"
                          style={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderColor: '#FFFFFF',
                            color: '#FFFFFF'
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ZoomIn size={24} />
                        </motion.button>
                      </div>
                      
                      {/* Image number badge */}
                      <div className="absolute bottom-3 left-3">
                        <span 
                          className="px-3 py-1 rounded-lg text-sm font-bold border backdrop-blur-sm"
                          style={{ 
                            backgroundColor: 'rgba(0, 200, 150, 0.2)',
                            borderColor: '#00C896',
                            color: '#FFFFFF'
                          }}
                        >
                          #{image.id}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(15, 20, 25, 0.95)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow effect around image */}
              <div 
                className="absolute -inset-4 rounded-2xl opacity-30 blur-xl"
                style={{ backgroundColor: '#00C896' }}
              ></div>
              
              <div 
                className="relative rounded-2xl overflow-hidden border-2 backdrop-blur-sm"
                style={{ 
                  backgroundColor: 'rgba(19, 41, 70, 0.9)',
                  borderColor: '#00C896'
                }}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
              </div>
              
              {/* Close Button */}
              <motion.button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 p-3 rounded-full border-2 backdrop-blur-sm transition-all duration-300"
                style={{ 
                  backgroundColor: '#00C896',
                  borderColor: '#FFFFFF',
                  color: '#FFFFFF'
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: '#FFFFFF',
                  color: '#00C896'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              {/* Image Info */}
              <div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl border backdrop-blur-sm"
                style={{ 
                  backgroundColor: 'rgba(19, 41, 70, 0.9)',
                  borderColor: '#00C896'
                }}
              >
                <div className="flex items-center gap-2">
                  <Grid3X3 size={16} style={{ color: '#00C896' }} />
                  <span className="font-bold text-white">
                    Image #{selectedImage.id}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;