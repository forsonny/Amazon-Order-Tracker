/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--kt-primary)',
          active: 'var(--kt-primary-active)',
          light: 'var(--kt-primary-light)',
          inverse: 'var(--kt-primary-inverse)'
        },
      },
    },
  },
  plugins: [],
}
