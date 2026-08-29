// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { rehypeImageCaption } from './src/plugins/rehype-image-caption.ts';

// https://astro.build/config
export default defineConfig({
	// Your GitHub Pages user-site URL. Used for canonical links, the sitemap and RSS.
	site: 'https://untimated.github.io',
	integrations: [mdx(), sitemap()],
	markdown: {
		rehypePlugins: [rehypeImageCaption],
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
		},
	},
	fonts: [
		{
			// Astro downloads this at build time and self-hosts it, so no
			// requests go to Google when someone reads the site.
			provider: fontProviders.google(),
			name: 'EB Garamond',
			cssVariable: '--font-serif',
			weights: [400, 500, 600, 700],
			styles: ['normal', 'italic'],
			fallbacks: ['Iowan Old Style', 'Palatino Linotype', 'Georgia', 'serif'],
		},
	],
});
