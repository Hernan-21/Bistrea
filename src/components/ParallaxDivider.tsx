import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
interface ParallaxDividerProps {
  image: string;
  alt: string;
  quote?: string;
}
export function ParallaxDivider({ image, alt, quote }: ParallaxDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.6, 1, 1, 0.6]
  );
  return (
    <div ref={ref} className="relative h-[40vh] md:h-[50vh] overflow-hidden">
      <motion.div
        style={{
          y
        }}
        className="absolute inset-0 -top-[20%] -bottom-[20%]">
        
        <img src={image} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-espresso/40" />
      </motion.div>

      {quote &&
      <motion.div
        style={{
          opacity
        }}
        className="relative z-10 flex items-center justify-center h-full px-6">
        
          <p className="font-serif text-3xl md:text-5xl text-cream text-center max-w-3xl leading-snug italic">
            {quote}
          </p>
        </motion.div>
      }
    </div>);

}