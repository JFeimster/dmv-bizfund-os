import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080807",
        coal: "#11100d",
        panel: "#17150f",
        line: "rgba(212,175,55,0.22)",
        gold: "#d4af37",
        amber: "#f2c14e",
        cream: "#f7f1df",
        muted: "#bfb6a0"
      },
      boxShadow: {
        glow: "0 0 40px rgba(212,175,55,0.12)"
      },
      borderRadius: {
        luxe: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
