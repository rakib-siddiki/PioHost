/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        behind: "url(./assets/navbar/background.png)",
        banner: "url(./assets/banner/banner.png)",
      },
      colors: {
        primary: "#002bb7",
        heading: "#000c35",
        subHeading: "#7d859f",
        borderColor: "#926bfa",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Rubik", "sans-serif"],
      },
      borderRadius: {
        5: "50px",
      },
      screens: {
        secondPortriait: "412px",
        Landscape2: "667px",
      },
      dropShadow:{
        custom: "1px 10px 63px -10px rgba(63,106,255,0.71)"

      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
