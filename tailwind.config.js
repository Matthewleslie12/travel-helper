/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        facebookBlue: "#4267B2",
        mainBlue: "#008FA0",
        hoverBlue: "#007887",
        iconBlue: "#00a6ba",
        grayText: "#A2A2A2",
        headerText: "#383838",
        blackText: "#121212",
        navBoarder: "#D9D9D9",
        darkGrayText: "#636363",
      },
    },
  },
  plugins: [],
};
