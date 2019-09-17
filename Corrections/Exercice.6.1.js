var phrase = prompt('Veuillez saisir une phrase').trim();

var nombreEspace = 0;

if (phrase.length == 0) {
  nombreEspace = -1;
}

for( var i = 0; i < phrase.length; i++) {
  if (phrase[i] == ' ') {
    nombreEspace = nombreEspace + 1;
  }
}

alert('Nombre de mots : ' + (nombreEspace + 1));