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
          className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 text-left items-center bg-espresso rounded-2xl p-8 shadow-md">
            <div className="w-full md:w-1/2">
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
                {siteConfig.menu.title}
              </h2>
              <div className="text-cream/90 font-light text-sm md:text-base whitespace-pre-wrap leading-relaxed">
                {siteConfig.menu.subtitle}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
               <img src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e40?q=80&w=600&auto=format&fit=crop" alt="Desayunos" className="max-w-full h-auto rounded-lg shadow-sm" />
            </div>
          </div>

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
                  className="absolute inset-0 bg-terracotta rounded-full"
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
              
              {siteConfig.menu.items[activeTab]?.map((item, index) =>
              <motion.div
                key={`${item.name}-${index}`}
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
                className={item.image ? "flex flex-col bg-white rounded-lg overflow-hidden shadow-sm" : "flex flex-col"}>
                
                  {item.image && (
                    <div className="h-48 w-full overflow-hidden relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <div className="absolute bottom-2 right-2 bg-espresso text-cream px-2 py-1 text-sm rounded font-medium">
                        {item.price}
                      </div>
                    </div>
                  )}
                  
                  <div className={item.image ? "p-4" : ""}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-serif text-xl text-espresso font-bold">
                        {item.name}
                      </h4>
                      {!item.image && (
                        <>
                          <div className="flex-grow border-b border-dotted border-sand mx-4 relative top-[-6px]"></div>
                          <span className="font-medium text-terracotta">
                            {item.price}
                          </span>
                        </>
                      )}
                    </div>
                    {item.desc &&
                  <p className="text-sm text-olive font-light leading-relaxed">{item.desc}</p>
                  }
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>);

}