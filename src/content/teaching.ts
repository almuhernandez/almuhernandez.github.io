export type TeachingItem = {
  title: string;
  organization?: string;
  date?: string;
  description?: string;
};

export const teaching: TeachingItem[] = [];

export const teachingPage = {
  title: 'Docencia',
  introduction: [
    'Compartir lo aprendido también forma parte de mi trabajo.',
    'Después de más de 15 años de experiencia en Analytics, Data Science y consultoría, la formación se ha convertido en una parte importante de mi trayectoria profesional.',
    'Combino experiencia real en proyectos con formación práctica para ayudar a futuros profesionales a entender no solo las herramientas, sino también cómo utilizarlas para resolver problemas y trabajar en Analytics.',
    'Imparto formación en español e inglés.',
  ],
  areas: [
    {
      number: '01',
      title: 'Formación en Data Analytics',
      organizations: [
        {
          name: 'Adalab',
          role: 'Data Analytics Instructor',
          paragraphs: [
            'Entre 2024 y 2025 participé en la formación de futuras analistas de datos, creando materiales educativos, impartiendo clases y sesiones prácticas y proporcionando feedback y mentoring durante su proceso de aprendizaje.',
          ],
        },
        {
          name: 'Ironhack',
          role: 'Data Analytics Instructor',
          paragraphs: [
            'Imparto formación en Data Analytics en español e inglés, combinando conceptos, herramientas y ejercicios prácticos con la experiencia adquirida durante mi trayectoria profesional.',
          ],
        },
      ],
      tools: {
        label: 'Qué enseño',
        items: [
          'Python',
          'SQL',
          'Power BI',
          'Tableau',
          'Analytics',
          'Business Thinking',
        ],
      },
    },
    {
      number: '02',
      title: 'Creación de contenidos educativos',
      paragraphs: [
        'La formación también implica diseñar cómo se aprende.',
        'Creo y adapto materiales, ejercicios y recursos educativos orientados a facilitar la comprensión y aplicación práctica de Analytics.',
        'Además de los contenidos desarrollados como instructora, estoy creando recursos propios para ayudar a conectar el aprendizaje técnico con los problemas de negocio y con las competencias necesarias para trabajar como analista de datos.',
      ],
      project: {
        name: 'Candidata',
        description:
          'Candidata forma parte de esta línea de trabajo como proyecto educativo propio, donde desarrollo contenidos y recursos relacionados con Analytics, aprendizaje y desarrollo profesional.',
        link: {
          label: 'Visitar Candidata →',
          url: 'https://candidata.co/',
        },
      },
    },
    {
      number: '03',
      title: 'Mentoring',
      paragraphs: [
        'Una parte importante de mi forma de enseñar consiste en acompañar a los estudiantes durante su proceso de aprendizaje.',
        'Esto incluye resolver dudas, revisar su trabajo, proporcionar feedback y ayudarles a desarrollar una forma estructurada de enfrentarse a problemas de Analytics.',
        'También trabajo aspectos relacionados con la preparación profesional y la transición al mercado laboral.',
      ],
      experience: {
        name: 'Nothiring',
        role: 'Mentora',
        date: 'Diciembre 2024 – Junio 2025',
        description: 'Mentoría.',
      },
    },
    {
      number: '04',
      title: 'Charlas y Workshops',
      paragraphs: [
        'También imparto charlas y sesiones relacionadas con Analytics y desarrollo profesional.',
      ],
      topics: [
        {
          title: 'Analytics',
          description:
            'Conceptos, experiencia profesional y aplicación del análisis de datos en contextos reales.',
        },
        {
          title: 'Preparación de entrevistas',
          description:
            'Cómo preparar procesos de selección para posiciones de Data Analytics y comunicar mejor experiencia, conocimientos y proyectos.',
        },
      ],
    },
  ],
  approach: {
    title: 'Mi enfoque',
    paragraphs: [
      'Aprender Analytics es más que aprender herramientas.',
      'Mi objetivo es ayudar a entender cómo plantear problemas, trabajar con los datos, tomar decisiones y comunicar resultados, conectando el aprendizaje técnico con situaciones profesionales reales.',
    ],
  },
} as const;
