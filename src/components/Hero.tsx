import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';
export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-cream">
      
      {/* Mobile: full-screen background image */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 1,
          delay: 0.2
        }}
        className="absolute inset-0 md:hidden">
        
        <img
          src={siteConfig.hero.image}
          alt={siteConfig.hero.imageAlt}
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-cream/70" />
      </motion.div>

      <motion.div
        style={{
          y: textY,
          opacity: textOpacity
        }}
        className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center z-10 mt-12 md:mt-20">
        
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-espresso tracking-tight mb-4">
            {siteConfig.brand.name}{' '}
            <span className="block md:inline text-terracotta italic">
              {siteConfig.brand.tagline}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-olive font-light tracking-widest uppercase mt-6 mb-12">
            {siteConfig.brand.subtitle}
          </p>
        </motion.div>
      </motion.div>

      {/* Desktop: image container below text */}
      <div className="hidden md:block w-full max-w-6xl mx-auto h-[60vh] mt-8 relative overflow-hidden rounded-3xl">
        <motion.img
          style={{
            y: imageY,
            scale: imageScale
          }}
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: 'easeOut'
          }}
          src={siteConfig.hero.image}
          alt={siteConfig.hero.imageAlt}
          className="w-full h-[120%] object-cover" />
        
      </div>
    </section>);

}