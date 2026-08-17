## This project

Personal blog for https://untimated.github.io, deployed to GitHub Pages via
`.github/workflows/deploy.yml` on every push to `main`.

Conventions:

- Styling is deliberately minimal, modelled on Bear Blog: one column, no cards,
  no hero images, no client-side JS. Set in EB Garamond. Keep it that way unless
  asked otherwise.
- All colours are CSS variables at the top of `src/styles/global.css`, with a
  `prefers-color-scheme: dark` block. Don't hardcode colours in components.
- Posts live in `src/content/blog/`; the frontmatter schema is in
  `src/content.config.ts`. Use `getPublishedPosts()` from `src/utils/posts.ts`
  rather than calling `getCollection('blog')` directly — it applies the draft
  filter and sorts newest-first.
- `site` in `astro.config.mjs` must stay in sync with the real domain, or
  canonical URLs, the sitemap and RSS break.
- `archive/` is reference material only — outside the content collection, never
  built or deployed. Don't wire it into the site or treat its contents as posts.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
