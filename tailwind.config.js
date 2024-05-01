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
        rightGradient:
          "radial-gradient(ellipse, rgba(0, 229, 209, .2),rgba(0, 229, 209, .1),#030303)",
        bodyGradient:
          " radial-gradient(circle at left in hsl longer hue, red 90%, blue, green 100%)",
        textGradient: "linear-gradient(158deg, #00e5d1 3%, #2577f9 99%);",
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
      backgroundPatternRight: "rgba(37, 173, 249, .1)",
      backgroundPatternLeft: "rgba(0, 229, 209, .5)",
    },
  },
  plugins: [],
};
