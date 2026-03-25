/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lexend: ['Lexend Zetta', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#0a72b9',
          'blue-light': '#1AB9FF',
          dark: '#0d1117',
          gray: '#4c4c4c',
          'gray-light': '#62748e',
        },
      },
      boxShadow: {
        card: '0px 0px 27px 0px rgba(10, 114, 185, 0.14)',
        'card-lg': '0px 0px 42.6px 0px rgba(10, 114, 185, 0.14)',
        video: '0px 4px 32px 0px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
