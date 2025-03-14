import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      title: "  clamp(2rem, 1.2857rem + 3.5714vw, 4.5rem)",
      highlight: "clamp(1rem, 0.5714rem + 0.8929vw, 1.375rem)",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        dark: "#1f1f1f",
        primary: "#566ec1",
        light: "#fbfbfb",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
