/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14b8a6", // teal
        accent: "#ec4899",  // pink
        dark: "#0f172a",
        light: "#f8fafc",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(20,184,166,0.4)",
      },
    },
  },
  plugins: [],
};
