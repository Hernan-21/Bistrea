import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';
import { getIcon } from '../utils/getIcon';

export function Menu() {
  const [activeTab, setActiveTab] = useState(siteConfig.menu.categories[0].id);
  return (
    <section id="carta" className="py-16 md:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-espresso mb-3">
            {siteConfig.menu.title}
          </h2>
          <p className="text-olive font-light text-sm md:text-base max-w-md mx-auto">
            Descubre nuestra selección de bollería, tartas y desayunos especiales.
          </p>
        </motion.div>

        {/* Horizontal Tabs */}
        <div className="flex overflow-x-auto gap-1 mb-8 md:mb-12 pb-2 scrollbar-hide border-b border-sand/60 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center">
          {siteConfig.menu.categories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative whitespace-nowrap px-4 py-2.5 text-sm font-medium transition-colors duration-200 flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'text-terracotta'
                    : 'text-espresso/50 hover:text-espresso/80'
                }`}
              >
                {getIcon(category.iconName, {
                  size: 15,
                  strokeWidth: isActive ? 2 : 1.5,
                })}
                {category.label}
                {isActive && (
                  <motion.div
                    layoutId="menuUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-terracotta rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Menu Items — text list */}
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="divide-y divide-sand/40"
            >
              {siteConfig.menu.items[activeTab]?.map((item, index) => (
                <motion.div
                  key={`${item.name}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                  className="flex items-baseline justify-between py-4 gap-3 group"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-base md:text-lg text-espresso group-hover:text-terracotta transition-colors">
                      {item.name}
                    </h4>
                    {item.desc && (
                      <p className="text-xs md:text-sm text-olive/70 font-light mt-0.5 truncate">
                        {item.desc}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden md:block w-16 border-b border-dotted border-sand/60"></span>
                    <span className="font-medium text-terracotta text-sm md:text-base">
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Promo banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 md:mt-14 bg-espresso rounded-2xl p-6 md:p-8 text-center"
        >
          <p className="text-cream font-serif text-xl md:text-2xl mb-2">
            Oferta Desayuno
          </p>
          <p className="text-terracotta text-3xl md:text-4xl font-bold mb-3">
            3.80€
          </p>
          <p className="text-cream/80 font-light text-xs md:text-sm leading-relaxed max-w-md mx-auto">
            Incluye café + bollería o tostada a elegir.
            Disponible de lunes a sábado de 8:00 a 12:00.
          </p>
        </motion.div>

      </div>
    </section>
  );
}