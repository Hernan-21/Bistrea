import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

// Bento layout: each entry defines col-span and row-span for desktop
// Adjust these classes to match how many images you have (currently 6)
const bentoLayout = [
  { col: 'md:col-span-2', row: 'md:row-span-2' }, // big hero tile
  { col: 'md:col-span-1', row: 'md:row-span-1' },
  { col: 'md:col-span-1', row: 'md:row-span-1' },
  { col: 'md:col-span-1', row: 'md:row-span-1' },
  { col: 'md:col-span-1', row: 'md:row-span-1' },
  { col: 'md:col-span-2', row: 'md:row-span-1' }, // wide tile at bottom
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const images = siteConfig.gallery.images;

  // Keyboard navigation
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
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedIndex]);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };
  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <section id="galeria" className="py-16 md:py-32 bg-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-espresso mb-3 md:mb-4">
            {siteConfig.gallery.title}
          </h2>
          <p className="text-olive font-light text-base md:text-lg">
            {siteConfig.gallery.subtitle}
          </p>
        </motion.div>

        {/* ── MOBILE grid: 2 columns, all images shown ── */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              // First image spans full width for visual anchor
              className={`cursor-pointer overflow-hidden rounded-xl group relative ${
                index === 0 ? 'col-span-2 aspect-[16/7]' : 'aspect-square'
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={src}
                alt={`${siteConfig.brand.name} - Foto ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/15 transition-colors duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>

        {/* ── DESKTOP Bento Grid: 4 columns ── */}
        <div className="hidden md:grid md:grid-cols-4 md:grid-rows-3 gap-3 h-[680px]">
          {images.map((src, index) => {
            const layout = bentoLayout[index] ?? { col: 'md:col-span-1', row: 'md:row-span-1' };
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`cursor-pointer overflow-hidden rounded-2xl group relative ${layout.col} ${layout.row}`}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={src}
                  alt={`${siteConfig.brand.name} - Foto ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-all duration-300 rounded-2xl flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <span className="text-cream text-xs tracking-widest uppercase font-light">
                    Ver foto
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/95 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-cream/70 hover:text-cream transition-colors p-2 z-10"
              onClick={() => setSelectedIndex(null)}
              aria-label="Cerrar"
            >
              <X size={30} strokeWidth={1.5} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream transition-colors p-2 z-10"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              aria-label="Anterior"
            >
              <ChevronLeft size={44} strokeWidth={1} />
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              src={images[selectedIndex]}
              alt={`${siteConfig.brand.name} - Foto ${selectedIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream transition-colors p-2 z-10"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              aria-label="Siguiente"
            >
              <ChevronRight size={44} strokeWidth={1} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-cream/40 font-light text-sm tracking-widest">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}