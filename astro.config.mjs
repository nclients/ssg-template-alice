import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  // site: '', // Opening this will generate sitemap.xml and robots.txt
  videoUrl:"",
  videoThumbnailUrl:"",
  videoTitle:"",
  videoDesc:"",
  integrations: [tailwind(), react(),mdx()],
  srcDir: './website'
});
