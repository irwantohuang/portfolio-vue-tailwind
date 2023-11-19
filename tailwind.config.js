/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        'primary-100': '#0077C2',
        'primary-200': '#59a5f5',
        'primary-300': '#c8ffff',
        'accent-100': '#00BFFF',
        'accent-200': '#00619a',
        'text-100': '#333333',
        'text-200': '#5c5c5c',
        'dark-400': '#94a3b8',
        'bg-100': '#FFFFFF',
        'bg-200': '#f5f5f5',
        'bg-300': '#cccccc',
      },
      screens: {
        '2xl': '1320px'
      },

      // fontSize: {
      //   'title': '1.563rem', // 2xl
      //   'title-on-lg': '1.953rem', // 3xl
      //   'sub': '1.953rem', // 3xl
      //   'sub-on-lg': '2.441rem', // 4xl
      //   'desc': '1rem', // base
      //   'desc-on-lg': '1.25rem' // xl
      // },

    },
  },
  plugins: [],
}
