let monTableau = ['voiture', 'believemy', 'formation', 'ratatouille'];
let motAleatoir = Math.floor(Math.random()*monTableau.length);
let decompose = monTableau[motAleatoir].split('');
let lettre;
let test = document.createElement('div');
let titre = document.querySelector('.mot');
console.log(decompose);

titre.innerHTML = '<h1> Le mot est : ' + decompose + ' </h1>'




const controle = () =>  {

lettre = document.addEventListener('keypress', (e) =>  {
    lettre = event.key;


for(var i=0; i<(decompose.length); i++){
    if(lettre == decompose[i]) {
        test = 'la lettre ' + lettre + ' est à l\'index ' + decompose.indexOf(lettre) + '<br>' ;
        document.body.innerHTML += '<strong> ' + test + ' </strong> <br>';
    }
}
}) 
}



controle()

