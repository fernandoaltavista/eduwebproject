/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './app/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // project-wide palette
        'brand-dark': '#222830',
        'brand-light': '#b0b5b5',
        'brand-beige': '#ecbd8b',
        'brand-orange': '#f4841a',
        'brand-teal': '#004c56',
      },
    },
  },
  plugins: [],
};
