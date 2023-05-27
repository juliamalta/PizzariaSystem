/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pizza': "url('/img/malta.jpg')",
   
      },

      colors:{
        pizzab :{
     100:'#6E41E2',
     200:"#F1F1F1"

        }
      },




    },
  },
  plugins: [],
}

