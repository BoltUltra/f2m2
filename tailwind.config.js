/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html", "product.html"],
  theme: {
    screens: {
      sm: "420px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        krub: ["Krub", "sans-serif"],
        metal: ["Metal", "sans-serif"],
        lakki: ["Lakki Reddy", "sans-serif"],
      },
      colors: {
        primary: "#FBAC13",
        black: "#171717",
        green: "#077B5F",
        "gray-70": "#525252",
        "gray-50": "#8D8D8D",
        "gray-20": "#E0E0E0",
        success: "#14F6A5",
        error: "#FF3023",
      },
    },
  },
  plugins: [],
};
