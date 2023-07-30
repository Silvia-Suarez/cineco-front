/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      colors: {
        blue: {
          principal: "#1C508D",
          secondary: "#0076FF",
          terciary: "#0D2748",
          quaterny: "#06162F",
        },
        gray: {
          principal: "#F6F6F6",
          secondary: "#4F627B",
        },
      },
    },
  },
  plugins: [require("tailwindcss")],
};
