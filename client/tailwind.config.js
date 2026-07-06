/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef4ff",
          100: "#dce8ff",
          200: "#b8d1ff",
          300: "#8ab1ff",
          400: "#5a8bff",
          500: "#3366ff", // core brand blue
          600: "#254edb",
          700: "#1c3cad",
          800: "#1a3389",
          900: "#1a2f6e",
          950: "#111c42",
        },
        accent: {
          indigo: "#6366f1",
          emerald: "#10b981",
          rose: "#f43f5e",
          amber: "#f59e0b",
        },
        surface: {
          light: "#ffffff",
          subtle: "#f8fafc",
          dark: "#0b1120",
          darkCard: "#111827",
          darkElevated: "#1a2234",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Cal Sans", "Inter", "sans-serif"],
      },
      animation: {
        "ticker-scroll": "ticker-scroll 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "gradient-shift": "gradient-shift 8s ease infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        "ticker-scroll": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(51, 102, 255, 0.5)",
        card: "0 2px 20px -4px rgba(0,0,0,0.08)",
        "card-dark": "0 2px 20px -4px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
