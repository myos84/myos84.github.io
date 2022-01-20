let tableauDeMot = ["VOITURE", "AVION", "ELEPHANT", "FORMATION", "ECOLE", "ENDIVE"];
let motDecompose;
let tableauLettre = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lettreChoisie

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
                console.log(clavierVirtuel());

// Fonction permettant de recuperer un mot aleatoire dans le tableau et de le decomposer 

            function elemAleatoire() { 
                    let motAleatoire = tableauDeMot[Math.floor(Math.random()*tableauDeMot.length)];
                    motDecompose = motAleatoire.split('');
                    return motDecompose;
            } 

                console.log(elemAleatoire());


// Fonction permettant verifier les caracteres et de les afficher si present ou retirer 1 coup si absent 

            function motCache() {
            
                        for(var i=0; i<motDecompose.length; i++) {
                            let el = "";
                            if(el === motDecompose[i]){ 
                            console.log('element present')
                            } else {
                            }
                        }
            }

            motCache()