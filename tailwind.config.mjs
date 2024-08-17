// @ts-nocheck
/** @type {import('tailwindcss').Config} */
import config from "ssg-theme-astro/tailwind"
export default {
  ...config, ...{
    // content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './theme/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: { 
        animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-medium': 'spin 1.5s linear infinite',
        'spin-fast': 'spin 0.75s linear infinite',
        },
        scrollMargin: {
        '50': '50px',
        '100': '100px',
        '150': '150px',
        '200': '200px',
        '250': '250px',
        },  
        textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        middle: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        all: '1px 1px 2px var(--tw-shadow-color), -1px -1px 2px var(--tw-shadow-color), 1px -1px 2px var(--tw-shadow-color), -1px 1px 2px var(--tw-shadow-color)',
        }
      },
    },
    plugins: [],
  }
}