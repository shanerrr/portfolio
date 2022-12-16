/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.563rem',
        md: '3.125rem',
        lg: '6.25rem',
        xl: '9.375rem',
      },
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      handwriting: ['Dancing Script', 'cursive'],
    },
    colors: {
      navygreen: '#0F2027',
      black: '#000000',
      yellow: '#F6E8AA',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    animation: {
      backgroundPan: 'backgroundPan 1s linear infinite',
    },
    keyframes: {
      backgroundPan: {
        '0%': { backgroundPosition: '0% center' },
        '100%': { backgroundPosition: '-200% center' },
      },
    },
    backgroundImage: {
      'main-pattern': "url('/images/texture.png')",
    },
  },
  plugins: [],
};
