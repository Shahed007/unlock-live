import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1440px",
      },
      container: {
        center: true,
      },
      fontFamily: {
        playfair_display: '"Playfair Display", serif',
        poppins: '"Poppins", sans-serif',
        openSans: '"Open Sans", sans-serif',
      },
      colors: {
        primary_color: "#270A05",
        secondary_color: "#86371C",
        text_color1: "#53565C",
        text_color2: "#031811B2",
        text_color3: "#031811",
      },
    },
  },
  plugins: [],
};
export default config;
