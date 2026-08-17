import { getCollection } from 'astro:content';

/**
 * All posts, newest first. Drafts are included while running `npm run dev`
 * and dropped from production builds.
 */
export async function getPublishedPosts() {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
