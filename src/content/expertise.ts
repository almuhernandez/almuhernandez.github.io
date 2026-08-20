import type { Locale } from './i18n';

const shared = <T>(value: T): Record<Locale, T> => ({ es: value, en: value });

export const expertiseContent = {
  sectionTitle: { es: 'Experiencia analítica', en: 'Analytics Expertise' },
  homeTitle: { es: 'Capacidades analíticas', en: 'Analytics Capabilities' },
  homeIntroduction: {
    es: 'Experiencia analítica aplicada a clientes, negocio, operaciones y toma de decisiones.',
    en: 'Analytics experience applied to customers, business, operations and decision-making.',
  },
  areas: [
    {
      number: '01',
      title: shared('Customer & Behaviour Analytics'),
      skills: shared(['Customer Segmentation', 'RFM Analysis', 'Customer Lifetime Value', 'Market Basket Analysis', 'Customer & Purchase Behaviour']),
      homeSkills: shared(['Customer Segmentation', 'RFM Analysis', 'Customer Lifetime Value']),
      evidence: [
        { label: shared('Customer Segmentation'), href: { es: '/proyectos/customer-segmentation/', en: '/en/projects/customer-segmentation/' } },
        { label: shared('Market Basket Analysis'), href: { es: '/proyectos/market-basket-analysis/', en: '/en/projects/market-basket-analysis/' } },
      ],
    },
    {
      number: '02',
      title: shared('Statistical & Predictive Analytics'),
      skills: shared(['Statistical Analysis', 'Regression', 'Predictive Modelling', 'Customer Acquisition Modelling', 'Forecasting']),
      homeSkills: shared(['Statistical Analysis', 'Predictive Modelling', 'Forecasting']),
      evidence: [],
    },
    {
      number: '03',
      title: shared('Operational Analytics'),
      skills: shared(['Inventory Optimisation', 'Route Optimisation', 'Demand / Sales Forecasting']),
      homeSkills: shared(['Inventory Optimisation', 'Route Optimisation', 'Demand / Sales Forecasting']),
      evidence: [
        { label: shared('Demand & Sales Forecasting'), href: { es: '/proyectos/demand-sales-forecasting/', en: '/en/projects/demand-sales-forecasting/' } },
      ],
    },
    {
      number: '04',
      title: shared('Data Analysis & Business Intelligence'),
      skills: shared(['SQL Analysis', 'Data Modelling', 'Data Visualisation', 'Dashboarding', 'Data Validation']),
      homeSkills: shared(['SQL Analysis', 'Data Modelling', 'Data Visualisation']),
      evidence: [],
    },
    {
      number: '05',
      title: shared('Analytics Consulting & Communication'),
      skills: shared(['Business Problem Framing', 'Data Strategy', 'Insight Communication', 'Stakeholder Collaboration', 'Training']),
      homeSkills: shared(['Business Problem Framing', 'Data Strategy', 'Insight Communication']),
      evidence: [],
    },
  ],
  coreToolkit: {
    label: { es: 'Core Toolkit', en: 'Core Toolkit' },
    items: ['SQL', 'Python', 'Power BI', 'Tableau', 'BigQuery', 'R'],
  },
  homeLinks: {
    about: { label: { es: 'Ver experiencia analítica', en: 'View analytics expertise' }, href: '/sobre-mi/#experiencia-analitica' },
    work: { label: { es: 'Ver Analytics Work', en: 'View Analytics Work' }, href: { es: '/proyectos/', en: '/en/projects/' } },
  },
  currentFocus: {
    title: { es: 'Foco analítico actual', en: 'Current Analytics Focus' },
    introduction: {
      es: 'Actualización práctica de mi experiencia analítica mediante proyectos hands-on con herramientas modernas de cloud analytics, BI y modelización aplicada.',
      en: 'Expanding my established analytics background through hands-on work with modern cloud analytics, BI and applied modelling workflows.',
    },
    areas: [
      {
        title: shared('Cloud Analytics & BI'),
        items: ['BigQuery', 'SQL', 'Data Modelling', 'Power BI', 'Tableau'],
        evidence: {
          label: shared('Understanding Customer Behaviour'),
          tools: ['BigQuery', 'SQL', 'Data Modelling', 'Power BI'],
          href: { es: '/proyectos/#portfolio-title', en: '/en/projects/#portfolio-title' },
        },
      },
    ],
  },
  toolkit: {
    title: { es: 'Technical Toolkit', en: 'Technical Toolkit' },
    groups: [
      { title: { es: 'Core Analytics Stack', en: 'Core Analytics Stack' }, items: ['SQL', 'Python', 'Power BI', 'Tableau', 'BigQuery', 'R'], emphasis: 'core' },
      { title: { es: 'Python Analytics', en: 'Python Analytics' }, items: ['pandas', 'NumPy', 'SciPy', 'scikit-learn', 'matplotlib', 'Plotly', 'Jupyter', 'Streamlit'], emphasis: 'standard' },
      { title: { es: 'Data / BI / Analytics Tools', en: 'Data / BI / Analytics Tools' }, items: ['MySQL', 'Looker Studio', 'Git / GitHub', 'Excel'], emphasis: 'standard' },
      { title: { es: 'Additional Professional Tools', en: 'Additional Professional Tools' }, items: ['Alteryx', 'SAS', 'SPSS', 'Hive', 'Hadoop'], emphasis: 'secondary' },
      { title: { es: 'Collaboration', en: 'Collaboration' }, items: ['Jira', 'Confluence'], emphasis: 'secondary' },
    ],
    notes: [
      { tool: 'R', text: { es: 'Experiencia analítica profesional consolidada, con un uso menos reciente.', en: 'Substantial professional analytics experience, with less recent use.' } },
      { tool: 'Looker Studio', text: { es: 'Uso en menor medida que Power BI y Tableau.', en: 'Used to a lesser extent than Power BI and Tableau.' } },
    ],
  },
  education: {
    title: { es: 'Formación', en: 'Education' },
    academicTitle: { es: 'Base cuantitativa', en: 'Quantitative Foundation' },
    academic: [
      { name: 'MSc Applied Statistics', institution: 'Birkbeck, University of London', period: '2013–2015' },
      { name: 'Degree in Physics & Atmospheric Science', institution: 'Universidad Complutense de Madrid', period: '2004–2010' },
    ],
    certificationsTitle: { es: 'Certificación profesional', en: 'Professional Certification' },
    certifications: [
      { name: 'Professional Scrum Product Owner I (PSPO I)', institution: 'Scrum.org', period: '2020' },
    ],
  },
} as const;
