
// Lists
let names = [];
let originalList = [];
let randomList = [];
let itemID = 0;

const inputText = document.getElementById("textinput");
const participantsList1 = document.getElementById("participants-list-1");
const participantsList2 = document.getElementById("participants-list-2");
const participantsList3 = document.getElementById("participants-list-3");

const addButton = document.querySelector("#addButton");
const randomButton = document.getElementById("randomButton");

addButton.addEventListener("click",handleAddButton) ;
randomButton.addEventListener("click", handleRandomButton);

function handleAddButton() {

    let value = inputText.value;
    value = value.toLowerCase();
    value = value.charAt(0).toUpperCase() + value.slice(1);
    
    for(let i = 0; i < originalList.length; i++) {
        names[i] = originalList[i];
    }
    
    if (value == "") return;
    if (value.length > 9) return;

    if (names.length < 5) {
      addToTheList(participantsList1, value);
    }
    else if (names.length < 10) {
      addToTheList(participantsList2, value);
    }
    else if (names.length < 15) {
      addToTheList(participantsList3, value);
    }
}

function addToTheList(participantsList, value) {

  participantsList.classList.remove("hidden");

  const listItem = document.createElement("li");
  const textSpan = document.createElement("span");
  const deleteSpan = document.createElement("span");

  listItem.classList.add("flex");
  listItem.classList.add("flex-row");

  textSpan.textContent = value;
  textSpan.classList.add('w-full');
  textSpan.classList.add('text-center');

  deleteSpan.textContent = "X";
  deleteSpan.classList.add('w-[30%]');
  deleteSpan.classList.add('text-blue-vert-fonce');

  deleteSpan.addEventListener("click", handleDeleteName);

  listItem.appendChild(textSpan);
  listItem.appendChild(deleteSpan);
  participantsList.appendChild(listItem);

  names.push(value);
  originalList.push(value);
  inputText.value = "";
}

function handleDeleteName(event) {
  let name = event.target.parentElement.textContent;
  name = name.slice(0, -1);
  const indexN = names.indexOf(name);
  const indexO = originalList.indexOf(name);
  const indexR = randomList.indexOf(name);

  names.splice(indexN, 1);
  originalList.splice(indexO, 1);
  randomList.splice(indexR, 1);

  const spans = document.querySelectorAll("span");
  spans.forEach((span) => {
    if (span.textContent === name) {
      event.target.parentElement.remove();
    }
  });
  
  for (let i = 0; i < 15; i++) {
    const chair = document.getElementById(`${i + 1}`);
    chair.textContent = "";
  }
  if (participantsList1.innerHTML.trim() == "") {
    participantsList1.classList.add("hidden");
  }
  else if (participantsList2.innerHTML.trim() == "") {
    participantsList2.classList.add("hidden");
  }
  else if (participantsList1.innerHTML.trim() == "") {
    participantsList3.classList.add("hidden");
  }
}

function handleRandomButton() {

  for(let i = 0; i < originalList.length; i++) {
    names[i] = originalList[i];
  }
  
  while (true) {
    const random = Math.floor(Math.random() * names.length);

    randomList.push(names[random]);

    names.splice(random, 1);

    if (names.length === 0) break;
  }

  for (let i = 0; i < randomList.length; i++) {
    const chair = document.getElementById(`${i + 1}`);
    chair.textContent = randomList[i];
  }
  randomList = [];
}

//"Ahmed", "Ali", "Clément", "Hamza", "Jérémy", "Karl", "Mathias", "Marion", "Mohand", "Nadir", "Naïm", "Naïm D.", "Simon", "Sirène", "Elodie"
