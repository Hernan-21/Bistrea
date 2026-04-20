import React, { useRef, Fragment } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Mail, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
export function Location() {
  const mapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ['start end', 'end start']
  });
  const mapY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  return (
    <section id="contacto" className="py-24 md:py-32 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.6
            }}
            className="order-2 lg:order-1">
            
            <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-8">
              {siteConfig.location.title}
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-3 bg-cream rounded-full text-terracotta group-hover:bg-terracotta group-hover:text-cream transition-colors">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-medium text-espresso text-lg mb-1">
                    {siteConfig.location.address.title}
                  </h4>
                  <p className="text-espresso/70 font-light leading-relaxed">
                    {siteConfig.location.address.lines.map((line, i) =>
                    <Fragment key={i}>
                        {line}
                        {i < siteConfig.location.address.lines.length - 1 &&
                      <br />
                      }
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-3 bg-cream rounded-full text-terracotta group-hover:bg-terracotta group-hover:text-cream transition-colors">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-medium text-espresso text-lg mb-1">
                    {siteConfig.location.hours.title}
                  </h4>
                  <p className="text-espresso/70 font-light leading-relaxed">
                    {siteConfig.location.hours.lines.map((line, i) =>
                    <Fragment key={i}>
                        {line}
                        {i < siteConfig.location.hours.lines.length - 1 &&
                      <br />
                      }
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-3 bg-cream rounded-full text-terracotta group-hover:bg-terracotta group-hover:text-cream transition-colors">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-medium text-espresso text-lg mb-1">
                    {siteConfig.location.contact.title}
                  </h4>
                  <a
                    href={`mailto:${siteConfig.location.contact.email}`}
                    className="block text-espresso/70 font-light hover:text-terracotta transition-colors">
                    
                    {siteConfig.location.contact.email}
                  </a>
                  <a
                    href={`tel:${siteConfig.location.contact.phoneLink}`}
                    className="block text-espresso/70 font-light hover:text-terracotta transition-colors mt-1">
                    
                    {siteConfig.location.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={mapRef}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8
            }}
            className="order-1 lg:order-2 h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden relative shadow-lg">
            
            <motion.div
              style={{
                y: mapY
              }}
              className="absolute inset-0 -top-[15%] -bottom-[15%]">
              
              <img
                src={siteConfig.location.mapImage}
                alt={siteConfig.location.mapImageAlt}
                className="w-full h-full object-cover opacity-80" />
              
              <div className="absolute inset-0 bg-espresso/20 mix-blend-multiply" />
            </motion.div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
              <div className="bg-terracotta text-cream p-4 rounded-full shadow-xl mb-2 animate-bounce">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-espresso font-medium text-sm text-center">
                {siteConfig.location.mapPinLabel}
                <br />
                <span className="font-light text-xs text-olive">
                  {siteConfig.location.mapPinSublabel}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}