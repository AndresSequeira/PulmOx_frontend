import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#006CFF",
          white: "#FFFFFF",
          ink: "#081323",
          mist: "#F4F8FF",
          line: "#DCE9FF",
        },
      },
      boxShadow: {
        soft: "0 22px 70px rgba(0, 108, 255, 0.14)",
      },
    },
  },
  plugins: [],
} satisfies Config;
