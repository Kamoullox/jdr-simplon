let allScenes = [];

let urlJSON = "./data/test.json";
let urlXML = "./data/test.xml";

// --------------------structure attendu--------------------------
// let history = [
//     ["sceneDescription", [UserAnswer, UserAnswer, UserAnswer]],
//     ["sceneDescription", [UserAnswer, UserAnswer]],
//     ["sceneDescription", [UserAnswer, UserAnswer, UserAnswer]],
//     ["sceneDescription", [UserAnswer, UserAnswer, UserAnswer]],
//     ["sceneDescription", [UserAnswer, UserAnswer]],
//     ["sceneDescription", [UserAnswer, UserAnswer, UserAnswer]]
// ]

class UserAnswer {
    constructor(choiceText, linkText, indexOfNextScene, lifeModification){
        this.choiceText = choiceText;
        this.linkText = linkText;
        this.indexOfNextScene = indexOfNextScene;
        this.lifeModification = lifeModification;
    }
};
// -----------------------------------------------------

fetch(urlJSON)
.then(response => response.json())
.then(json => {
    let allScenesJSON = json.Histoire.Scene;

    allScenesJSON.forEach(sceneJSON => {
        let sceneDescription = sceneJSON.Description;
        let newScene = [sceneDescription];

        // console.log("Push de -> " + sceneDescription );

        (sceneJSON.Choix).forEach(choice => {
            let choiceText = choice.Texte;
            let linkText = choice.Liaison;
            let indexOfNextScene = choice.Vers;
            let lifeModification = choice.PdV;
            newScene.push(new UserAnswer(choiceText, linkText, indexOfNextScene, lifeModification))
        });

        // console.log(JSON.stringify(sceneRow))

        allScenes.push(newScene);
            
    });
});

console.log(allScenes)

// --------------------structure attendu--------------------------
// let history = [
//     ["scene", [UserAnswer, UserAnswer, UserAnswer]],
//     ["scene", [UserAnswer, UserAnswer]],
//     ["scene", [UserAnswer, UserAnswer, UserAnswer]],
//     ["scene", [UserAnswer, UserAnswer, UserAnswer]],
//     ["scene", [UserAnswer, UserAnswer]],
//     ["scene", [UserAnswer, UserAnswer, UserAnswer]]
// ]

// -------------Test avec des valeurs rentré à la mains -----------
let answers1 = new UserAnswer(
    "Prendre le coffre de droite",
    "Vous avez séléctionné le coffre de droite, il explose. -10 PV",
    2,
    -10
);
let answers2 = new UserAnswer(
    "Prendre le coffre de gauche",
    "Vous avez séléctionné le coffre de gauche, il contient une potion . +10 PV",
    2,
    10
);

let answerLine = ["Vous avez séléctionné le coffre de gauche, il contient une potion . +10 PV", answers1, answers2];
let allScene2 = [];
allScene2.push(answerLine);
allScene2.push(answerLine);
console.log(allScene2);

// ----------------Test pour extraire les données du XML--------------------
// let story = [];

// fetch(urlXML)
// .then(response=>response.text())
// .then(data => {
//     let parser = new DOMParser();
//     let xml = parser.parseFromString(data, "application/xml");
//     getDescription(xml);
// })

// function getDescription(x){
//     let descriptions = x.getElementsByTagName('Description');
//     for (let i=0; i<descriptions.length; i++){
//         let description = descriptions[i].firstChild.nodeValue;
//         story.push([description])
//     }
// }