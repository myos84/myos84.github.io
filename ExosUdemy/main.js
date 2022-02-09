const afficherLesTraits = document.querySelector('.hiddenLetter')


let tableauDeMot = ['developpeur', 'accompagner', 'helicoptere', 'imprimante', 'parapente', 'bapteme', 'decouverte', 'parachute', 'javascript', 'sensation'];
let tableauLettre = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



// Réalisation du Clavier Virtuel avec recuperation du click sur les touches 

            function clavierVirtuel() {
                    let table = document.createElement('table');
                    table.className = 'table';
                    let tbody = document.createElement('tbody');
                    let tr = document.createElement('tr');
                    let alphabetLetters = document.querySelector('.alphabetLetters')

                            for (const letters of tableauLettre) {
                                let td = document.createElement('td');
                                td.className = 'tableTd';
                                td.innerText = letters;
                                tr.appendChild(td);
                                td.addEventListener('click', () => {
                                console.log(letters);
                            })
                            }
                
                tbody.appendChild(tr);
                table.appendChild(tbody);
                alphabetLetters.appendChild(table);
            
            }
        
                clavierVirtuel();


// Recuperer un mot de facon aleatoire dans le tableau
let motAleatoire = Math.floor(Math.random() * tableauDeMot.length);
let motDecompose = tableauDeMot[motAleatoire].split('');
console.log(motDecompose)


function verifierLettreMot () {
    let lettre = ('e','t','r','a')
    for(let i = 0 ; i < motDecompose.length ; i++){
        let lettreATrouver = document.createElement('div');
        lettreATrouver.textContent = '_';
        lettreATrouver.className += `lettre${i}`;
        afficherLesTraits.appendChild(lettreATrouver)

        if (motDecompose[i] == lettre){
            lettreATrouver.textContent += `${lettre}`
        }
    }


}
console.log(td)

verifierLettreMot()