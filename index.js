let history = [];

// -----------------------------------------------------
const answers = {
    choiceText : "",
    linkText: "",
    indexOfNextScene : null,
    lifeModification : 0,

    // CHOICES STRUCTURE -> "choixeText", "linkText", "indexOfNextScene", "lifeModification", 
    addChoice: function (choiceText, linkText, indexOfNextScene, lifeModification ) {
        this.choiceText = choiceText;
        this.linkText = linkText;
        this.indexOfNextScene = indexOfNextScene;
        this.lifeModification = lifeModification;
    }
};
// -----------------------------------------------------

const answers1 = Object.create(answers);
const answers2 = Object.create(answers);

answers1.addChoice(
    "Prendre le coffre de droite",
    "Vous avez séléctionné le coffre de droite, il explose. -10 PV",
    2,
    -10
); 
answers2.addChoice(
    "Prendre le coffre de gauche",
    "Vous avez séléctionné le coffre de gauche, il contient une potion . +10 PV",
    2,
    10
);

// -----------------------------------------------------


console.log(answers1.linkText);
console.log(answers2.choiceText);

