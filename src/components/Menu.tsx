import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';
import { getIcon } from '../utils/getIcon';
export function Menu() {
  const [activeTab, setActiveTab] = useState(siteConfig.menu.categories[0].id);
  return (
    <section id="carta" className="py-24 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
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
          className="text-center mb-16">
          
          <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-4">
            {siteConfig.menu.title}
          </h2>
          <p className="text-olive font-light text-lg">
            {siteConfig.menu.subtitle}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {siteConfig.menu.categories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative px-4 py-3 rounded-full flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-cream' : 'text-espresso/70 hover:text-espresso hover:bg-sand/50'}`}>
                
                {isActive &&
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-espresso rounded-full"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30
                  }} />

                }
                <span className="relative z-10 flex items-center gap-2">
                  {getIcon(category.iconName, {
                    size: 16,
                    strokeWidth: isActive ? 2 : 1.5
                  })}
                  {category.label}
                </span>
              </button>);

          })}
        </div>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -10
              }}
              transition={{
                duration: 0.3
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              
              {siteConfig.menu.items[activeTab]?.map((item, index) =>
              <motion.div
                key={item.name}
                initial={{
                  opacity: 0,
                  y: 10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4
                }}
                className="flex flex-col">
                
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-serif text-xl text-espresso">
                      {item.name}
                    </h4>
                    <div className="flex-grow border-b border-dotted border-sand mx-4 relative top-[-6px]"></div>
                    <span className="font-medium text-terracotta">
                      {item.price}
                    </span>
                  </div>
                  {item.desc &&
                <p className="text-sm text-olive font-light">{item.desc}</p>
                }
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>);

}