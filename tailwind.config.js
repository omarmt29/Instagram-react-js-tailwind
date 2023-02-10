/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
    require('tw-elements/dist/plugin')
  ],  
}