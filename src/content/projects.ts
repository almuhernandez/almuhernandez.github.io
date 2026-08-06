export type Project = {
  title: string;
  description: string;
  categories?: string[];
  url?: string;
  repository?: string;
};

export const projects: Project[] = [];

export type CaseStudy = {
  title: string;
  description: string;
  category: string;
  status: string;
  image?: string;
  context?: string;
  businessQuestions?: string[];
  kpis?: string[];
  data?: string;
  technologies?: string[];
  analysis?: string;
  insights?: string[];
  recommendations?: string[];
  deliverables?: string[];
  executiveSummary?: string;
  github?: string;
  links?: Array<{ label: string; url: string }>;
  plannedContent?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: 'Understanding Customer Behaviour',
    category: 'Customer Analytics',
    status: 'En desarrollo',
    description:
      'Proyecto de Customer Analytics orientado a entender el comportamiento de los clientes y transformar los datos en información útil para la toma de decisiones.',
  },
];

export const projectsPage = {
  title: 'Proyectos',
  introduction: [
    'Del problema de negocio a la decisión.',
    'Case studies y proyectos que muestran cómo conecto problemas de negocio, datos, análisis e insights con decisiones y entregables concretos.',
  ],
  caseStudySection: {
    number: '01',
    title: 'Portfolio & Case Studies',
    introduction: [
      'Casos de Analytics y Data que muestran cómo abordo problemas relevantes para empresas, desde la definición de las preguntas hasta los insights, recomendaciones y entregables.',
    ],
  },
  experienceSection: {
    number: '02',
    title: 'Experiencia en proyectos',
    introduction: [],
    areas: [
      {
        title: 'Customer Analytics',
        items: [
          'Segmentación de clientes',
          'Customer Lifetime Value',
          'RFM Analysis',
          'Basket Analysis',
          'Customer Behaviour Analysis',
        ],
      },
      {
        title: 'Predictive Analytics & Optimization',
        items: [
          'Predicción de ventas',
          'Optimización de stock',
          'Optimización de rutas',
          'Optimización de turnos',
        ],
      },
      {
        title: 'Business Intelligence & Data Strategy',
        items: [
          'Dashboards y reporting',
          'Estrategia de datos',
          'Integración y análisis de diferentes fuentes de datos',
          'Product Performance',
          'Análisis para apoyar decisiones de negocio',
        ],
      },
      {
        title: 'Health & Public Data',
        items: [
          'Análisis estadístico aplicado a salud',
          'Análisis de datos de vigilancia epidemiológica',
          'Automatización de procesos relacionados con datos epidemiológicos',
          'Automatización de informes epidemiológicos',
        ],
      },
    ],
    confidentialityNote:
      'Selección de proyectos realizados a lo largo de mi experiencia profesional. Por confidencialidad, se presentan por tipología y no como casos de estudio completos.',
  },
  ownProjectsSection: {
    number: '03',
    title: 'Proyectos propios',
    projects: [
      {
        title: 'Candidata',
        description: [
          'Candidata es un proyecto educativo creado para ayudar a futuros profesionales de Data Analytics a conectar el aprendizaje técnico con su aplicación en el mercado laboral.',
        ],
        ecosystemTitle: 'Candidata',
        ecosystem: [
          'Newsletter',
          'Recursos',
          'Mentorías',
          'Contenido educativo',
        ],
        link: {
          label: 'Visitar Candidata',
          url: 'https://candidata.co/',
        },
      },
    ],
  },
} as const;
