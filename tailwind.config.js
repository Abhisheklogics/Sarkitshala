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
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            color:'white',
            visibility: "hidden",
           
          },
          '25%':{
            color:'white',
            fontWieght:'bold'
          },
          '50%':{
            color:'black',
            fontWieght:'bold'
          },
          '75%':{
            color:'blue',
            fontWieght:'bold'
          },
          "100%": {
            width: "100%",
            color:'white'
            
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(10) infinite alternate, blink .7s infinite"
      }
    },
  },
  plugins: [],
};
