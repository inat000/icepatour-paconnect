/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // App Router directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Components
    './styles/**/*.{css}', // Styles folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

