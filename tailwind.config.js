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
        "lg": "30px"
      }
    },
  },
  plugins: [],
}

