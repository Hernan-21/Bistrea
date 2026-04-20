import React, { useEffect, useState, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
const MOBILE_VISIBLE_COUNT = 4;
export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const images = siteConfig.gallery.images;
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);
  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);
  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
    );
  };
  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
    );
  };
  return (
    <section id="galeria" className="py-16 md:py-32 bg-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center mb-10 md:mb-16">
          
          <h2 className="font-serif text-3xl md:text-5xl text-espresso mb-3 md:mb-4">
            {siteConfig.gallery.title}
          </h2>
          <p className="text-olive font-light text-base md:text-lg">
            {siteConfig.gallery.subtitle}
          </p>
        </motion.div>

        {/* Mobile: compact 2-col grid with limited images */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {images.slice(0, MOBILE_VISIBLE_COUNT).map((src, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 15
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-30px'
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.08
            }}
            className="cursor-pointer overflow-hidden rounded-lg group relative aspect-square"
            onClick={() => setSelectedIndex(index)}>
            
              <img
              src={src}
              alt={`${siteConfig.brand.name} - Foto ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy" />
            
              {/* Last visible image: overlay with remaining count */}
              {index === MOBILE_VISIBLE_COUNT - 1 &&
            images.length > MOBILE_VISIBLE_COUNT &&
            <div className="absolute inset-0 bg-espresso/50 flex items-center justify-center rounded-lg">
                    <div className="text-cream text-center">
                      <ImageIcon
                  size={24}
                  strokeWidth={1.5}
                  className="mx-auto mb-1" />
                
                      <span className="text-sm font-medium">
                        +{images.length - MOBILE_VISIBLE_COUNT} más
                      </span>
                    </div>
                  </div>
            }
            </motion.div>
          )}
        </div>

        {/* Desktop: Masonry Grid */}
        <div className="hidden md:block columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: index % 3 * 0.1
            }}
            className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl group relative"
            onClick={() => setSelectedIndex(index)}>
            
              <img
              src={src}
              alt={`${siteConfig.brand.name} - Foto ${index + 1}`}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy" />
            
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-300 rounded-xl" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/95 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}>
          
            <button
            className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors p-2"
            onClick={() => setSelectedIndex(null)}
            aria-label="Cerrar">
            
              <X size={32} strokeWidth={1.5} />
            </button>

            <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Anterior">
            
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <motion.img
            key={selectedIndex}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.95
            }}
            transition={{
              duration: 0.3
            }}
            src={images[selectedIndex]}
            alt={`${siteConfig.brand.name} - Foto ${selectedIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} />
          

            <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Siguiente">
            
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/50 font-light text-sm tracking-widest">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}