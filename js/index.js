let scene;
let sceneEnCours = 1;
let life = 20;
let textLiaison = "";

let urlJSON = "./data/data.json";

async function fetchInfo() {
    fetch(urlJSON)
        .then(response => response.json())
        .then(data => scene = data.Scene)
        .catch(error => console.log(error));
    setTimeout(() => { main() }, 150);
}

fetchInfo();


function main() {
    displayLife();
    majScene();
}

function displayLife(){
    lifeDisplay = document.querySelector("#life");
    lifeDisplay.textContent = life;
}

function changeLifePoint(changeLife){
    console.log("Mise a jour des point de vie -> " + changeLife);
    changeLife =parseInt(changeLife);

    life += changeLife;

    life = life > 20 ? 20 : life;

   

    displayLife();
}

// -----------------------------------------------------------------------------------------------------------
function majUnChoix(num) {
    console.log("Mise à jour du choix " + (num+1));

    const choix = document.getElementById('choix' + (num + 1));
    choix.textContent = scene[sceneEnCours].Choix[num].Texte;
    
    choix.hidden = false; 
    console.log("Choix " + (num+1) + " mis à jour!");
    console.log("");
}

function clickOption(i){
    console.log("Vous avez cliqué sur un choix qui envoie vers la scène " + scene[sceneEnCours].Choix[i].Vers)
    textLiaison = scene[sceneEnCours].Choix[i].Liaison;

    changeLifePoint(scene[sceneEnCours].Choix[i].PdV);

    if (life <= 0){
        life = 0;
        sceneEnCours = 0;
    }
    else{
        sceneEnCours = scene[sceneEnCours].Choix[i].Vers;
    }



    majScene();
}


function majFullChoix() {
    console.log("Mise à jour de tous les choix en cours ...");
    console.log("");

    let nbChoix = scene[sceneEnCours].Choix.length;

    // Change le texte de tous les choix
    for (i = 0; i < nbChoix; i++) {
        majUnChoix(i);
    }

    // Cache les éléments de la liste si il n'y a pas de choix pour la scène en cours
    for (i = nbChoix + 1; i < 4; i++) {
        const choix = document.getElementById('choix' + (i));
        choix.hidden = true;
    }
    console.log("Tous les Choix sont à jour !");
    console.log("---------------------------------------------------");
}
// -----------------------------------------------------------------------------------------------------------

function majScene() {
    console.log("Mise en place de la scène -> " + sceneEnCours);

    const histoire = document.getElementById("content");
    histoire.innerHTML  = textLiaison + (textLiaison != "" ? "<br /><br />" : "")  + scene[sceneEnCours].Description;

    majFullChoix();
}


