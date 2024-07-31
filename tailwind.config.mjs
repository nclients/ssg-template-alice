// @ts-nocheck
/** @type {import('tailwindcss').Config} */
import config from "ssg-theme-astro/tailwind"
export default {
  ...config, ...{
    // content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './theme/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {},
    },
    plugins: [],
  }
}