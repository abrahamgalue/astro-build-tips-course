import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const posts = await getCollection("tips");
	return rss({
		title: "Astro Build Tips",
		description: "My First Page",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			image: post.data.image,
			tags: post.data.tags,
			link: `/posts/${post.id}/`,
		})),
	});
}
