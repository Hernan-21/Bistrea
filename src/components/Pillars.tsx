import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

export function Pillars() {
  return (
    <section id="nosotros" className="py-16 md:py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-80px' }}
           transition={{ duration: 0.6 }}
           className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Left Side: Custom Coffee Cup Icon */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-36 h-36 md:w-52 md:h-52 flex items-center justify-center">
              {/* Outer pulsing ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-terracotta/20"
                style={{ animation: 'pulse 3s ease-in-out infinite' }}
              />
              {/* Second decorative ring */}
              <div className="absolute inset-2 md:inset-3 rounded-full border border-dashed border-sand" />
              {/* Main circle */}
              <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-sand via-cream to-sand shadow-lg flex items-center justify-center border-4 border-sand relative overflow-hidden">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-terracotta/5 to-transparent" />
                {/* Coffee cup SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 120"
                  className="w-16 h-16 md:w-24 md:h-24 relative z-10"
                >
                  {/* Steam wisps */}
                  <g opacity="0.5">
                    <path
                      d="M42 40 C42 32, 48 30, 46 22"
                      fill="none"
                      stroke="#C4956A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="d"
                        values="M42 40 C42 32, 48 30, 46 22;M42 40 C40 30, 50 28, 44 20;M42 40 C42 32, 48 30, 46 22"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.5;0.15;0.5"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </path>
                    <path
                      d="M56 37 C56 29, 62 27, 60 19"
                      fill="none"
                      stroke="#C4956A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="d"
                        values="M56 37 C56 29, 62 27, 60 19;M56 37 C54 27, 64 25, 58 17;M56 37 C56 29, 62 27, 60 19"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.4;0.1;0.4"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </path>
                    <path
                      d="M70 40 C70 32, 76 30, 74 22"
                      fill="none"
                      stroke="#C4956A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="d"
                        values="M70 40 C70 32, 76 30, 74 22;M70 40 C68 30, 78 28, 72 20;M70 40 C70 32, 76 30, 74 22"
                        dur="2.8s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.35;0.1;0.35"
                        dur="2.8s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>

                  {/* Cup body */}
                  <path
                    d="M30 47 L30 85 Q30 100, 60 100 Q90 100, 90 85 L90 47 Z"
                    fill="#5C3D2E"
                  />
                  {/* Cup inner highlight */}
                  <path
                    d="M36 50 L36 82 Q36 94, 60 94 Q72 94, 78 88"
                    fill="none"
                    stroke="#7A5740"
                    strokeWidth="2"
                    opacity="0.4"
                  />

                  {/* Cup handle */}
                  <path
                    d="M90 57 Q108 57, 108 73 Q108 88, 90 85"
                    fill="none"
                    stroke="#5C3D2E"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />

                  {/* Latte art surface */}
                  <ellipse cx="60" cy="50" rx="27" ry="6" fill="#D4A574" />
                  {/* Latte art leaf */}
                  <path
                    d="M60 46 Q54 50, 48 48 M60 46 Q66 50, 72 48"
                    fill="none"
                    stroke="#5C3D2E"
                    strokeWidth="1.5"
                    opacity="0.35"
                  />
                  <line
                    x1="60" y1="44" x2="60" y2="52"
                    stroke="#5C3D2E"
                    strokeWidth="1"
                    opacity="0.25"
                  />

                  {/* Saucer shadow */}
                  <ellipse cx="60" cy="104" rx="38" ry="7" fill="#5C3D2E" opacity="0.12" />

                  {/* Decorative coffee bean (small accent) */}
                  <g transform="translate(16, 65) rotate(-25)">
                    <ellipse cx="0" cy="0" rx="5" ry="8" fill="#D4A574" opacity="0.5" />
                    <line
                      x1="0" y1="-6" x2="0" y2="6"
                      stroke="#5C3D2E"
                      strokeWidth="1"
                      opacity="0.35"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Right Side: Text content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="font-serif text-2xl md:text-4xl text-espresso mb-4 md:mb-6 flex items-center justify-center md:justify-start gap-3">
              <span className="bg-sand p-2.5 md:p-3 rounded-full text-terracotta shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-7 md:h-7"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>
              </span>
              <span>{siteConfig.pillars.title}</span>
            </h2>
            <div className="text-espresso/80 text-xs md:text-sm font-light whitespace-pre-wrap leading-relaxed">
              {siteConfig.pillars.description}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}