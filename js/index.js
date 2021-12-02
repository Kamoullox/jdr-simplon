let scene;
let sceneEnCours = 1; 
let PdV = 20;  
let textLiaison = "";

let urlJSON = "./data/test.json";

async function fetchInfo() {
    fetch(urlJSON)
        .then(response => response.json())
        .then(data => scene = data.Scene)
        .catch(error => console.log(error));
    setTimeout(() => { main() }, 150);
}

fetchInfo();

function main (){
    console.log(scene[1].Choix);
    majScene() ; 
}

function majFullChoix(){

}

function majUnChoix(num){

        const choix = document.getElementById('choix'+(num+1));
        choix.textContent= scene[sceneEnCours].Choix[num].Texte;
} 

function majScene(){
    let nbChoix = scene[sceneEnCours].Choix.length; 
    console.log(nbChoix) ; 
    console.log(scene[sceneEnCours].Choix[0].Texte);
    for(i=0 ; i < nbChoix ; i++){
        majUnChoix(i);
    } 
    // for(i= nbChoix; i<4 ; i++){ 
    //     const choix = document.getElementById('choix'+(i));
    //     choix.textContent= scene[sceneEnCours].Choix[i].Texte;
    // }
   const histoire = document.getElementById("content");
   histoire.textContent = scene[sceneEnCours].Description; 
   
}  

// ------------------------------------------------------------------------------------------------------

 // Boucler sur les choix
    // scene[1].Choix.forEach(choix => {
    //     console.log(choix.Texte)
    // });

    // Selctionner une balise et y mettre la Decription de la scene
    // let p = document.querySelector("p");
    // p.textContent = scene[1].Description