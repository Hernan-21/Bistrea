import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';
import { getIcon } from '../utils/getIcon';
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};
export function Pillars() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
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
          className="text-center mb-16 md:mb-24">
          
          <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-6">
            {siteConfig.pillars.title}
          </h2>
          <p className="max-w-2xl mx-auto text-espresso/80 text-lg font-light">
            {siteConfig.pillars.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px'
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          
          {siteConfig.pillars.items.map((pillar, index) =>
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center text-center group">
            
              <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center text-terracotta mb-6 group-hover:bg-terracotta group-hover:text-cream transition-colors duration-300">
                {getIcon(pillar.iconName, {
                size: 32,
                strokeWidth: 1
              })}
              </div>
              <h3 className="font-serif text-2xl text-espresso mb-3">
                {pillar.title}
              </h3>
              <p className="text-espresso/70 font-light leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}