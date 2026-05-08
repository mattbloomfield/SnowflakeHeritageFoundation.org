/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        parchment: '#F5F0E8',
        charcoal: '#2C2416',
        terracotta: '#8B4A2F',
        gold: '#9A7B3A',
        tan: '#C9B99A',
        dark: '#1E1610',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"EB Garamond"', 'serif'],
        label: ['"Cinzel"', 'serif'],
      },
      maxWidth: {
        content: '900px',
      },
    },
  },
  plugins: [],
};
