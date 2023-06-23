/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'rw': ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'bg': "url('/assets/')",
      },
      colors: {
        'primary': '#0847A8',
        'secondary': '#70AC2A'
      },
      screens: {
        'xs': '280px',
        'ms': '320px',
        'ls': '400px',
        'xls': '500px',
        'xll': '900px',
      },
    },
  },
  plugins: [],
}
