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

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start mt-8 md:mt-12">
          {/* Formulario Reserva tu Mesa */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-espresso p-6 md:p-10 rounded-2xl md:rounded-3xl text-cream"
          >
            <h3 className="font-serif text-2xl md:text-3xl mb-6 md:mb-8 text-center">Reserva tu Mesa</h3>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm mb-2 opacity-90">Nombre</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:outline-none focus:border-terracotta text-cream placeholder-cream/50" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 opacity-90">Fecha</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:outline-none focus:border-terracotta text-cream [color-scheme:dark]" />
                </div>
                <div>
                  <label className="block text-sm mb-2 opacity-90">Hora</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:outline-none focus:border-terracotta text-cream appearance-none">
                    <option className="text-espresso" value="08:00">08:00</option>
                    <option className="text-espresso" value="12:00">12:00</option>
                    <option className="text-espresso" value="18:00">18:00</option>
                    <option className="text-espresso" value="20:00">20:00</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2 opacity-90">Número de Personas</label>
                <select className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:outline-none focus:border-terracotta text-cream appearance-none">
                  <option className="text-espresso" value="1">1</option>
                  <option className="text-espresso" value="2" selected>2</option>
                  <option className="text-espresso" value="3">3</option>
                  <option className="text-espresso" value="4">4</option>
                  <option className="text-espresso" value="5+">5+</option>
                </select>
              </div>
              <div className="flex justify-center pt-4">
                <button type="button" className="bg-terracotta text-cream px-8 py-3 rounded-full hover:bg-cream hover:text-espresso transition-colors font-medium">
                  Reservar Ahora
                </button>
              </div>
            </form>
          </motion.div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-8">
            <h3 className="font-serif text-3xl mb-2 text-center text-espresso hidden lg:block">Próximos Eventos</h3>
            <div className="w-16 h-[1px] bg-terracotta mx-auto mb-4 hidden lg:block"></div>
            {siteConfig.events.items.map((event, index) =>
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-sand/50"
            >
              
                <div className="relative h-36 md:h-48 overflow-hidden">
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 bg-cream/90 backdrop-blur-sm px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-medium text-espresso uppercase tracking-wider">
                    {event.category}
                  </div>
                  <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                
                </div>

                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs md:text-sm text-olive mb-2 md:mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} strokeWidth={1.5} className="md:w-3.5 md:h-3.5" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} strokeWidth={1.5} className="md:w-3.5 md:h-3.5" />
                      {event.time}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg md:text-2xl text-espresso mb-1 md:mb-2 group-hover:text-terracotta transition-colors leading-tight">
                    {event.title}
                  </h3>

                  <p className="text-espresso/70 font-light text-sm md:text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
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