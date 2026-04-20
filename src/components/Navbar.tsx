import { useEffect, useState } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // At the top -> white text over dark hero image
  // Scrolled -> dark text over cream background
  const textColor = scrolled ? 'text-espresso' : 'text-cream';
  const hoverColor = 'hover:text-terracotta';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md border-b border-sand shadow-sm'
            : 'bg-gradient-to-b from-black/30 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div
            className={`font-serif text-2xl tracking-wider cursor-pointer transition-colors duration-300 ${textColor}`}
            onClick={() => scrollTo('hero')}
          >
            {siteConfig.brand.name}
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            {siteConfig.nav.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollTo(item.sectionId)}
                className={`transition-colors duration-300 ${textColor} ${hoverColor}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side: Instagram + mobile hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${textColor} ${hoverColor}`}
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>

            {/* Mobile hamburger */}
            <button
              className={`md:hidden transition-colors duration-300 ${textColor} ${hoverColor}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menú"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-20 z-40 bg-cream/97 backdrop-blur-md border-b border-sand shadow-lg md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {siteConfig.nav.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollTo(item.sectionId)}
                  className="text-left py-3 text-espresso text-base font-medium tracking-wide hover:text-terracotta border-b border-sand/60 last:border-0 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}