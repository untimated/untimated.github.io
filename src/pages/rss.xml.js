import rss from '@astrojs/rss';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { render } from 'astro:content';
import { AUTHOR_NAME, SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getPublishedPosts } from '../utils/posts';

// Feed readers show content out of context, so root-relative URLs like
// `/_astro/foo.png` or `/blog/bar/` must point at the real domain.
function absolutizeUrls(html, site) {
	const toAbsolute = (url) => (url.startsWith('/') && !url.startsWith('//') ? new URL(url, site).href : url);
	return html
		.replace(/\b(src|href|poster)="([^"]*)"/g, (_, attr, url) => `${attr}="${toAbsolute(url)}"`)
		.replace(/\bsrcset="([^"]*)"/g, (_, set) =>
			`srcset="${set
				.split(',')
				.map((candidate) => {
					const [url, ...descriptor] = candidate.trim().split(/\s+/);
					return [toAbsolute(url), ...descriptor].join(' ');
				})
				.join(', ')}"`,
		);
}

export async function GET(context) {
	const posts = await getPublishedPosts();
	// Rendering through the container runs the same markdown pipeline as the
	// post pages, so optimized images resolve to their built URLs.
	const container = await AstroContainer.create();

	const items = await Promise.all(
		posts.map(async (post) => {
			const { Content } = await render(post);
			const html = await container.renderToString(Content);
			return {
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.pubDate,
				link: `/blog/${post.id}/`,
				content: absolutizeUrls(html, context.site),
				customData: `<dc:creator>${AUTHOR_NAME}</dc:creator>`,
			};
		}),
	);

	const feedUrl = new URL('rss.xml', context.site).href;
	const lastBuildDate = new Date(
		Math.max(...posts.map((post) => (post.data.updatedDate ?? post.data.pubDate).valueOf())),
	).toUTCString();

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		xmlns: {
			atom: 'http://www.w3.org/2005/Atom',
			dc: 'http://purl.org/dc/elements/1.1/',
		},
		customData: [
			`<atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>`,
			'<language>en</language>',
			`<lastBuildDate>${lastBuildDate}</lastBuildDate>`,
		].join(''),
		items,
	});
}
