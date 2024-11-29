/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'fond': "#D3D1C2",
        'blue-vert': "#019387",
        'blue-vert-fonce': '#003632',
        'blue-fonce': '#011225',
        'clair': '#1DDDBA'
        
      },
      fontFamily: {
        "Karantina": ['Karantina', 'Roboto'],
        "Kdam": ["kdam Thmor Pro", 'Roboto'],
      },
      borderRadius: {
<<<<<<< HEAD
        "header-lg": "50px"
=======
        "header-lg": "50px",
        "students": "30px",
        "random-button": "50px"
>>>>>>> cb88d81f77ff6edc4b7915523513121b3e6e58c7
      }
    },
  },
  plugins: [],
}
