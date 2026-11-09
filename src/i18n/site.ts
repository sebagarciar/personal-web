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
    builtNote: 'All six are live. One started as a class project.',
    education: 'Education',
    stack: 'Stack',
    claudeSkills: 'Claude Skills',
    claudeSkillsNote:
      'Reusable instructions that teach Claude Code how I want a recurring task done. These are the ones I use the most.',
    githubActivity: 'GitHub Activity',
    githubActivityNote: 'My public commit history, updated weekly.',
    githubActivityCount: 'contributions in the last year',
    githubActivityLink: 'View profile',
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
    builtNote: 'Las seis están funcionando. Una nació como proyecto de clase.',
    education: 'Formación',
    stack: 'Stack',
    claudeSkills: 'Claude Skills',
    claudeSkillsNote:
      'Instrucciones reutilizables que le enseñan a Claude Code cómo quiero que haga una tarea recurrente. Estas son las que más uso.',
    githubActivity: 'Actividad en GitHub',
    githubActivityNote: 'Mi historial público de commits, actualizado cada semana.',
    githubActivityCount: 'contribuciones en el último año',
    githubActivityLink: 'Ver perfil',
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
      name: 'apply',
      detail: 'Job ad in: checks the must-haves against my CV bank, builds the CV and form answers, logs it. Stops before Submit.',
      href: `${claudeSkillsRepo}/tree/main/apply`,
    },
    {
      name: 'find-jobs',
      detail: 'Scans new postings every morning, ranks them against my CV and builds a one-page report.',
      href: `${claudeSkillsRepo}/tree/main/find-jobs`,
    },
    {
      name: 'business-case',
      detail: 'Takes a case brief to one deck and one numbers model, with a review checklist.',
      href: `${claudeSkillsRepo}/tree/main/business-case`,
    },
    {
      name: 'tailor-cv',
      detail: 'Matches my CV to a job ad and outputs the PDF ready to apply.',
      href: `${claudeSkillsRepo}/tree/main/tailor-cv`,
    },
    {
      name: 'interview-prep',
      detail: 'Researches the company, builds the interview brief, then drills me on it.',
      href: `${claudeSkillsRepo}/tree/main/interview-prep`,
    },
    {
      name: 'weekly-vault-review',
      detail: 'Weekly cleanup pass on my MBA notes vault in Obsidian.',
      href: `${claudeSkillsRepo}/tree/main/weekly-vault-review`,
    },
    {
      name: 'wrap-up',
      detail: 'Reviews a session for lessons worth keeping, one item at a time, nothing written without my yes.',
      href: `${claudeSkillsRepo}/tree/main/wrap-up`,
    },
  ],
  es: [
    {
      name: 'apply',
      detail: 'Entra un aviso de trabajo: revisa los requisitos contra mi banco de CV, arma el CV y las respuestas del formulario, y lo registra. Se detiene antes de enviar.',
      href: `${claudeSkillsRepo}/tree/main/apply`,
    },
    {
      name: 'find-jobs',
      detail: 'Revisa las ofertas nuevas, las ordena contra mi CV y arma un informe de una página.',
      href: `${claudeSkillsRepo}/tree/main/find-jobs`,
    },
    {
      name: 'business-case',
      detail: 'Lleva el brief de un caso a un deck y un modelo de números, con checklist de revisión.',
      href: `${claudeSkillsRepo}/tree/main/business-case`,
    },
    {
      name: 'tailor-cv',
      detail: 'Ajusta mi CV a una oferta y entrega el PDF listo para postular.',
      href: `${claudeSkillsRepo}/tree/main/tailor-cv`,
    },
    {
      name: 'interview-prep',
      detail: 'Investiga la empresa, arma el brief de la entrevista y me hace el simulacro.',
      href: `${claudeSkillsRepo}/tree/main/interview-prep`,
    },
    {
      name: 'weekly-vault-review',
      detail: 'Limpieza semanal de mi vault de notas del MBA en Obsidian.',
      href: `${claudeSkillsRepo}/tree/main/weekly-vault-review`,
    },
    {
      name: 'wrap-up',
      detail: 'Revisa una sesión en busca de lecciones que valga la pena guardar, una por una, y no escribe nada sin mi visto bueno.',
      href: `${claudeSkillsRepo}/tree/main/wrap-up`,
    },
  ],
} as const;
