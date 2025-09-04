/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx,mdx}',
    './data/**/*.{json,mdx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};