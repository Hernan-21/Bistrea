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
        <div className="w-full flex justify-center mb-8">
          <div
            className="font-serif text-3xl tracking-widest cursor-pointer hover:text-terracotta transition-colors flex flex-col items-center"
            onClick={scrollToTop}>
            <span className="mb-2 uppercase text-lg tracking-[0.3em] font-normal">{siteConfig.brand.name}</span>
            <span className="text-sm tracking-widest">{siteConfig.brand.tagline}</span>
          </div>
        </div>
        
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-between text-left text-sm text-cream/90 font-light mb-12 px-6 gap-8">
          <div className="flex flex-col gap-2">
            <p>Dirección: Calle Gabriel Miró, 14, Elche</p>
            <p>Teléfono: +34 000 000 000</p>
            <p>WhatsApp: +34 000 000 000</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Dirección: Calle Gabriel Miró, 14, Elche</p>
            <p>Instagram: @bistreacafeteriaelche</p>
            <p>Horario: lunes a sábado: 8am - 20pm</p>
          </div>
        </div>

        <div className="w-full max-w-md h-px bg-cream/20 mb-8 mx-auto"></div>

        <div className="flex justify-center items-center gap-6 mb-6">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-cream/20 text-terracotta hover:bg-terracotta hover:text-cream transition-all duration-300"
            aria-label="Instagram">
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          {/* Mock icons for FB and WhatsApp */}
          <div className="p-3 rounded-full border border-cream/20 text-terracotta hover:bg-terracotta hover:text-cream transition-all duration-300 cursor-pointer">
             <span className="font-serif text-sm font-bold">f</span>
          </div>
          <div className="p-3 rounded-full border border-cream/20 text-terracotta hover:bg-terracotta hover:text-cream transition-all duration-300 cursor-pointer">
             <span className="font-serif text-sm font-bold">W</span>
          </div>
        </div>

        <p className="text-cream/50 font-light text-xs text-center">{copyrightText}</p>
      </div>
    </footer>);

}