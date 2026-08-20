export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];
export type LocalizedText = Record<Locale, string>;

export const localeLabels: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

export const analyticsWorkPaths = {
  es: '/proyectos/',
  en: '/en/projects/',
} as const;

export const caseStudyPath = (locale: Locale, slug: string) =>
  `${analyticsWorkPaths[locale]}${slug}/`;
