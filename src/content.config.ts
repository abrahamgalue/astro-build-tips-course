// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";
// Define a `loader` and `schema` for each collection
const tips = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/tips" }),
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		image: z.string(),
		tags: z.array(z.string()),
	}),
});
// Export a single `collections` object to register your collection(s)
export const collections = { tips };
