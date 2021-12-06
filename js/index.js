const maxLife = 20;
let scene;
let sceneEnCours = 1;
let life = maxLife;
let textLiaison = "";

let urlJSON = "./data/histoire.json";

async function fetchInfo() {
    fetch(urlJSON)
        .then(response => response.json())
        .then(data => scene = data.Scene)
        .catch(error => console.log(error));
    setTimeout(() => { main() }, 150);
}

fetchInfo();


function main() {
    displayLife(0);
    majScene();
}

// blink "on" state
function show() {	
    document.getElementById("blink2").style.display = "none";
    document.getElementById("blink1").style.display = "inline";
}
// blink "off" state
function hide() {
    document.getElementById("blink1").style.display = "none";
    document.getElementById("blink2").style.display = "inline";
}

//Effet de clignotement, delay en millisecondes, pendant duration secondes
function blink(delay, duration) {
    for(let i = 0; i < duration; i += delay) {
        setTimeout("hide()", i);
        setTimeout("show()", i + delay / 2);
    }
}

//Crée la barre de points de vie.
//Fait clignoter les points gagnés ou perdus.
function displayLife(old) {
    lifeDisplay = document.getElementById("life");
    let s = "";
    //Gain de PdV
    if (old < life) {
        for( let i = 1; i <= old; i++) {
            s += "<i class='heart fa fa-heart'></i>";
        }
        s += "<span id='blink1'>";
        for( let i = old + 1; i <= life; i++) {
            s += "<i class='heart fa fa-heart'></i>";
        }
        s += "</span>";
        s += "<span id='blink2' style='display:none'>";
        for( let i = old + 1; i <= life; i++) {
            s += "<i class='heart fa fa-heart-o'></i>";
        }
        s += "</span>";
        for( let i = life + 1; i <= maxLife; i++) {
            s += "<i class='heart fa fa-heart-o'></i>";
        }
    }
    //Perte de PdV
    if (old > life) {
        for( let i = 1; i <= life; i++) {
            s += "<i class='heart fa fa-heart'></i>";
        }
        s += "<span id='blink1'>";
        for( let i = life + 1; i <= old; i++) {
            s += "<i class='heart fa fa-heart-o'></i>";
        }
        s += "</span>";
        s += "<span id='blink2' style='display:none'>";
        for( let i = life + 1; i <= old; i++) {
            s += "<i class='heart fa fa-heart'></i>";
        }
        s += "</span>";
        for( let i = old + 1; i < maxLife; i++) {
            s += "<i class='heart fa fa-heart-o'></i>";
        }
    }
    if ( old != life ) {
        lifeDisplay.innerHTML = "<div aria_label='" + life + " points de vie.'>" + s + "</div>";
        blink(300, 800);
    }
}

function changeLifePoint(changeLife){
    console.log("Mise a jour des point de vie -> " + changeLife);
    changeLife = parseInt(changeLife);

    const oldLife = life;

    life += changeLife;

    life = life > maxLife ? maxLife : life;
    life = life < 0 ? 0 : life;
    
    displayLife(oldLife);
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

    // Cache les éléments de la liste s'il n'y a pas de choix pour la scène en cours
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


