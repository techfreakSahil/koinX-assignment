/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nav: {
          primary: "#0F1629",
          button: "#2870EA",
        },
        section: {
          head: "#0B1426",
          rank: "#808A9D",
          inc: "#14B079",
          incbg: "#EBF9F4",
          highlight: "#0052FE",
          secondary: "#111827",
          card: "#26375F",
        },
      },
    },
  },
  plugins: [],
};
