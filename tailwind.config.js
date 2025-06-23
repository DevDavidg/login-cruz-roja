/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "#d62d20",
          "red-secondary": "#b91c1c",
        },
        accent: {
          blue: "#1e40af",
        },
        neutral: {
          "light-gray": "#f8fafc",
          "medium-gray": "#64748b",
          "dark-gray": "#0f172a",
        },
        status: {
          "success-green": "#059669",
          "warning-orange": "#ea580c",
        },
      },
      fontFamily: {
        inter: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #d62d20 0%, #b91c1c 100%)",
        "gradient-hero":
          "linear-gradient(135deg, rgba(214, 45, 32, 0.95) 0%, rgba(185, 28, 28, 0.95) 100%)",
      },
    },
  },
  plugins: [],
};
