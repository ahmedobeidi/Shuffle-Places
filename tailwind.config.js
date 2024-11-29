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
        'clair': '#1DDDBA',
        'color-home': '#6C6767'

        
      },
      fontFamily: {
        "Karantina": ['Karantina', 'Roboto'],
        "Kdam": ["kdam Thmor Pro", 'Roboto'],
      },
      borderRadius: {
        "header-lg": "50px",
        "students": "30px",
        "random-button": "50px"
      },
      backgroundImage: {
        'bg-home': "url('/Images/istockphoto-1467601512-612x612.jpg')",
      }
    },
  },
  plugins: [],
}
