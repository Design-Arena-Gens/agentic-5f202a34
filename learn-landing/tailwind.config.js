/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          50: "#f4f4f5",
          100: "#e4e4e7",
          200: "#d4d4d8",
          300: "#a1a1aa",
          400: "#71717a",
          500: "#52525b",
          600: "#3f3f46",
          700: "#27272a",
          800: "#18181b",
          900: "#111827",
        },
        emerald: {
          100: "#e6f7f1",
          200: "#ccefe3",
          300: "#99dfc6",
          400: "#66cfaa",
          500: "#1f8f6b",
          600: "#187158",
        },
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(17,24,39,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-light": "120px 120px",
      },
      boxShadow: {
        "soft-ring":
          "0 0 0 1px rgba(15, 23, 42, 0.04), 0 12px 40px -18px rgba(15, 23, 42, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        blurPulse: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.08)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 14s ease infinite",
        "blur-pulse": "blurPulse 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
