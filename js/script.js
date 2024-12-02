
let stuendts = [];
let randomList;
const inputText = document.querySelector("#textinput");

initialize();


const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", handleRandomButton);

const addButton = document.querySelector("#addButton")
addButton.addEventListener("click",handleOnClickAdd) ;
  function handleOnClickAdd() {

    const valeur = inputText.value;
    stuendts.push(valeur)

    const participantsList = document.getElementById("participants-list")

    const listItems = document.createElement("li");


        listItems.textContent = valeur;
        participantsList.appendChild(listItems)


        addButton.value = "";
        console.log(stuendts) 
  }

function handleRandomButton() {
  while (true) {
    const random = Math.floor(Math.random() * stuendts.length);

    randomList.push(stuendts[random]);

    stuendts.splice(random, 1);

    if (stuendts.length === 0) break;
  }

  setPlaces();
  initialize();
}

function initialize() {
  stuendts = [];

  randomList = [];
}

function setPlaces() {
  for (let i = 0; i < randomList.length; i++) {
    const chair = document.getElementById(`${i + 1}`);
    chair.textContent = randomList[i];
  }
}

//"Ahmed", "Ali", "Clément", "Hamza", "Jérémy", "Karl", "Mathias", "Marion", "Mohand", "Nadir", "Naïm", "Naïm D.", "Simon", "Sirène", "Elodie"
