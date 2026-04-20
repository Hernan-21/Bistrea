/**
 * Edit this file to customize your site.
 * All content, images, and brand details are configured here.
 */

export const siteConfig = {
  brand: {
    name: 'FOUR',
    tagline: 'Madrid',
    subtitle: 'Café · Pop-ups · Colmado · Talleres'
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
    'https://lh3.googleusercontent.com/gps-cs-s/AHVAwep7jPqC8MG4eIU_ob19pR8OSxusML3x1QgBvvbWNkCPDUoj-yhpD1EGcykkPWiTrfpopvL_tg4vlqvryta6O7tAadIvD5HAp2vVwbcfgssJ8C-4AQbEM_MlhALvlvNXhuqhcxc4=w1200',
    imageAlt: 'Interior de FOUR Madrid'
  },
  pillars: {
    title: 'Nuestra Esencia',
    description:
    'FOUR nace de la pasión por los detalles. Cuatro pilares que construyen un espacio único en el corazón del barrio de los Austrias.',
    items: [
    {
      iconName: 'Coffee',
      title: 'Café de especialidad',
      description:
      'Granos seleccionados, tostados con cuidado, preparados con pasión.'
    },
    {
      iconName: 'Wine',
      title: 'Pop-ups enogastronómicos',
      description:
      'Experiencias únicas donde el vino y la gastronomía se encuentran.'
    },
    {
      iconName: 'ShoppingBag',
      title: 'Colmado',
      description:
      'Productos artesanales y de proximidad, seleccionados para ti.'
    },
    {
      iconName: 'Palette',
      title: 'Talleres',
      description: 'Aprende, crea y comparte en nuestros talleres.'
    }]

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
    title: 'Nuestra Carta',
    subtitle: 'Productos seleccionados con mimo, preparados al momento.',
    categories: [
    { id: 'cafe', label: 'Café', iconName: 'Coffee' },
    { id: 'dulce', label: 'Dulce', iconName: 'CakeSlice' },
    { id: 'salado', label: 'Salado', iconName: 'UtensilsCrossed' },
    { id: 'bebidas', label: 'Bebidas', iconName: 'GlassWater' },
    { id: 'colmado', label: 'Colmado', iconName: 'ShoppingBag' }],

    items: {
      cafe: [
      { name: 'Espresso', price: '2.50€' },
      { name: 'Cortado', price: '2.80€' },
      { name: 'Flat White', price: '3.50€' },
      { name: 'V60', price: '4.00€', desc: 'Filtrado manual, origen único' },
      { name: 'Aeropress', price: '4.00€' },
      { name: 'Cold Brew', price: '4.50€', desc: 'Maceración en frío 24h' }],

      dulce: [
      { name: 'Croissant artesano', price: '3.00€' },
      {
        name: 'Tarta de zanahoria',
        price: '4.50€',
        desc: 'Con frosting de queso crema'
      },
      {
        name: 'Cookie de chocolate',
        price: '3.20€',
        desc: 'Con escamas de sal'
      },
      {
        name: 'Banana bread',
        price: '3.80€',
        desc: 'Tostado con mantequilla'
      }],

      salado: [
      {
        name: 'Tostada de aguacate',
        price: '7.50€',
        desc: 'Pan de masa madre, sésamo tostado'
      },
      {
        name: 'Bocadillo de jamón ibérico',
        price: '9.00€',
        desc: 'Con tomate rallado y AOVE'
      },
      {
        name: 'Ensalada del día',
        price: '8.50€',
        desc: 'Ingredientes frescos de temporada'
      },
      { name: 'Quiche de temporada', price: '6.50€' }],

      bebidas: [
      {
        name: 'Zumo natural',
        price: '4.50€',
        desc: 'Naranja o manzana y jengibre'
      },
      { name: 'Matcha Latte', price: '4.50€', desc: 'Té matcha ceremonial' },
      {
        name: 'Chai Latte',
        price: '4.00€',
        desc: 'Mezcla de especias casera'
      },
      {
        name: 'Kombucha',
        price: '5.00€',
        desc: 'Varios sabores artesanales'
      }],

      colmado: [
      {
        name: 'Café en grano 250g',
        price: '12.00€',
        desc: 'Tueste ligero para filtro o espresso'
      },
      { name: 'Mermelada artesanal', price: '6.50€' },
      {
        name: 'Aceite de oliva virgen extra',
        price: '14.00€',
        desc: 'Botella 500ml, extracción en frío'
      },
      {
        name: 'Chocolate bean-to-bar',
        price: '8.00€',
        desc: '70% cacao, origen único'
      }]

    } as Record<string, {name: string;price: string;desc?: string;}[]>
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
    subtitle: 'Experiencias únicas en nuestro espacio. Plazas limitadas.',
    ctaText: 'Síguenos en {handle} para no perderte nada',
    items: [
    {
      id: 1,
      title: 'Cata de Vinos Naturales',
      date: '15 Nov',
      time: '19:30 - 21:30',
      description:
      'Descubre pequeños productores y vinos de mínima intervención con nuestro sumiller invitado.',
      image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop',
      category: 'Pop-up Enogastronómico'
    },
    {
      id: 2,
      title: 'Taller de Latte Art Básico',
      date: '22 Nov',
      time: '10:00 - 13:00',
      description:
      'Aprende las técnicas fundamentales para texturizar la leche y crear diseños en tu café.',
      image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop',
      category: 'Taller'
    },
    {
      id: 3,
      title: 'Cena a Cuatro Manos',
      date: '28 Nov',
      time: '20:30 - 23:30',
      description:
      'Menú degustación exclusivo donde nuestro chef residente colabora con un talento local.',
      image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop',
      category: 'Pop-up Enogastronómico'
    },
    {
      id: 4,
      title: 'Sesión de Cupping Abierta',
      date: '05 Dic',
      time: '11:00 - 12:30',
      description:
      'Cata de nuestros nuevos orígenes de temporada. Aprende a identificar notas y perfiles.',
      image:
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop',
      category: 'Café de Especialidad'
    }]

  },
  location: {
    title: 'Visítanos',
    address: {
      title: 'Ubicación',
      lines: [
      'Calle Calderón de la Barca, 8',
      'Barrio de los Austrias',
      '28005 Madrid']

    },
    hours: {
      title: 'Horario',
      lines: [
      'Lunes a Viernes: 8:00 - 20:00',
      'Sábados y Domingos: 9:00 - 21:00']

    },
    contact: {
      title: 'Contacto',
      email: 'info@fourmadrid.com',
      phone: '+34 622 57 16 08',
      phoneLink: '+34622571608'
    },
    mapImage:
    'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop',
    mapImageAlt: 'Barrio de los Austrias, Madrid',
    mapPinLabel: 'FOUR Madrid',
    mapPinSublabel: 'Calderón de la Barca 8'
  },
  footer: {
    copyright: '© {year} {brand}. Todos los derechos reservados.'
  }
};