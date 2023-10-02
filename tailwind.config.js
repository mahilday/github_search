/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gitBlue: "#0079FF",
        greyBlue: "#697C9A",
        darkBlue: "#4B6A9B",
        gitDarkBlue: "#2B3442",
        lightGrey: "#F6F8FF",
        offWhite: "#FEFEFE",
        gitDark: "#141D2F",
        typographyDark: "#222731",
        secondaryDarkBlue: "#1E2A47",
      },
    },
  },
  plugins: [],
};
