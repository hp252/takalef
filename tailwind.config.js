/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/index.html", "src/our-offices.html", "src/ask-us.html"],
  theme: {
    extend: {
      fontFamily:{
        cairo:["Cairo", "sans-serif"]
      },
    },
    container: {
      center:true,
      padding:"1rem",
      screens:{
        lg:"1124px",
        xl:"1124px",
        "2xl":"1124px",
      },
    },
  },
  plugins: [],
}
