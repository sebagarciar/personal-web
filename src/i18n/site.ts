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
    builtNote: 'Not portfolio pieces. All four are running.',
    education: 'Education',
    stack: 'Stack',
    claudeSkills: 'Claude Skills',
    languages: 'Languages',
    about: 'About me',
    contact: 'Get in touch',
    contactNote: 'The fastest way to reach me is email.',
    languagesList: 'Spanish native, English C1 (Duolingo English Test, 140/160).',
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
    builtNote: 'No son piezas de portfolio. Las cuatro están funcionando.',
    education: 'Formación',
    stack: 'Stack',
    claudeSkills: 'Claude Skills',
    languages: 'Idiomas',
    about: 'Sobre mí',
    contact: 'Hablemos',
    contactNote: 'La vía más rápida para llegar a mí es el correo.',
    languagesList: 'Español nativo, inglés C1 (Duolingo English Test, 140/160).',
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

const claudeSkillsRepo = 'https://github.com/sebagarciar/claude-skills';

/** Skills de Claude Code que uso a diario. Nombre real del skill + qué hace. */
export const claudeSkills = {
  en: [
    {
      name: 'finance-dashboard-design',
      detail: 'The design system that governs the home finance app above.',
      href: `${claudeSkillsRepo}/tree/main/finance-dashboard-design`,
    },
    {
      name: 'tailor-cv',
      detail: 'Matches my CV to a job ad and outputs the PDF ready to apply.',
      href: `${claudeSkillsRepo}/tree/main/tailor-cv`,
    },
    {
      name: 'weekly-vault-review',
      detail: 'Weekly cleanup pass on my MBA notes vault in Obsidian.',
      href: `${claudeSkillsRepo}/tree/main/weekly-vault-review`,
    },
  ],
  es: [
    {
      name: 'finance-dashboard-design',
      detail: 'El sistema de diseño que gobierna la app de finanzas de arriba.',
      href: `${claudeSkillsRepo}/tree/main/finance-dashboard-design`,
    },
    {
      name: 'tailor-cv',
      detail: 'Ajusta mi CV a una oferta y entrega el PDF listo para postular.',
      href: `${claudeSkillsRepo}/tree/main/tailor-cv`,
    },
    {
      name: 'weekly-vault-review',
      detail: 'Limpieza semanal de mi vault de notas del MBA en Obsidian.',
      href: `${claudeSkillsRepo}/tree/main/weekly-vault-review`,
    },
  ],
} as const;
