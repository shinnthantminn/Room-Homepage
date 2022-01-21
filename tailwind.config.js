module.exports = {
  content: ['./dist/*.html',"./dist/**/*.css"],
  theme: {
    extend: {
      colors:{
        "darkGray":{
          100:"hsl(0, 0%, 63%)",
          200:"hsl(0, 0%, 27%)"
        },
        "Black":"hsl(0, 0%, 0%)",
        "White":"hsl(0, 0%, 100%)",
      },
      fontFamily:{
        "Spartan":"'Spartan', sans-serif"
      },
      spacing:{
        "0.9":"0.190rem",
        "w-helf":"59%",
        "160":"170%",
        "170":"-170px"
      },
      letterSpacing:{
        "mama":"0.8em"
      },
      screens:{
        "small":"376px"
      },
      backgroundImage:{
        "hero1":"url('./desktop-image-hero-1.jpg')",
        "hero2":"url('./desktop-image-hero-2.jpg')",
        "hero3":"url('./desktop-image-hero-3.jpg')",

        "mobile1":"url('./mobile-image-hero-1.jpg')",
        "mobile2":"url('./mobile-image-hero-2.jpg')",
        "mobile3":"url('./mobile-image-hero-3.jpg')",
      }
    },
  },
  plugins: [],
}
