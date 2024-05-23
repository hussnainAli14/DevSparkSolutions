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
        buttonGradient: " linear-gradient(90deg, #02ade5 10%, #0063ff );",

        rightGradient:
          "radial-gradient(ellipse, rgba(0, 229, 209, .2),rgba(0, 229, 209, .1),#030303)",
        bodyGradient:
          " radial-gradient(circle at left in hsl longer hue, red 90%, blue, green 100%)",
        featureGradient:
          "linear-gradient(to bottom ,black 0%, black 50%,royalblue,turquoise 99%)",
        horizontalGradient:
          "linear-gradient(to right ,royalblue 0%,turquoise 99%)",
        pricingCardGradient: " linear-gradient(128deg, #0063ff 22%, #02ade5);",
        formGradient: "linear-gradient(#191919, #030303);",
      },
      //   backgroundImage: {
      //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //     "gradient-conic":
      //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      //   },
    },
    colors: {
      black: "#030303",
      lightBlack: "#191919",
      lightGray: "rgba(34, 34, 34, .56) ",
      darkgrey: "#969696",
      turquoise: "#00e5d1",
      white: "#fff",
      royalblue: "#2577f9",
      herobackgroundcolor: "#1a1940",
      backgroundPatternRight: "rgba(37, 173, 249, .1)",
      backgroundPatternLeft: "rgba(0, 229, 209, .5)",
      transparent: "transparent",
    },
  },
  plugins: [],
};
