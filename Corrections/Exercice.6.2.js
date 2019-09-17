var phrase = prompt('Veuillez saisir une phrase').trim();
var voyelles = 'aeiouy'

var nombreVoyelles = 0;

for( var i = 0; i < phrase.length; i++) {
  if (voyelles.indexOf(phrase[i]) > -1) {
    nombreVoyelles = nombreVoyelles + 1;
  }
}

alert('Nombre de voyelles : ' + nombreVoyelles);