'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Championship Finals 2023',
      description: 'Epic showdown between top teams',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      type: 'image',
      date: 'December 2023',
    },
    {
      id: 2,
      title: 'Gaming Expo Highlights',
      description: 'Best moments from our annual expo',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      type: 'image',
      date: 'November 2023',
    },
    {
      id: 3,
      title: 'Pro League Season 3',
      description: 'Intense competition and amazing plays',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      type: 'video',
      date: 'October 2023',
    },
    {
      id: 4,
      title: 'Community Tournament',
      description: 'Grassroots gaming at its finest',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      type: 'image',
      date: 'September 2023',
    },
    {
      id: 5,
      title: 'Tech Showcase',
      description: 'Latest gaming innovations',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      type: 'image',
      date: 'August 2023',
    },
    {
      id: 6,
      title: 'Summer Championship',
      description: 'Hot competition under the sun',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      type: 'video',
      date: 'July 2023',
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-dark-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gallery & <span className="text-gradient">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Relive the most memorable moments from our past events, tournaments, and gaming experiences.
          </p>
        </motion.div>

        {/* Gallery Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="gallery-swiper"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative rounded-xl overflow-hidden bg-dark-800 border border-dark-700 group-hover:border-neon-blue/50 transition-all duration-300">
                    <div className="aspect-video bg-cover bg-center bg-no-repeat relative"
                         style={{ backgroundImage: `url(${item.image})` }}>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white">
                          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                          <p className="text-xs text-neon-blue">{item.date}</p>
                        </div>
                        
                        {/* Type Indicator */}
                        {item.type === 'video' && (
                          <div className="absolute top-4 right-4">
                            <div className="w-12 h-12 bg-neon-blue/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <Play className="w-5 h-5 text-white ml-1" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            View All Highlights
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-neon-blue transition-colors duration-200 z-10"
              >
                <X size={32} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neon-blue transition-colors duration-200 z-10"
              >
                <ChevronLeft size={40} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neon-blue transition-colors duration-200 z-10"
              >
                <ChevronRight size={40} />
              </button>

              {/* Image/Video */}
              <div className="relative rounded-xl overflow-hidden">
                <div className="aspect-video bg-cover bg-center bg-no-repeat"
                     style={{ backgroundImage: `url(${galleryItems[selectedImage].image})` }}>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {galleryItems[selectedImage].title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-2">
                      {galleryItems[selectedImage].description}
                    </p>
                    <p className="text-neon-blue">
                      {galleryItems[selectedImage].date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {selectedImage + 1} / {galleryItems.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery; 