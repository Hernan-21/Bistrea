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
    <section id="nosotros" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.6 }}
           className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Left Side: Plant Illustration */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1542601098-3adb3baeb1ec?q=80&w=400&auto=format&fit=crop" 
              alt="Coffee Plant" 
              className="w-48 h-48 object-cover rounded-full shadow-md"
            />
          </div>
          
          {/* Right Side: Text content */}
          <div className="w-full md:w-2/3 text-left">
            <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-6">
              {siteConfig.pillars.title}
            </h2>
            <div className="text-espresso/90 text-sm md:text-base font-medium whitespace-pre-wrap leading-relaxed">
              {siteConfig.pillars.description}
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
}