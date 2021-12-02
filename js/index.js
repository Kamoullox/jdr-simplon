let scene;

let urlJSON = "./data/story.json";

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

    // Boucler sur les choix
    // scene[1].Choix.forEach(choix => {
    //     console.log(choix.Texte)
    // });

    // Selctionner une balise et y mettre la Decription de la scene
    // let p = document.querySelector("p");
    // p.textContent = scene[1].Description
}
