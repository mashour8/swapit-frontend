/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "15px": "15px",
      },
      // fontFamily: {
      //   // regularSofia: "Regular",
      //   // blackSofia: "Black",
      //   // boldSofia: "Bold",
      //   // extraLightSofia: "ExtraLight",
      //   // lightSofia: "Light",
      //   // mediumSofia: "Medium",
      //   // semiBoldSofia: "Semi-Bold",
      //   // ultraLightSofia: "UltraLight",
      //   // sans: ["sofia-pro", ...defaultTheme.fontFamily.sans],
      //   // sans: ["Helvetica", "Arial", "sans-serif"],
      // },

      fontFamily: {
        sofiaPro: ["SofiaPro", "sans-serif"],
      },

      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
  },
  plugins: [],
};
