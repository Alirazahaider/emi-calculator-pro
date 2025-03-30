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
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0', transform: 'translateY(10px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
        shake: {
          '0%, 100%': {transform: 'translateX(0)'},
          '10%, 30%, 50%, 70%, 90%': {transform: 'translateX(-5px)'},
          '20%, 40%, 60%, 80%': {transform: 'translateX(5px)'},
        },
      },
    },
  },
  plugins: [],
};
export default config;
