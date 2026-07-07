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
          500: "#3366ff", // core brand blue — the ONLY brand hue
          600: "#254edb",
          700: "#1c3cad",
          800: "#1a3389",
          900: "#1a2f6e",
          950: "#111c42",
        },
        accent: {
          amber: "#f59e0b", // reserved for warnings/risk only
          emerald: "#10b981", // reserved for positive/gains only
          rose: "#f43f5e", // reserved for negative/losses only
        },
        surface: {
          light: "#ffffff",
          subtle: "#f8fafc",
          dark: "#0a0e17",
          darkCard: "#10141f",
          darkElevated: "#171c2a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"], // headings & numbers only
      },
      animation: {
        "ticker-scroll": "ticker-scroll 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
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
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(51, 102, 255, 0.45)",
        card: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(15,23,42,0.06)",
        "card-dark": "0 1px 3px rgba(0,0,0,0.3), 0 8px 24px -8px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};