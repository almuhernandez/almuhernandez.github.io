export type StudentResource = {
  title: string;
  description: string;
  type: string;
  status: 'available' | 'pending';
  url?: string;
  image?: string;
};

export const students = {
  title: 'Estudiantes',
  highlightedIntroduction:
    'Aprender Analytics es más que aprender herramientas.',
  introduction:
    'Si estás aprendiendo Data Analytics, cambiando de carrera o preparándote para buscar tu primer trabajo en el sector, aquí encontrarás recursos para ayudarte a conectar lo que aprendes con lo que necesitarás en el mercado laboral.',
  context:
    'Después de más de 15 años de experiencia en Analytics y de mi experiencia como formadora y mentora, he creado diferentes recursos para acompañar a futuros analistas durante su aprendizaje y desarrollo profesional.',
  candidata: {
    title: 'Candidata',
    description:
      'Mi proyecto educativo para aprender Analytics con estructura, visión de negocio y orientación profesional.',
    link: {
      label: 'Visitar Candidata',
      url: 'https://candidata.co/',
    },
  },
  resourcesTitle: 'Recursos',
  resources: [
    {
      title: 'Newsletter',
      description:
        'Contenido sobre Analytics, aprendizaje y desarrollo profesional.',
      type: 'Contenido',
      status: 'pending',
    },
    {
      title: 'Recursos prácticos',
      description:
        'Materiales para aplicar conocimientos, preparar proyectos y desarrollar competencias profesionales.',
      type: 'Materiales',
      status: 'pending',
    },
    {
      title: 'Mentoring',
      description:
        'Acompañamiento y feedback para avanzar de forma más estructurada.',
      type: 'Acompañamiento',
      status: 'pending',
    },
  ] satisfies StudentResource[],
  courseStudents: {
    title: '¿Estudias conmigo?',
    description:
      'Si eres o has sido estudiante de alguno de mis cursos, este espacio irá incorporando recursos complementarios, materiales y herramientas que puedan ayudarte durante y después de la formación.',
  },
} as const;
