// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";




// https://astro.build/config
export default defineConfig({
	site: "https://THonys07.github.io",
	base: "/andreas-portfolio/",
	vite: {
		server: {
			headers: {
				"Content-Type": "text/html; charset=utf-8",
			},
		},
		plugins: [tailwindcss()],
	},
	integrations: [react()],
});
