/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      od: "850px",
      // => @media (min-width: 640px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
