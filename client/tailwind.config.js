/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
      },
    },
    extend: {
      spacing: {
        "2xs": "370px",
        md: "768px",
      },
      maxWidth: {
        "2xs": "370px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
