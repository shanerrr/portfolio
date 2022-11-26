/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)"],
      handwriting: ["var(--font-dancing)"],
    },
    colors: {
      navygreen: "#0F2027",
      black: "#000000",
      yellow: "#F6E8AA",
      transparent: "transparent",
    },
  },
  plugins: [],
};
