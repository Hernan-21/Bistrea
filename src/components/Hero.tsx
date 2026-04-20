import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.75]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Full-screen background image with parallax zoom */}
      <motion.div
        style={{ scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={siteConfig.hero.image}
          alt={siteConfig.hero.imageAlt}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay gradient — stronger on the left for text readability */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[1]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </motion.div>

      {/* Decorative grain texture overlay */}
      <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Content — aligned left */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-xl">
          {/* Small accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="origin-left w-12 h-[2px] bg-terracotta mb-6 md:mb-8"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-terracotta font-sans text-xs md:text-sm tracking-[0.3em] uppercase mb-3 md:mb-4"
          >
            {siteConfig.brand.tagline}
          </motion.p>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream leading-[0.95] tracking-tight mb-4 md:mb-6"
          >
            {siteConfig.brand.name}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-cream/70 font-light text-sm md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md"
          >
            {siteConfig.brand.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#carta"
              className="group relative inline-flex items-center justify-center bg-terracotta text-espresso px-7 py-3.5 rounded-full font-medium text-sm md:text-base overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-terracotta/30"
            >
              <span className="relative z-10">¡Ven a probar la tarta de queso!</span>
              <span className="absolute inset-0 bg-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="#eventos"
              className="inline-flex items-center justify-center border border-cream/40 text-cream px-7 py-3.5 rounded-full font-medium text-sm md:text-base hover:bg-cream/10 hover:border-cream/70 transition-all duration-300 backdrop-blur-sm"
            >
              Reserva tu Taller
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-cream/50 text-[10px] tracking-[0.2em] uppercase font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-cream/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}