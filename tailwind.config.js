/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
          light: "var(--primary-light)",
        },

        teal: {
          DEFAULT: "var(--teal)",
          light: "var(--teal-light)",
        },

        bg: "var(--bg)",
        card: "var(--card)",
        border: "var(--border)",

        text: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)",
          light: "var(--text-light)",
        },

        success: {
          DEFAULT: "var(--success)",
          bg: "var(--success-bg)",
        },

        warning: {
          DEFAULT: "var(--warning)",
          bg: "var(--warning-bg)",
        },

        error: {
          DEFAULT: "var(--error)",
          bg: "var(--error-bg)",
        },
      },
    },
  },

  plugins: [],
};