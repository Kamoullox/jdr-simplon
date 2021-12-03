//     ["sceneDescription", [UserAnswer, UserAnswer, UserAnswer]],




//Init pour test
function initHistory() {
    let ua0 = new UserAnswer("Recommencer", "", 2, 100);
    history[0] = "Vous êtes mort !";
    choices[0] = ua0;
    ua0 = new UserAnswer("Fuir", "Vous fuyez", 2, 0);
    let ua1 = new UserAnswer("Combattre", "Vous perdez 7 pdv", 2, -7);
    history[1] = "Un ours !"
    choices[0] = ua0;
    choices[1] = ua1;
    ua0 = new UserAnswer("Aller dans la caverne.", "", 1, 0);
    history[2] = "Vous sortez de la caverne.";
    choices[0] = ua0;
}
