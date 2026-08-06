export const servicesPage = {
  title: 'Servicios',
  description:
    'Servicios de Analytics, consultoría y formación para empresas y equipos que necesitan comprender problemas, aprovechar sus datos y desarrollar capacidades.',
  introduction: {
    lead: 'Datos, negocio y una mirada práctica para resolver problemas y tomar mejores decisiones.',
    text: 'Trabajo con empresas y equipos que necesitan entender mejor un problema, sacar partido a sus datos o desarrollar capacidades de Analytics.',
  },
  services: [
    {
      number: '01',
      title: 'Analytics & Data',
      paragraphs: [
        'Para organizaciones que tienen datos, una pregunta o un objetivo y necesitan convertirlos en respuestas útiles.',
        'Puedo ayudar a estructurar el análisis, explorar los datos, identificar patrones y oportunidades y traducir los resultados en conclusiones que ayuden a tomar decisiones.',
      ],
    },
    {
      number: '02',
      title: 'Consultoría',
      paragraphs: [
        'No todos los problemas empiezan con una pregunta perfectamente definida.',
        'Puedo ayudarte a entender el contexto, ordenar las piezas, identificar qué merece la pena analizar, priorizar y definir un enfoque práctico para avanzar.',
      ],
    },
    {
      number: '03',
      title: 'Formación & Workshops',
      paragraphs: [
        'Formación en Analytics y Data para empresas y equipos, desde workshops específicos hasta programas formativos y contenidos a medida.',
        'Diseño la formación partiendo de las necesidades, el nivel y el contexto del equipo, combinando conceptos, práctica y casos aplicados para conectar las herramientas con problemas reales de negocio.',
      ],
      link: {
        label: 'Conoce mi experiencia en formación',
        href: '/docencia/',
      },
    },
  ],
  appliedAI: {
    title: 'IA aplicada',
    text: 'Estoy incorporando herramientas de IA a mi forma de trabajar en análisis, investigación, automatización, desarrollo y aprendizaje, explorando dónde aportan valor real más allá del uso de la herramienta.',
  },
  deliverables: {
    title: 'De una pregunta a un resultado',
    introduction:
      'Cada proyecto es diferente, pero el objetivo es que el análisis termine en algo útil, comprensible y accionable.',
    label: 'Ejemplos de posibles entregables',
    items: [
      {
        title: 'Análisis & diagnóstico',
        text: 'Qué está ocurriendo, qué patrones encontramos y dónde merece la pena profundizar.',
      },
      {
        title: 'Insights & recomendaciones',
        text: 'Qué significan los resultados y qué acciones u oportunidades se desprenden de ellos.',
      },
      {
        title: 'Visualización & reporting',
        text: 'Dashboards, visualizaciones o materiales que permitan entender y comunicar los resultados.',
      },
      {
        title: 'Framework / roadmap',
        text: 'Una estructura clara de prioridades, próximos pasos y líneas de trabajo cuando el proyecto lo requiera.',
      },
      {
        title: 'Sesiones de trabajo / transferencia',
        text: 'Presentación de resultados y sesiones para que el equipo entienda el análisis y pueda utilizarlo.',
      },
    ],
    link: {
      label: 'Ver proyectos',
      href: '/proyectos/',
    },
  },
  process: {
    title: 'Cómo trabajo',
    steps: [
      {
        number: '01',
        title: 'Entender',
        text: 'El problema, el contexto y qué queremos conseguir.',
      },
      {
        number: '02',
        title: 'Estructurar',
        text: 'Ordenar las piezas, formular las preguntas adecuadas y priorizar lo importante.',
      },
      {
        number: '03',
        title: 'Analizar',
        text: 'Trabajar con los datos y herramientas necesarios para responder esas preguntas.',
      },
      {
        number: '04',
        title: 'Conectar',
        text: 'Relacionar los resultados con el contexto y las necesidades del negocio.',
      },
      {
        number: '05',
        title: 'Simplificar',
        text: 'Convertir el análisis en conclusiones claras que permitan avanzar y tomar decisiones.',
      },
    ],
  },
  contact: {
    title: '¿Tienes datos, un reto o un equipo que quieres capacitar?',
    text: 'Cuéntame qué necesitas y vemos cómo podemos abordarlo.',
    link: {
      label: 'Hablemos',
      href: '/contacto/',
    },
  },
} as const;
