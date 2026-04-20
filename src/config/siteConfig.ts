/**
 * Edit this file to customize your site.
 * All content, images, and brand details are configured here.
 */

export const siteConfig = {
  brand: {
    name: 'Bistrea',
    tagline: 'Cafetería Elche',
    subtitle: 'Tu destino para el café de especialidad y desayunos deliciosos'
  },
  nav: [
  { label: 'Nosotros', sectionId: 'nosotros' },
  { label: 'Carta', sectionId: 'carta' },
  { label: 'Galería', sectionId: 'galeria' },
  { label: 'Eventos', sectionId: 'eventos' },
  { label: 'Contacto', sectionId: 'contacto' }],

  social: {
    instagram: 'https://www.instagram.com/four.madrid/',
    instagramHandle: '@four.madrid'
  },
  hero: {
    image:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Café de especialidad Bistrea'
  },
  pillars: {
    title: 'Café de Especialidad: Blend Kami',
    description:
    'Espresso el 1.30 €, comate com: Double espresso, macchiato 1.60 € or nonte.celte 1.60 €, Café con leche, Americano, Macchiato/cortado, Flat White, 2.10 €, Irlandés o Capuccino.\n\nCafés bebidas vegetales -0.20€, suplemento extra +0.50 €. Suplemento aguacate, suplemento integral/Cereales -0.20 €. Porcion mantequilla extra +2.20 €',
    items: []


  },
  parallaxDividers: [
  {
    image:
    'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop',
    alt: 'Bistrea Cafetería Elche',
    quote: 'Donde cada detalle cuenta'
  },
  {
    image:
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop',
    alt: 'Bistrea gastronomía'
  }],

  menu: {
    title: 'Nuestros Desayunos',
    subtitle: 'OFERTA DESAYUNO 3.80€\n• Pensamie y quesoo con una parapurus en\n  Bollería Dulce y Salada:\n    - Cinnamon rolls\n    - Napolititana chocolate\n• Toasta de cancata, comens, ostitmate, sactito o de kinder crujiente',
    categories: [
    { id: 'todo', label: 'Todos nuestros postres', iconName: 'CakeSlice' }
    ],

    items: {
      todo: [
      { name: 'Bollería Dulce y Salada', price: '1.80€', desc: 'Croissant mantequilla' },
      { name: 'Tartas', price: '3.80€', desc: 'Tarta de queso bistrea' },
      { name: 'Tartas Red Velvet', price: '3.80€', desc: 'Red velvet chocolate' },
      { name: 'Gofres y Crepes', price: '3.40€', desc: 'Croissant relleno vi/queso' },
      { name: 'Bollería Especial', price: '3.80€', desc: 'Croissant mantequilla gigante' },
      { name: 'Crepes', price: '3.60€', desc: 'Croissant crepes/crepes' }
      ]
    } as Record<string, {name: string;price: string;desc?: string;image?: string;}[]>
  },
  gallery: {
    title: 'Nuestro Espacio',
    subtitle: 'Un rincón diseñado para disfrutar y compartir.',
    images: [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop']

  },
  events: {
    title: 'Próximos Eventos',
    subtitle: 'Acompáñanos a nuestros talleres especiales.',
    ctaText: 'Síguenos en {handle} para no perderte nada',
    items: [
    {
      id: 1,
      title: 'Taller de Matcha',
      date: '11 de mambre',
      time: '18:00 - 20:00',
      description:
      'Taller de Matcha, eruina parapuus contam/prot koink with a ua.',
      image:
      'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=2070&auto=format&fit=crop',
      category: 'Taller'
    }]

  },
  location: {
    title: 'Ubicación',
    address: {
      title: 'Dirección',
      lines: [
      'Calle Gabriel Miró, 14',
      'Elche']

    },
    hours: {
      title: 'Horario',
      lines: [
      'Lunes a Sábado: 8am - 20pm']

    },
    contact: {
      title: 'Contacto',
      email: 'info@bistrea.cafe',
      phone: '+34 Number',
      phoneLink: '+34000000000'
    },
    mapImage:
    'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop',
    mapImageAlt: 'Calle Gabriel Miró, 14, Elche',
    mapPinLabel: 'Bistrea Cafetería Elche',
    mapPinSublabel: 'Calle Gabriel Miró, 14'
  },
  footer: {
    copyright: '© {year} {brand}. Todos los derechos reservados.'
  }
};