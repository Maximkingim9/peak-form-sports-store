/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FF5A1F",
        white: "#FFFFFF",
        red: "#EB2606",
        grayLight: "#C8C9CB",
        brandDark: "#0B1B33",
        gray: "#46494F",
        grayMuted: "#9D9EA2",
        grayOff: "#F2F5F9"
      }
    },
  },
  plugins: [],
};
