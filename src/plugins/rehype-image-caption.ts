import type { Element, Root } from 'hast';
import { visit } from 'unist-util-visit';

// Lets a markdown image opt into a fixed width and a visible caption by
// piping extra info into the alt text: `![caption|width](src)`. Plain
// `![caption](src)` still gets wrapped in a figure/figcaption so the
// caption is actually visible (alt text alone is accessibility-only).
// Must run before Astro's built-in markdown image optimizer so the width
// we set here is honored when it resizes the source image.
export function rehypeImageCaption() {
	return (tree: Root) => {
		visit(tree, 'element', (node: Element, index, parent) => {
			if (node.tagName !== 'img' || index == null || !parent) return;

			const alt = typeof node.properties.alt === 'string' ? node.properties.alt : '';
			const match = alt.match(/^(.*)\|(\d+)$/);
			const caption = (match ? match[1] : alt).trim();

			if (match) {
				node.properties.alt = caption;
				node.properties.width = Number(match[2]);
			}

			if (!caption) return;

			const figure: Element = {
				type: 'element',
				tagName: 'figure',
				properties: {},
				children: [
					node,
					{
						type: 'element',
						tagName: 'figcaption',
						properties: {},
						children: [{ type: 'text', value: caption }],
					},
				],
			};
			parent.children[index] = figure;
		});
	};
}
