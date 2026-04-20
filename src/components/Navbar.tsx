import React, { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-sand' : 'bg-transparent'}`}>
      
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="font-serif text-2xl tracking-wider cursor-pointer text-espresso"
          onClick={() => scrollTo('hero')}>
          
          {siteConfig.brand.name}
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          {siteConfig.nav.map((item) =>
          <button
            key={item.sectionId}
            onClick={() => scrollTo(item.sectionId)}
            className="hover:text-terracotta transition-colors">
            
              {item.label}
            </button>
          )}
        </div>

        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-espresso hover:text-terracotta transition-colors"
          aria-label="Instagram">
          
          <Instagram size={20} strokeWidth={1.5} />
        </a>
      </div>
    </motion.nav>);

}