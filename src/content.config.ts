import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lang = z.enum(['en', 'es']);

/** Un puesto de trabajo. Un archivo por puesto y por idioma. */
const roles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/roles' }),
  schema: z.object({
    lang,
    company: z.string(),
    role: z.string(),
    location: z.string(),
    dates: z.string(),
    /** Menor primero. */
    order: z.number(),
    /** Marca el bloque como internship o como pro bono, sin inflarlo. */
    tag: z.string().optional(),
    probono: z.boolean().default(false),
  }),
});

/** Algo que construi y uso. Un archivo por proyecto y por idioma. */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      lang,
      title: z.string(),
      order: z.number(),
      /** Captura real. Sin captura el proyecto no se publica. */
      shot: image().optional(),
      shotAlt: z.string().optional(),
      href: z.string().optional(),
      hrefLabel: z.string().optional(),
    }),
});

/** El texto de la pagina: apertura, formacion, stack, contacto. */
const page = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/page' }),
  schema: z.object({
    lang,
    /* Una linea por entrada. El salto es deliberado: la caja mide el ancho de
       la linea mas larga, y asi la foto encima puede centrarse contra el texto
       de verdad y no contra una caja mas ancha que el. */
    availability: z.array(z.string()).min(1),
    email: z.string(),
    linkedin: z.string(),
    github: z.string(),
  }),
});

/** El texto de "Sobre mi", en la voz de Seba. No reescribir en tono corporativo. */
const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({ lang }),
});

export const collections = { roles, projects, page, about };
