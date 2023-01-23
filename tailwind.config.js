/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ["Playfair Display"],
        Fira: ["Fira Sans"],
      },
      colors: {
        "regal-black": "#3B322D",
        "regal-black-2": "#251D1A",
        "regal-white": "#EFE7E2",
        "regal-yellow": "#FF6E40",
        "regal-grey": "#B7AAA2",
      },
      fontSize: {
        nonn: "0.8rem",
      },
      maxWidth: {
        1220: "1220px",
      },
      spacing: {
        1180: "1180px",
        1000: "1000px",
        394: "394px",
        650: "801px",
        580: "580px",
        70: "70px",
        150: "150px",
        480: "650px",
        650: "480px",
        554: "54rem",
        557: "47rem",
      },
    },
  },
  plugins: [],
};
