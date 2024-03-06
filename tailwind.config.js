/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#800080",
        secondary: "#ddc22e",
        accent: " #2ab5b2",
  
        error: "#e71348",
        success: " #89c13e",
        warning: "#f9b73f",
        info: "#4ad5e2",
  
        textWhite: "#fff",
        textGrey: " rgba(255, 255, 255, 0.7)",
        textSilver: " rgba(255, 255, 255, 0.5)",
  
        background: "#161c28",
        background_dark: "#0d131e",
        background_dark2: "#1f2431",
      },
    },
  },
  plugins: [],
}