import React from 'react';
import { Instagram } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const currentYear = new Date().getFullYear().toString();
  const copyrightText = siteConfig.footer.copyright.
  replace('{year}', currentYear).
  replace('{brand}', siteConfig.brand.name);
  return (
    <footer className="bg-espresso text-cream py-16 md:py-20 border-t border-espresso/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div
          className="font-serif text-4xl tracking-widest cursor-pointer mb-8 hover:text-terracotta transition-colors"
          onClick={scrollToTop}>
          
          {siteConfig.brand.name}
        </div>

        <div className="flex items-center gap-6 mb-12">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-cream/10 hover:bg-terracotta hover:text-cream transition-all duration-300"
            aria-label="Instagram">
            
            <Instagram size={24} strokeWidth={1.5} />
          </a>
        </div>

        <div className="w-full max-w-md h-px bg-cream/20 mb-8"></div>

        <p className="text-cream/50 font-light text-sm">{copyrightText}</p>
      </div>
    </footer>);

}