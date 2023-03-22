/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundPosition: {
        fishmd: "25vw bottom,50% 50%",
        fishlg: "46vw 0px,50% 50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
