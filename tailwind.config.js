/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: "Inter, sans-serif",
      backgroundImage: {
        background: "url('./src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
