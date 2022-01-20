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
      }
    },
  },
  plugins: [],
}
