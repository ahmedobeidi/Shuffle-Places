// document.addEventListener("DOMContentLoaded", () => {
//   const randomButton = document.getElementById("randomButton");

//   randomButton.addEventListener("click", () => {
//     //setTimeout pour attendre que le DOM soit à jour suite à l'interaction
//     setTimeout(() => {
//       for (let i = 0; i < theList.length; i = +1) {
//         const chair = document.getElementById(i + 1);

//         // condition si c'est une chaise et non vide
//         if (chair && chair.textContent.trim() !== "") {
//           // créer un span qui contiendra le texte de l'utilisateur pour l'animation
//           const textNode = document.createElement("span");
//           textNode.textContent = chair.textContent;
//           // supp tout contenu existant dans les chaises et ajoute le texte

//           //    on récupère le texte ajouter par l'utilisateur pour le mettre dans les span
//           chair.textContent = "";
//           chair.appendChild(textNode);

//           // Opacité de base à 0
//           textNode.style.opacity = "0";

//           // textNode pour que cela s'applique seulement au texte l'animation
//           textNode.classList.add("animate-fadeIn");

//           // l'opacité reste
//           textNode.addEventListener("animationend", () => {
//             textNode.style.opacity = "1";
//           });
//         }
//       }
//     }, 0);
//   });
// });