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
      title: { es: 'Analítica de clientes y comportamiento', en: 'Customer & Behaviour Analytics' },
      skills: { es: ['Segmentación de clientes', 'Análisis RFM', 'Valor de vida del cliente', 'Análisis de cesta de compra', 'Comportamiento de clientes y compra'], en: ['Customer Segmentation', 'RFM Analysis', 'Customer Lifetime Value', 'Market Basket Analysis', 'Customer & Purchase Behaviour'] },
      homeSkills: { es: ['Segmentación de clientes', 'Análisis RFM', 'Valor de vida del cliente'], en: ['Customer Segmentation', 'RFM Analysis', 'Customer Lifetime Value'] },
      evidence: [
        { label: shared('Customer Segmentation'), href: { es: '/es/proyectos/customer-segmentation/', en: '/projects/customer-segmentation/' } },
        { label: shared('Market Basket Analysis'), href: { es: '/es/proyectos/market-basket-analysis/', en: '/projects/market-basket-analysis/' } },
      ],
    },
    {
      number: '02',
      title: { es: 'Analítica estadística y predictiva', en: 'Statistical & Predictive Analytics' },
      skills: { es: ['Análisis estadístico', 'Regresión', 'Modelado predictivo', 'Modelado de adquisición de clientes', 'Predicción'], en: ['Statistical Analysis', 'Regression', 'Predictive Modelling', 'Customer Acquisition Modelling', 'Forecasting'] },
      homeSkills: { es: ['Análisis estadístico', 'Modelado predictivo', 'Predicción'], en: ['Statistical Analysis', 'Predictive Modelling', 'Forecasting'] },
      evidence: [],
    },
    {
      number: '03',
      title: { es: 'Analítica operacional', en: 'Operational Analytics' },
      skills: { es: ['Optimización de inventario', 'Optimización de rutas', 'Predicción de demanda / ventas'], en: ['Inventory Optimisation', 'Route Optimisation', 'Demand / Sales Forecasting'] },
      homeSkills: { es: ['Optimización de inventario', 'Optimización de rutas', 'Predicción de demanda / ventas'], en: ['Inventory Optimisation', 'Route Optimisation', 'Demand / Sales Forecasting'] },
      evidence: [
        { label: shared('Demand & Sales Forecasting'), href: { es: '/es/proyectos/demand-sales-forecasting/', en: '/projects/demand-sales-forecasting/' } },
      ],
    },
    {
      number: '04',
      title: { es: 'Análisis de datos y Business Intelligence', en: 'Data Analysis & Business Intelligence' },
      skills: { es: ['Análisis con SQL', 'Modelado de datos', 'Visualización de datos', 'Creación de dashboards', 'Validación de datos'], en: ['SQL Analysis', 'Data Modelling', 'Data Visualisation', 'Dashboarding', 'Data Validation'] },
      homeSkills: { es: ['Análisis con SQL', 'Modelado de datos', 'Visualización de datos'], en: ['SQL Analysis', 'Data Modelling', 'Data Visualisation'] },
      evidence: [],
    },
    {
      number: '05',
      title: { es: 'Consultoría y comunicación en Analytics', en: 'Analytics Consulting & Communication' },
      skills: { es: ['Definición de problemas de negocio', 'Estrategia de datos', 'Comunicación de insights', 'Colaboración con stakeholders', 'Formación'], en: ['Business Problem Framing', 'Data Strategy', 'Insight Communication', 'Stakeholder Collaboration', 'Training'] },
      homeSkills: { es: ['Definición de problemas de negocio', 'Estrategia de datos', 'Comunicación de insights'], en: ['Business Problem Framing', 'Data Strategy', 'Insight Communication'] },
      evidence: [],
    },
  ],
  coreToolkit: {
    label: { es: 'Herramientas principales', en: 'Core Toolkit' },
    items: ['SQL', 'Python', 'Power BI', 'Tableau', 'BigQuery', 'R'],
  },
  homeLinks: {
    about: { label: { es: 'Ver experiencia analítica', en: 'View analytics expertise' }, href: '/sobre-mi/#experiencia-analitica' },
    work: { label: { es: 'Ver trabajo analítico', en: 'View Analytics Work' }, href: { es: '/es/proyectos/', en: '/projects/' } },
  },
  currentFocus: {
    title: { es: 'Foco analítico actual', en: 'Current Analytics Focus' },
    introduction: {
      es: 'Actualización práctica de mi experiencia analítica mediante proyectos hands-on con herramientas modernas de cloud analytics, BI y modelización aplicada.',
      en: 'Expanding my established analytics background through hands-on work with modern cloud analytics, BI and applied modelling workflows.',
    },
    areas: [
      {
        title: { es: 'Analytics en la nube y BI', en: 'Cloud Analytics & BI' },
        items: ['BigQuery', 'SQL', 'Data Modelling', 'Power BI', 'Tableau'],
        evidence: {
          label: shared('Understanding Customer Behaviour'),
          tools: ['BigQuery', 'SQL', 'Data Modelling', 'Power BI'],
          href: { es: '/es/proyectos/#portfolio-title', en: '/projects/#portfolio-title' },
        },
      },
    ],
  },
  toolkit: {
    title: { es: 'Herramientas técnicas', en: 'Technical Toolkit' },
    groups: [
      { title: { es: 'Stack principal de Analytics', en: 'Core Analytics Stack' }, items: ['SQL', 'Python', 'Power BI', 'Tableau', 'BigQuery', 'R'], emphasis: 'core' },
      { title: { es: 'Analytics con Python', en: 'Python Analytics' }, items: ['pandas', 'NumPy', 'SciPy', 'scikit-learn', 'matplotlib', 'Plotly', 'Jupyter', 'Streamlit'], emphasis: 'standard' },
      { title: { es: 'Herramientas de datos / BI / Analytics', en: 'Data / BI / Analytics Tools' }, items: ['MySQL', 'Looker Studio', 'Git / GitHub', 'Excel'], emphasis: 'standard' },
      { title: { es: 'Herramientas profesionales adicionales', en: 'Additional Professional Tools' }, items: ['Alteryx', 'SAS', 'SPSS', 'Hive', 'Hadoop'], emphasis: 'secondary' },
      { title: { es: 'Colaboración', en: 'Collaboration' }, items: ['Jira', 'Confluence'], emphasis: 'secondary' },
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
