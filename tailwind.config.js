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
      od: "900px",
      // => @media (min-width: 640px) { ... }

      text: { max: "800px" },
    },
    extend: {},
  },
  plugins: [],
}
