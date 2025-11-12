/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f4f6",
          100: "#dce1e9",
          200: "#c3ccd8",
          300: "#aab7c6",
          400: "#8090a4",
          500: "#576982",
          600: "#394d68",
          700: "#2c3b50",
          800: "#1f2938",
          900: "#121722",
        },
        secondary: {
          50: "#ebf7f5",
          100: "#cef0eb",
          200: "#a5e0d7",
          300: "#7cd0c3",
          400: "#52c0af",
          500: "#3ba394",
          600: "#2f8277",
          700: "#236259",
          800: "#16413b",
          900: "#0a211d",
        },
        accent: {
          50: "#f3f9ec",
          100: "#e0f1d0",
          200: "#c7e6b6",
          300: "#addb9b",
          400: "#9bcb76",
          500: "#7fb05c",
          600: "#648845",
          700: "#4a6132",
          800: "#30391f",
          900: "#171f0e",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
