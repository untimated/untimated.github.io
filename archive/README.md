# Archive

Reference material kept out of the published site. Nothing in this directory is
built or deployed — Astro only picks up posts inside `src/content/blog/`, so these
files live here purely for me to look at while writing.

## Frontmatter cheatsheet

```markdown
---
title: 'Why I like Makefiles'
description: 'A short defence of a 50-year-old build tool.'
pubDate: '2026-08-20'
updatedDate: '2026-09-02' # optional
draft: true # optional — shows in `npm run dev`, excluded from the build
---
```

`title`, `description` and `pubDate` are required; the build fails without them.
Schema lives in `src/content.config.ts`.

## `template-posts/`

The Astro blog template's example posts. Two are worth keeping around:

| File                      | Why it's useful                                                                                                          |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| `markdown-style-guide.md` | **The main one.** Every Markdown element rendered side by side with its syntax — headings, tables, code blocks, nested lists, blockquotes with attribution, and the odds and ends (`abbr`, `sub`, `sup`, `kbd`, `mark`). Copy-paste from here when you forget table syntax. |
| `using-mdx.mdx`           | How to import and use a UI component inside a post, if you ever need something interactive.                              |
| `first-post.md`, `second-post.md`, `third-post.md` | Lorem-ipsum filler. Only value is showing the shape of a minimal post.                          |

### Caveats

- The `heroImage:` frontmatter in these files is **no longer part of the schema** —
  it was dropped when the site moved to the image-free Bear Blog layout. Ignore it.
- Their relative image paths (`../../assets/…`) don't resolve from this directory.
  For an image in a real post, put the file in `src/assets/` and reference it as
  `![alt](../../assets/name.jpg)` from `src/content/blog/`.

### Restoring one

Move it back and give it valid frontmatter:

```bash
mv archive/template-posts/first-post.md src/content/blog/
```

## Useful links

- [Astro Markdown reference](https://docs.astro.build/en/guides/markdown-content/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Bear Blog](https://bearblog.dev/) — the styling this site imitates
