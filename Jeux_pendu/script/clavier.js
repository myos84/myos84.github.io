const touche = [ "A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const tableauDeMot = ["VOITURE", "ELEPHANT", "JAVASCRIPT", "CATASTROPHE"];
const motATrouver = document.querySelector('.motSelectionne');
let imageDuPendu = document.querySelector('.imagePendu');
let  motAleatoire = tableauDeMot[Math.floor(Math.random()*tableauDeMot.length)];
let motDecompose = motAleatoire.split('');
let nombreDeCoupRestant = 11;
let lettreATrouver = document.querySelector('lettreCache');
let lettreCachees;
let compteurDeCoup = document.querySelector('.count');
let nombreDeLettre = document.querySelector('.lettre')
nombreDeLettre.textContent = motDecompose.length
let verifierMot = [];





function afficherLettre(lettre, index) {
    /* ... */lettreCachees[index].classList.add("visible");
  }
  
  function afficherPartiePotence() {
   /* ... */
   nombreDeCoupRestant--
  }



// Creation du clavier virtuel

function creerClavierVirtuel () {
    console.log(motDecompose)
    const clavier = document.querySelector('.clavier');
    for (let i = 0 ; i < touche.length ; i++){
     clavier.innerHTML += '<div class="touche">'+ touche[i] +"</div>";
}

clavier.addEventListener ('click', (event) => {
    toucheSelectionne = event.target.textContent;
    verifierSiLettreOresenteDansMot();
    }
)}


// Verifie si la lettre cliqué fait parti du mot a decouvrir !

function verifierSiLettreOresenteDansMot () {
    let estPresent = false;
    for (let i = 0 ; i <= motDecompose.length - 1; i++){
        
        if(toucheSelectionne === motDecompose[i]){
            verifierMot.push(toucheSelectionne);
            afficherLettre(toucheSelectionne, i);
            estPresent = true;
            motDecompose.length - toucheSelectionne;
        }

        if(motDecompose.length === verifierMot.length){
            document.body.style.backgroundColor = "blue";
            console.log('ok')
        }
}
    if(!estPresent){
    afficherPartiePotence();
    nombreDeCoupRestant - 1;
    compteurDeCoup.textContent = nombreDeCoupRestant;
    imageDuPendu.innerHTML = `<img src="../images/p${nombreDeCoupRestant}.png" alt=""/>`
}
    if(nombreDeCoupRestant === 0){
                document.body.style.backgroundColor = "red";
            }

            
}



function motACacher () {
    const lettreCache = document.querySelector('.motSelectionne');
    for (let i = 0 ; i < motDecompose.length   ; i++){
     lettreCache.innerHTML += '<div class="lettreCache">'+ motDecompose[i] +"</div>";
}
    lettreCachees =  document.querySelectorAll(".lettreCache");
}


motACacher()
creerClavierVirtuel()





