/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: "#99181F",
        tertiary: "#F6AF3B",
        tertiaryDark: "#F56A3F",
        quaternary: "#12a7a7",
      },
    },
  },
  plugins: [],
};
