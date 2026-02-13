// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import vue from "@astrojs/vue";

import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://astro-build-tips-abrahamgalue.netlify.app",
    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [mdx(), react(), vue(), svelte(), sitemap()],
});