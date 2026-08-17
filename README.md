# untimated.github.io

My personal blog. Built with [Astro](https://astro.build), styled after
[Bear Blog](https://bearblog.dev/) in EB Garamond, and deployed to GitHub Pages
by a GitHub Actions workflow.

Live at **<https://untimated.github.io>**.

## Writing a post

1. Create a Markdown file in `src/content/blog/`. **The filename becomes the URL** —
   `src/content/blog/why-i-like-makefiles.md` is served at `/blog/why-i-like-makefiles/`.
2. Add frontmatter at the top:

   ```markdown
   ---
   title: 'Why I like Makefiles'
   description: 'A short defence of a 50-year-old build tool.'
   pubDate: '2026-08-20'
   ---

   Your words go here.
   ```

3. `git push` to `main`. The workflow builds and publishes it in a minute or two.

### Frontmatter fields

| Field         | Required | Notes                                                        |
| :------------ | :------- | :----------------------------------------------------------- |
| `title`       | yes      | Shown as the `<h1>` and in the page title                    |
| `description` | yes      | Used for SEO, social previews and the RSS feed               |
| `pubDate`     | yes      | Any parseable date, e.g. `'2026-08-20'` or `'Aug 20 2026'`   |
| `updatedDate` | no       | Renders a "updated …" note under the title                   |
| `draft`       | no       | `draft: true` shows locally but is **excluded** from builds  |

The schema in `src/content.config.ts` enforces these — a missing `title` fails the
build instead of silently shipping a broken page.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Dev server at `localhost:4321`, live reload  |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Serve `./dist/` locally to check the build   |

## Where things live

```text
src/
├── content/blog/          your posts (.md / .mdx)  ← you'll spend all your time here
├── content.config.ts      frontmatter schema
├── consts.ts              site title, description, author, GitHub URL
├── styles/global.css      all the styling, including light/dark colours
├── layouts/BlogPost.astro the wrapper around a single post
├── components/            header, footer, date formatting
├── utils/posts.ts         shared "published posts, newest first" helper
└── pages/
    ├── index.astro        landing page (intro + 5 most recent)
    ├── about.astro        about page
    ├── blog/index.astro   full archive, grouped by year
    ├── blog/[...slug].astro  renders each post
    └── rss.xml.js         the feed
archive/                   reference material, NOT built or deployed
.github/workflows/deploy.yml   builds + deploys on push to main
```

`archive/` holds writing reference — a frontmatter cheatsheet and the Astro
template's Markdown style guide. Astro only builds posts inside
`src/content/blog/`, so nothing there reaches the live site. See
[`archive/README.md`](archive/README.md).

## Customising

- **Name, description, links** — `src/consts.ts`
- **Colours, fonts, spacing** — `src/styles/global.css` (the CSS variables at the top)
- **Typeface** — the `fonts` block in `astro.config.mjs`; Astro downloads and
  self-hosts it at build time, so no requests go to Google at runtime
- **Nav links** — `src/components/Header.astro`

## Custom domain

Add a `public/CNAME` file containing just the domain (e.g. `example.com`), point
your DNS at GitHub, and set the domain under **Settings → Pages**. Also update
`site` in `astro.config.mjs` so canonical URLs and the RSS feed stay correct.
