/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1200px",
        custom: {
          raw: "(max-height: 700px)",
        },
        // => @media (min-width: 992px) { ... }
      },

      backgroundImage: {
        pie: "conic-gradient(#EE8484 0% 14%, #F6DC7D 14% 45%,#98D89E 45% 100%)",
      },
      colors: {
        primary: { 100: "#F5F5F5" },
        secondarytext: "#858585",
        link: "#346BD4",
        card1: "#DDEFE0",
        card2: "#F4ECDD",
        card3: "#EFDADA",
        card4: "#DEE0EF",
        cardheading: "#666",
        cardsub: "#999",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
      },
      spacing: {
        36: "36.75rem",
        card: "25rem",
      },
      margin: {
        responsive: "calc(1rem + 10vh)",
      },
      gridTemplateColumns: {
        // added new 4 column grid as new4
        new4: "repeat(4, minmax(200px, 250px))",
      },
    },
  },
  plugins: [],
};
