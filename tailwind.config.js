/** @type {import('tailwindcss').Config} */
// Use CSS custom properties (defined in src/index.css) as Tailwind theme colors
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // map semantic names to CSS variables so components can use `text-primary`, `bg-accent`, etc.
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        accentLight: 'var(--color-accent-light)',
        secondary: 'var(--color-secondary)',
        // fallbacks kept for safety
        dark: 'var(--color-dark, #0f172a)',
        light: 'var(--color-light, #f8fafc)'
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        // use the primary color (navy) for glow instead of the previous teal
        glow: "0 0 25px -5px rgba(13,30,76,0.4)",
      },
    },
  },
  plugins: [],
};
