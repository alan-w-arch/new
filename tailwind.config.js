/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./JS/**/*.js"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#12D2FF',
      'white':'#ffffff',
      'dull': '#F5F5F5',
      'black': '#000000',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#707070',
      'gray-light': '#d3dce6',
      'bunting': {
          '50': '#edf6ff',
          '100': '#d6eaff',
          '200': '#b6dbff',
          '300': '#84c7ff',
          '400': '#4ba7ff',
          '500': '#2181ff',
          '600': '#0a5eff',
          '700': '#0347f2',
          '800': '#0a39c3',
          '900': '#0f3699',
          '950': '#0a142c',
        },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

