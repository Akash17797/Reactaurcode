/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",   // darkmode mei hme do properties milti hai class and media. by default system ke basis pe chalta hai tailwind css toh hmne use karke class ke basis pe lar diya
  theme: {
    extend: {},
  },
  plugins: [],
}

