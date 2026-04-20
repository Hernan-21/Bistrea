import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { ParallaxDivider } from './components/ParallaxDivider';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Events } from './components/Events';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { siteConfig } from './config/siteConfig';
export function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-terracotta selection:text-cream">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <ParallaxDivider
          image={siteConfig.parallaxDividers[0].image}
          alt={siteConfig.parallaxDividers[0].alt}
          quote={siteConfig.parallaxDividers[0].quote} />
        
        <Menu />
        <Gallery />
        <ParallaxDivider
          image={siteConfig.parallaxDividers[1].image}
          alt={siteConfig.parallaxDividers[1].alt}
          quote={siteConfig.parallaxDividers[1].quote} />
        
        <Events />
        <Location />
      </main>
      <Footer />
    </div>);

}