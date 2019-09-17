var nombre = (Math.random() * 100 + 1).toFixed(0);
var trouve = false;

while(!trouve) {
  var nombreSaisi = parseInt(prompt('Veuillez saisir un nombre entre 1 et 100'));
  
  if(nombreSaisi < nombre) {
    alert('Trop petit');
  }
  else if(nombreSaisi > nombre) {
    alert('Trop grand');
  }
  else if(nombreSaisi == nombre) {
    trouve = true;
  }
}

alert('Vous avez trouvé!');