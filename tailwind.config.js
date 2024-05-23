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
      colors: {
        "blackHeader" : "#211F1E",
        "whiteDetail" : "#f9f8f6",
        "background": "#e5e6e7",
        "grayDetail" : "#cacaca",
        "blueDetail": "#0075FF",
        "blackTitle": "#020000",
        "secondaryText": "#535254",
      },
    },
  },
  plugins: [],
};
