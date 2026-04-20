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
    'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Latte Art Bistrea'
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
    'https://lh3.googleusercontent.com/gps-cs-s/AHVAweqeBqdb0-OPyhG8pYZjotVnStEBNQ8qV_yht9kMFSFxSIPWjgIL_M-jui4fRxg9OP0sv4ReJ-nyRH31o3Z7cVaA0Ktl0nI17D-ug4uCgw6sJ3WrYxDQtrLSgV2GZKZN-EeOJlr5=w1200',
    alt: 'FOUR Madrid',
    quote: 'Donde cada detalle cuenta'
  },
  {
    image:
    'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepA4MwwMtxueERm-snWaBVDHnwx8Imf5P1aG4EQGUnlik41HcCMcuUZIjII9vZuqoyD764v7PWNMtusXdIFu9yZaDXK05XXNFRC5H7VxbpModW64gkAj3PZWt_hffqkiXxwu1P6wA=w1200',
    alt: 'FOUR Madrid gastronomía'
  }],

  menu: {
    title: 'Nuestros Desayunos',
    subtitle: 'OFERTA DESAYUNO 3.80€\n• Pensamie y quesoo con una parapurus en\n  Bollería Dulce y Salada:\n    - Cinnamon rolls\n    - Napolititana chocolate\n• Toasta de cancata, comens, ostitmate, sactito o de kinder crujiente',
    categories: [
    { id: 'todo', label: 'Todos nuestros postres', iconName: 'CakeSlice' }
    ],

    items: {
      todo: [
      { name: 'Bollería Dulce y Salada', price: '1.80€', desc: 'Croissant mantequilla', image: 'https://images.unsplash.com/photo-1555507036-ab1f40ce88cb?auto=format&fit=crop&q=80&w=400' },
      { name: 'Tartas', price: '3.80€', desc: 'Tarta de queso bistrea', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=400' },
      { name: 'Tartas Red Velvet', price: '3.80€', desc: 'Red velvet chocolate', image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&q=80&w=400' },
      { name: 'Gofres y Crepes', price: '3.40€', desc: 'Croissant relleno vi/queso', image: 'https://images.unsplash.com/photo-1629571173255-a040b1062078?auto=format&fit=crop&q=80&w=400' },
      { name: 'Bollería Especial', price: '3.80€', desc: 'Croissant mantequilla gigante', image: 'https://images.unsplash.com/photo-1623366302587-bcaad5cf43ab?auto=format&fit=crop&q=80&w=400' },
      { name: 'Crepes', price: '3.60€', desc: 'Croissant crepes/crepes', image: 'https://images.unsplash.com/photo-1519676860045-812e9b068da8?auto=format&fit=crop&q=80&w=400' }
      ]
    } as Record<string, {name: string;price: string;desc?: string;image?: string;}[]>
  },
  gallery: {
    title: 'Nuestro Espacio',
    subtitle: 'Un rincón diseñado para disfrutar y compartir.',
    images: [
    'https://lh3.googleusercontent.com/p/AF1QipMXbAIQwWs7yu2DPVCT_7T-4IYSMwZy-tteNWxm=w1200',
    'https://lh3.googleusercontent.com/gps-cs-s/AHVAwep_55ayCfJnbUWYRjB7vP_tsT0acPu5AS59D4k30iw27SA93TOfp9g1QEqV89Bpb4xfmin3FJk2acZlIYsD4pIlz7mHLeFH2rzefkeUnW1kwqnyZVurz4vaK4A3rkli4ghqCQOdPnMhUqKv=w1200',
    'https://lh3.googleusercontent.com/gps-cs-s/AHVAweqeBqdb0-OPyhG8pYZjotVnStEBNQ8qV_yht9kMFSFxSIPWjgIL_M-jui4fRxg9OP0sv4ReJ-nyRH31o3Z7cVaA0Ktl0nI17D-ug4uCgw6sJ3WrYxDQtrLSgV2GZKZN-EeOJlr5=w1200',
    'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepA4MwwMtxueERm-snWaBVDHnwx8Imf5P1aG4EQGUnlik41HcCMcuUZIjII9vZuqoyD764v7PWNMtusXdIFu9yZaDXK05XXNFRC5H7VxbpModW64gkAj3PZWt_hffqkiXxwu1P6wA=w1200',
    'https://lh3.googleusercontent.com/gps-cs-s/AHVAweoBZRSv28E17Kjo32jXob9TANl2eecQHOZH31l4fMVVZqZdWhXxoLgwmEhqPI1B_FkMgwytk3BvQhmJhWqpX3iHAXwYt5XDaWizzpeWYWISDofm51sVS1zqOYgPsmoum9ZRDuL7WQ=w1200',
    'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepjVZo3U2-7rhvHnzexVmzSJr_13TUyXEBqcnnPmLCJ5k4cQujFndN2eLN0sR0IuwnTWeueRybeFhBs6Y37G_D7NuuVlqiR4HLz93SVglcim13sge2UNrkUYk6N77qOaSaOyjw=w1200']

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