function taler() {
    const imgOne = document.getElementById('one');
    let changement = 1;
    let speak = true;

    setInterval(function boucheD() {
        if (speak == true) {

            if (changement == 1) {
                imgOne.setAttribute("src", "./images/taler/bouche2-removebg-preview.png")
                changement = 2;

            }
            else if (changement == 2) {
                imgOne.setAttribute("src", "./images/taler/bouche3-removebg-preview.png")
                changement = 3;
            }
            else {
                imgOne.setAttribute("src", "./images/taler/bouche1-removebg-preview.png")
                changement = 1;
            }
        }
    }, 150);

    setTimeout(function tempsDeParole() {
        speak = false;
        imgOne.setAttribute("src", "./images/taler/bouche2-removebg-preview.png")
    }, 2500);

}
