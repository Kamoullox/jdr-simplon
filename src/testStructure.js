let history = [];
//     ["sceneDescription", [UserAnswer, UserAnswer, UserAnswer]],


class UserAnswer {
    constructor(choiceText, linkText, indexOfNextScene, lifeModification){
        this.choiceText = choiceText;
        this.linkText = linkText;
        this.indexOfNextScene = indexOfNextScene;
        this.lifeModification = lifeModification;
    }
};

//Init pour test
function initHistory() {
    let ua1 = new UserAnswer("Recommencer", "", 2, 100);
    history[1] = ["Vous êtes mort !", [ua1] ];
    let ua1 = new UserAnswer("Fuir", "Vous fuyez", 2, 0);
    let ua2 = new UserAnswer("Combattre", "Vous perdez 7 pdv", 2, -7);
    history[1] = ["Un ours !", [ua1, ua2] ];
    let ua1 = new UserAnswer("Aller dans la caverne.", "", 1, 0);
    history[2] = ["Vous sortez de la caverne.", [ua1] ];
}