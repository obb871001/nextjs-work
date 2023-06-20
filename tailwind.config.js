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
      colors: {
        "main-color": "#FAAB20",
        "second-color": "#FFFFFF",
        "third-color": "#323C3C",
        "rightsidebar-color": "rgb(255 255 255 / 40%)",
        "add-favorite-btn": "rgb(17 17 17 / 40%)",
        "date-color": "#eaeaea",
        "extra-black": "#FAAB20",
        "common-border": "#FAAB20",
        "light-border": "#ffdfa5",
        "light-text": "#8fa8aa",
        "dark-gray-text": "#646464",
        "game-background": "#d2d2d2",
        "gamelist-background": "#e6e6e6",
        "menu-background": "#f8d8a3",
        "promotion-icon-background": "#ffeaf1",
        "refer-icon-background": "#fff5e9",
        "menu-background-hover": "#fceed6",
        "footer-bg": "#E3E3E3",
        "input-color": "#efefef",
        "input-border-color": "#bbbbbb",
        "input-border-light-color": "#575757",
        "gold-text": "#ffc700",
        "light-white": "#ffffff",
        "pc-bg": "#FFFFFF",
        "coin-bg": "#E7E7E7",
        "button-base-color": "#ffffff",
        "gray-button-bg": "#bfbfbf",
        "light-main-bg": "#ffe2b0",
        "light-gray": "#dedede",
        "grey-text": "#5f5f5f",
        "dark-grey-text": "#2d2d2d",
        "light-yellow-text": "#ffea73",
        "game-background-light": "#f2f2f2",
        "platform-bg": "#e3e3e3",
        "game-bottomText": "#FF9800",
        "main-input-border": "#FAAB20",
        "icon-border": "#a5b9bb",
        "icon-background": "#b2b2b2",
        "single-bg": "#5B5B5B",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-1deg)'
          },
          '50%': {
            transform: 'rotate(1deg)'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
