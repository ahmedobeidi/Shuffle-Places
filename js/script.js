
let stuendts = [];
let theList = [];
let randomList = [];

const inputText = document.querySelector("#textinput");
const participantsList1 = document.getElementById("participants-list-1");
const participantsList2 = document.getElementById("participants-list-2");
const participantsList3 = document.getElementById("participants-list-3");


const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", handleRandomButton);

const addButton = document.querySelector("#addButton")
addButton.addEventListener("click",handleOnClickAdd) ;
function handleOnClickAdd() {
    
    let value = inputText.value;
    value = value.toLowerCase();
    value = value.charAt(0).toUpperCase() + value.slice(1);
    
    for(let i = 0; i < theList.length; i++) {
        stuendts[i] = theList[i];
    }
    
    if (value == "") return;
    if (value.length > 9) return;

    if (stuendts.length < 5) {
        addToList(participantsList1, value);
        inputText.value = "";
    }
    else if (stuendts.length < 10) {
        
        addToList(participantsList2, value);
        inputText.value = "";
    }
    else if (stuendts.length < 15) {
        addToList(participantsList3, value);
        inputText.value = "";
    }

}

function addToList(list, value) {

    list.classList.remove("hidden");

    const listItem = document.createElement("li");
    const textSpan = document.createElement("p");

    textSpan.textContent = value;
    textSpan.classList.add('w-full');

    listItem.classList.add("flex");
    listItem.classList.add("flex-row");

    listItem.appendChild(textSpan);

    list.appendChild(listItem);
    stuendts.push(value);
    theList.push(value);
    console.log(stuendts.length);
}

function handleRandomButton() {

  for(let i = 0; i < theList.length; i++) {
    stuendts[i] = theList[i];
  }
  
  while (true) {
    const random = Math.floor(Math.random() * stuendts.length);

    randomList.push(stuendts[random]);

    stuendts.splice(random, 1);

    if (stuendts.length === 0) break;
  }

  for (let i = 0; i < randomList.length; i++) {
    const chair = document.getElementById(`${i + 1}`);
    chair.textContent = randomList[i];
  }
  randomList = [];
}

//"Ahmed", "Ali", "Clément", "Hamza", "Jérémy", "Karl", "Mathias", "Marion", "Mohand", "Nadir", "Naïm", "Naïm D.", "Simon", "Sirène", "Elodie"
