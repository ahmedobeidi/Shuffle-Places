/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js", // tous les fichiers JS dans le dossier 
  ],
  
  theme: {
    extend: {
      colors: {
        'fond': "#D3D1C2",
        'blue-vert': "#019387",
        'blue-vert-fonce': '#003632',
        'blue-fonce': '#011225',
        'clair': '#1DDDBA',
        'color-home': '#6C6767',
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
        "Chair-down": "url('../Images/Chair-down.png')",
        'Chair-left': "url('../Images/chair-left.png')",
        "Chair-up": "url('../Images/Chair-up.png')",
        "Rectangle": "url('../Images/Rectangle .png')",
        "Rectangle-col": "url('../Images/Rectangle-col.png')",
        "Rectangle-row": "url('../Images/Rectangle-row.png')",
        'bg-home': "url('../Images/istockphoto-1467601512-612x612.jpg')",
      },
      keyframes: {
        // Créer une animation plus tard : "fadeIn" et la déclencher après
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out',
      },
    },
  },
  plugins: [],
}