import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Oleo Script", "system-ui"],
        primary: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.4) 2px, transparent 5px, transparent 100px)",
      },
    },
  },
  plugins: [],
};
export default config;
