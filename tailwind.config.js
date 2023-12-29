/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#FFFFFF",
      primary1: "#363738",
      secondary: "#F5F5F5",
      secondary1: "#FEFAF1",
      bg: "#FFFFFF",
      Text: "#FAFAFA",
      Text1: "#7D8184",
      Text2: "#000000",
      button: "#000000",
      secondary2: "#DB4444",
      button1: "#00FF66",
      button2: "#DB4444",
      hover_button: "#E07575",
      hover_button1: "#A0BCE0",
    },
  },
  plugins: [],
});
