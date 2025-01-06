export interface NavLink {
  title: string;
  url?: string;
  section?: string;
}

export const navLinks: NavLink[] = [
  {
    title: 'Inicio',
    url: '/',
    section: 'inicio',
  },
  {
    title: 'Mapa Yincana',
    url: '/#yincana',
    section: 'yincana',
  },
  {
    title: 'Nube de palabras',
    url: '/#nube',
    section: 'nube',
  },
  {
    title: 'Etapas',
    section: 'etapas',
  },
  {
    title: 'Quiénes somos',
    url: '/#nosotros',
    section: 'nosotros',
  },
  {
    title: 'Contacto',
    url: '/#contacto',
    section: 'contacto',
  },
];

export const stepsNavigation: NavLink[] = [
  {
    title: 'Cuidados',
    url: '/#stage-cuidados',
  },
  {
    title: 'Educación',
    url: '/#stage-educacion',
  },
  {
    title: 'Sanidad',
    url: '/#stage-sanidad',
  },
  {
    title: 'Cultura',
    url: '/#stage-cultura',
  },
  {
    title: 'Vivienda',
    url: '/#stage-vivienda',
  },
  {
    title: '¿Qué opinas?',
    url: '/#opina',
  },
];

export const mobileNavigation: NavLink[] = [
  {
    title: 'Inicio',
    url: '/',
  },
  {
    title: 'Mapa Yincana',
    url: '/#yincana',
  },
  {
    title: 'Nube de palabras',
    url: '/#nube',
  },
  {
    title: 'Cuidados',
    url: '/#stage-cuidados',
  },
  {
    title: 'Educación',
    url: '/#stage-educacion',
  },
  {
    title: 'Sanidad',
    url: '/#stage-sanidad',
  },
  {
    title: 'Cultura',
    url: '/#stage-cultura',
  },
  {
    title: 'Vivienda',
    url: '/#stage-vivienda',
  },
  {
    title: '¿Qué opinas?',
    url: '/#opina',
  },
  {
    title: 'Quiénes somos',
    url: '/#nosotros',
  },
  {
    title: 'Contacto',
    url: '/#contacto',
  },
];