/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-bg': '#70eec2',
      },
      dropShadow: {
        "header-shadow":"rgba(0, 0, 0, 0.3) 0px 19px 38px",
      }
    },
  },
  plugins: [],
}