let sceneEnCours = 1; 
function majUnChoix(num){

        const choix = document.getElementById('choix'+num);
        choix.textContent="random"+num;
} 

function majFullChoix(num){
    let nbChoix = scene[sceneEnCours].Choix.length; 
    for(i=1 ; i<4 ; i++){
        majUnChoix(i);
    }
   const histoire = document.getElementById("content");
   histoire.textContent = "vous avez cliqué sur choix" +num ; 
   
}  

















