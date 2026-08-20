import type { Locale } from './i18n';

type NavigationLink = { label: string; href: string; destinationLocale?: Locale; variant?: 'service' };
type NavigationItem = NavigationLink | { label: string; children: NavigationLink[] };

export const navigation: Record<Locale, NavigationItem[]> = {
  es: [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre Mí', href: '/sobre-mi/' },
    { label: 'Experiencia & Proyectos', children: [
      { label: 'Experiencia', href: '/experiencia/' },
      { label: 'Proyectos', href: '/proyectos/' },
    ] },
    { label: 'Docencia', href: '/docencia/' },
    { label: 'Contacto', href: '/contacto/' },
    { label: 'Servicios', href: '/servicios/', variant: 'service' },
  ],
  en: [
    { label: 'Home', href: '/', destinationLocale: 'es' },
    { label: 'About', href: '/sobre-mi/', destinationLocale: 'es' },
    { label: 'Experience & Projects', children: [
      { label: 'Experience', href: '/experiencia/', destinationLocale: 'es' },
      { label: 'Projects', href: '/en/projects/' },
    ] },
    { label: 'Teaching', href: '/docencia/', destinationLocale: 'es' },
    { label: 'Contact', href: '/contacto/', destinationLocale: 'es' },
    { label: 'Services', href: '/servicios/', destinationLocale: 'es', variant: 'service' },
  ],
};

export const sharedUi = {
  es: { navigationLabel: 'Navegación principal', legalLabel: 'Información legal', legalNotice: 'Aviso legal', privacy: 'Privacidad', spanishOnly: 'Disponible en español' },
  en: { navigationLabel: 'Primary navigation', legalLabel: 'Legal information', legalNotice: 'Legal notice', privacy: 'Privacy', spanishOnly: 'Available in Spanish' },
} as const;
