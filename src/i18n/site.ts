/**
 * Textos de estructura y datos cortos, los dos idiomas juntos para que no se
 * desincronicen. El contenido largo (puestos, proyectos, sobre mi) vive en
 * Markdown, un archivo por idioma.
 */
export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const ui = {
  en: {
    htmlLang: 'en',
    otherLocale: 'es' as Locale,
    otherLocaleLabel: 'ES',
    thisLocaleLabel: 'EN',
    skipToContent: 'Skip to content',
    /* Enlaces de la cabecera. Cuatro: los que responden las preguntas que un
       recruiter se hace antes de escribir. */
    nav: [
      { href: '#built', label: 'Projects' },
      { href: '#experience', label: 'Experience' },
      { href: '#education', label: 'Education' },
      { href: '#contact', label: 'Contact' },
    ],
    experience: 'Experience',
    built: 'Things I built and use',
    builtNote: 'Not portfolio pieces. All three are running.',
    education: 'Education',
    stack: 'Stack',
    languages: 'Languages',
    about: 'About me',
    contact: 'Get in touch',
    contactNote: 'The fastest way to reach me is email.',
    languagesList: 'Spanish native, English advanced.',
    metaDescription:
      'Sebastián García Romero. Operations and AI, Madrid. I owned Chile’s rider business at Uber and now build the tools I used to ask other teams for.',
  },
  es: {
    htmlLang: 'es',
    otherLocale: 'en' as Locale,
    otherLocaleLabel: 'EN',
    thisLocaleLabel: 'ES',
    skipToContent: 'Saltar al contenido',
    nav: [
      { href: '#built', label: 'Proyectos' },
      { href: '#experience', label: 'Experiencia' },
      { href: '#education', label: 'Formación' },
      { href: '#contact', label: 'Contacto' },
    ],
    experience: 'Experiencia',
    built: 'Cosas que he construido y uso',
    builtNote: 'No son piezas de portfolio. Las tres están funcionando.',
    education: 'Formación',
    stack: 'Stack',
    languages: 'Idiomas',
    about: 'Sobre mí',
    contact: 'Hablemos',
    contactNote: 'La vía más rápida para llegar a mí es el correo.',
    languagesList: 'Español nativo, inglés avanzado.',
    metaDescription:
      'Sebastián García Romero. Operaciones e IA, Madrid. Fui dueño de la vertical Rider de Uber en Chile y hoy construyo las herramientas que antes le pedía a otros equipos.',
  },
} as const;

/** Formación. El MBA va aquí abajo, no arriba. */
export const education = {
  en: [
    {
      school: 'IE Business School',
      detail:
        'International MBA, concentration in digital business, transformation and innovation. Top 20% of the class in terms 1 and 2.',
      dates: '2025–2026',
    },
    {
      school: 'Pontificia Universidad Católica de Chile',
      detail: 'Industrial Civil Engineering, minor in Information Technology.',
      dates: '2019',
    },
  ],
  es: [
    {
      school: 'IE Business School',
      detail:
        'International MBA, concentración en negocio digital, transformación e innovación. Top 20% de la promoción en los trimestres 1 y 2.',
      dates: '2025–2026',
    },
    {
      school: 'Pontificia Universidad Católica de Chile',
      detail: 'Ingeniería Civil Industrial, minor en Tecnologías de Información.',
      dates: '2019',
    },
  ],
} as const;

/** Bloque plano. Sin barras, sin porcentajes, sin niveles. */
export const stack = [
  'Advanced SQL',
  'Python',
  'Power BI',
  'Excel VBA',
  'Power Query',
  'Prompt engineering',
  'Claude Code',
] as const;
