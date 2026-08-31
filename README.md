# personal-web

My personal site. A CV in long form, in English and Spanish, for people hiring
operators who can also build.

Static, no database, no CMS, no backend. Every page ships **zero JavaScript**:
the language switch is a link, not a script.

## Editing the content

There is no admin panel. Content is Markdown, one file per job and per project,
one copy per language. To change something, edit the file.

```
src/content/
  page/{en,es}.md          opening line, availability, contact links
  about/{en,es}.md         the "About me" text
  roles/{en,es}/*.md       one file per job
  projects/{en,es}/*.md    one file per project
```

Structure that is short and lives in both languages at once (section titles,
education, stack) is in `src/i18n/site.ts`.

### Two levels of emphasis

The design has exactly two, and they are not interchangeable:

| Syntax | Renders as | Use it for |
|---|---|---|
| `==text==` | blue highlight | the one number that defines the block |
| `**text**` | blue bold | supporting numbers inside the paragraph |

Rules worth keeping, because breaking them is what makes the page look noisy:

- **One highlight per block**, in the `####` result line. Not in the paragraph.
- **At most three bold numbers per block.** Past that the eye stops seeing any
  of them.
- **Never repeat a highlighted number** as a bold one in the same block.
- Keep hero highlights **short**. A highlight that wraps onto a second line
  covers half the sentence and reads as a mistake. CSS stops it from wrapping,
  so a long one pushes the whole line instead.

### A job

```markdown
---
lang: en
company: Uber
role: Rider Team Lead
location: Santiago de Chile
dates: 2023–2025
order: 2          # lower is higher on the page, reverse chronological
tag: MBA internship   # optional label, e.g. an internship
probono: false        # true moves it to its own group below paid work
---

#### ==$2M a month==, owned end to end.

I owned Chile's rider business outright. The user base grew **16%** year over
year.
```

The `####` line is the result headline. It is an `h4` on purpose: the page
outline is section `h2` → company `h3` → result `h4`, so a screen reader can
walk it.

### A project

Every project needs a real screenshot. There is no icon fallback by design: a
project without one renders a visible gap, so it cannot ship half-finished.

```markdown
---
lang: en
title: Home Finance
order: 1
shot: ../../../assets/shots/home-finance.png
shotAlt: The Home Finance dashboard, showing net worth across two currencies
href: https://github.com/sebagarciar/home-finance
hrefLabel: Source on GitHub
---

Two countries, two currencies, **1,816** real transactions. In daily use.
```

Drop the image in `src/assets/shots/` at roughly 16:10. Astro converts it to
AVIF and generates the responsive sizes; do not pre-optimise it.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

## Stack

Astro, Tailwind, Markdown content collections. Instrument Sans, self-hosted.
Deployed on Cloudflare Pages. Domain still to be pointed at it.

`src/lib/remark-mark.mjs` is a small remark plugin that turns `==text==` into
`<mark>`. Astro's default Markdown processor does not support that syntax, so
the file exists to keep the highlight authorable from the content rather than
from a component.
