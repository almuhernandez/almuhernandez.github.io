import { site } from './site';

export const legalNotice = {
  title: 'Aviso legal',
  introduction:
    'Información general sobre la titularidad, finalidad y condiciones de uso de este portfolio profesional.',
  sections: [
    {
      title: 'Identificación del sitio',
      paragraphs: [
        `Este sitio web corresponde al portfolio profesional de ${site.name}.`,
        `Sitio web: ${site.website}`,
        `Contacto: ${site.email}`,
      ],
    },
    {
      title: 'Finalidad',
      paragraphs: [
        'La finalidad de este sitio es presentar información profesional, experiencia, actividad formativa, proyectos y recursos relacionados con Analytics, Data Science, consultoría, Inteligencia Artificial y educación.',
      ],
    },
    {
      title: 'Condiciones de uso',
      paragraphs: [
        'El acceso y uso de este sitio implica utilizar sus contenidos de forma lícita y respetuosa. No se permite emplearlos para actividades contrarias a la ley, a los derechos de terceros o al funcionamiento normal de la web.',
        'La información se ofrece con carácter general y profesional. No constituye asesoramiento jurídico, financiero ni de otra naturaleza especializada.',
      ],
    },
    {
      title: 'Propiedad intelectual',
      paragraphs: [
        'Salvo que se indique lo contrario, los textos, contenidos y materiales propios publicados en este portfolio pertenecen a su autora. No se autoriza su reproducción, distribución o transformación fuera de los límites permitidos por la normativa aplicable sin autorización previa.',
        'Las marcas, nombres y contenidos de terceros pertenecen a sus respectivos titulares.',
      ],
    },
    {
      title: 'Enlaces externos',
      paragraphs: [
        'Este sitio contiene enlaces a páginas y servicios externos. Se facilitan como referencia o vía de contacto, pero sus contenidos, disponibilidad y políticas dependen de sus respectivos responsables.',
      ],
    },
    {
      title: 'Responsabilidad',
      paragraphs: [
        'Se procura mantener la información actualizada y el sitio disponible, pero no se garantiza la ausencia total de errores, interrupciones o cambios en servicios externos.',
      ],
    },
  ],
} as const;

export const privacyPolicy = {
  title: 'Política de privacidad',
  introduction:
    'Esta política explica de forma sencilla cómo se trata la información relacionada con las visitas y las comunicaciones recibidas a través de este portfolio.',
  sections: [
    {
      title: 'Responsable del portfolio',
      paragraphs: [
        `Responsable: ${site.name}`,
        `Sitio web: ${site.website}`,
        `Contacto sobre privacidad: ${site.email}`,
      ],
    },
    {
      title: 'Datos recogidos directamente por la web',
      paragraphs: [
        'Este sitio no contiene formularios y no recopila ni almacena directamente datos personales de quienes lo visitan.',
        'Actualmente no utiliza Analytics, publicidad, herramientas propias de seguimiento, localStorage, sessionStorage ni cookies no esenciales.',
      ],
    },
    {
      title: 'Comunicaciones por email',
      paragraphs: [
        `Si una persona decide contactar voluntariamente mediante el enlace de correo electrónico, los datos incluidos en su mensaje se utilizarán únicamente para gestionar y responder esa comunicación.`,
        `Las consultas relacionadas con esos datos pueden dirigirse a ${site.email}.`,
      ],
    },
    {
      title: 'Alojamiento mediante GitHub Pages',
      paragraphs: [
        'Este portfolio se publica como sitio estático mediante GitHub Pages.',
        'GitHub puede procesar determinados datos técnicos cuando una persona visita el sitio, incluida la dirección IP, por motivos de seguridad y de acuerdo con sus propias políticas.',
      ],
      links: [
        {
          label: 'Información sobre GitHub Pages',
          url: 'https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages',
        },
        {
          label: 'Política de privacidad de GitHub',
          url: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
        },
      ],
    },
    {
      title: 'Enlaces externos',
      paragraphs: [
        'La web incluye enlaces a servicios externos como LinkedIn y Candidata. Estos servicios no se cargan automáticamente al visitar el portfolio.',
        'Cuando una persona accede voluntariamente a uno de esos enlaces, se aplican las condiciones y políticas de privacidad del servicio correspondiente.',
      ],
    },
    {
      title: 'Cambios futuros',
      paragraphs: [
        'Esta política deberá revisarse y actualizarse si en el futuro se incorporan formularios, Analytics, newsletter, vídeos, contenidos embebidos, fuentes externas u otros servicios que traten datos o almacenen información en el dispositivo.',
      ],
    },
  ],
} as const;
