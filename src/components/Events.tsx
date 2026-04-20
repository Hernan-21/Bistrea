import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
export function Events() {
  return (
    <section id="eventos" className="py-16 md:py-32 bg-cream">
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
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20 gap-6">
          
          <div>
            <h2 className="font-serif text-3xl md:text-5xl text-espresso mb-3 md:mb-4">
              {siteConfig.events.title}
            </h2>
            <p className="text-olive font-light text-base md:text-lg max-w-xl">
              {siteConfig.events.subtitle}
            </p>
          </div>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center text-terracotta hover:text-espresso transition-colors font-medium group">
            
            {siteConfig.events.ctaText.replace(
              '{handle}',
              siteConfig.social.instagramHandle
            )}
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform" />
            
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:gap-12">
          {siteConfig.events.items.map((event, index) =>
          <motion.div
            key={event.id}
            initial={{
              opacity: 0,
              y: 30
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
              duration: 0.6,
              delay: index * 0.1
            }}
            className="group flex flex-col bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-sand/50">
            
              <div className="relative h-28 md:h-64 overflow-hidden">
                <div className="absolute top-2 left-2 md:top-4 md:left-4 z-10 bg-cream/90 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-medium text-espresso uppercase tracking-wider">
                  {event.category}
                </div>
                <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              
              </div>

              <div className="p-3 md:p-8 flex flex-col flex-grow">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-[10px] md:text-sm text-olive mb-2 md:mb-4 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar
                    size={12}
                    strokeWidth={1.5}
                    className="md:w-4 md:h-4" />
                  
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock
                    size={12}
                    strokeWidth={1.5}
                    className="md:w-4 md:h-4" />
                  
                    {event.time}
                  </span>
                </div>

                <h3 className="font-serif text-sm md:text-2xl text-espresso mb-1 md:mb-3 group-hover:text-terracotta transition-colors leading-tight">
                  {event.title}
                </h3>

                <p className="text-espresso/70 font-light text-xs md:text-base leading-relaxed mb-3 md:mb-8 flex-grow line-clamp-3 md:line-clamp-none">
                  {event.description}
                </p>

                <button className="w-full py-2 md:py-3 px-3 md:px-6 bg-espresso text-cream rounded-lg md:rounded-xl text-xs md:text-base font-medium hover:bg-terracotta transition-colors duration-300 flex items-center justify-center gap-2">
                  Reservar
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Mobile CTA below cards */}
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 md:hidden inline-flex items-center text-terracotta hover:text-espresso transition-colors font-medium text-sm group">
          
          {siteConfig.events.ctaText.replace(
            '{handle}',
            siteConfig.social.instagramHandle
          )}
          <ArrowRight
            size={16}
            className="ml-2 group-hover:translate-x-1 transition-transform" />
          
        </a>
      </div>
    </section>);

}