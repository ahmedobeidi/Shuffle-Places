let stuendts;
let randomList;

initialize();

const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", handleRandomButton);

function handleRandomButton() {
    while(true) {
        const random =  Math.floor(Math.random() * stuendts.length);

        randomList.push(stuendts[random]);

        stuendts.splice(random, 1);

        if (stuendts.length === 0) break;
    }

    setPlaces();
    initialize();
}

function initialize() {
    stuendts = ["Ahmed", "Ali", "Clément", "Hamza", "Jérémy", "Karl", "Mathias", "Marion", "Mohand", "Nadir", "Naïm", "Naïm D.", "Simon", "Sirène", "Elodie"];

    randomList  = [];
}

function setPlaces() {
    for(let i = 0; i < randomList.length; i++) {
        const chair = document.getElementById(`${i+1}`);
        chair.textContent = randomList[i];
    }
}


