import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  // site: 'https://www.example.com/',
  integrations: [tailwind(), react(),mdx()],
  srcDir: './website'
});
