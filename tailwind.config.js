/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBgImg: "url('/images/heroImg.jpeg')",
      },
      //   backgroundImage: {
      //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //     "gradient-conic":
      //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      //   },
    },
    colors: {
      black: "#030303",
      darkgrey: "#969696",
      turquoise: "#00e5d1",
      white: "#fff",
      royalblue: "#2577f9",
      herobackgroundcolor: "#1a1940",
    },
  },
  plugins: [],
};
