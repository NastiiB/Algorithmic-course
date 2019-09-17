var nombreElements = parseInt(prompt('Veuillez saisir le nombre d\'éléments'));

var tableau = new Array(nombreElements);
for( var i = 0; i < nombreElements; i++) {
  tableau[i] = parseInt(prompt('Elément ' + (i + 1)));
}

var indexPlusPetit = 0;
for( var i = 1; i < nombreElements; i++) {
  if(tableau[i] < tableau[indexPlusPetit]) {
    indexPlusPetit = i;
  }
}

alert('Le plus petit élément est ' + tableau[indexPlusPetit] + ' à l\'index ' + indexPlusPetit);