export const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Mí', href: '/sobre-mi/' },
  {
    label: 'Experiencia & Proyectos',
    children: [
      { label: 'Experiencia', href: '/experiencia/' },
      { label: 'Proyectos', href: '/proyectos/' },
    ],
  },
  { label: 'Docencia', href: '/docencia/' },
  { label: 'Contacto', href: '/contacto/' },
  { label: 'Servicios', href: '/servicios/', variant: 'service' },
] as const;
