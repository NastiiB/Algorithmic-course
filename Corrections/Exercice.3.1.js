var age = parseInt(prompt('Veuillez saisir l\'age de l\'enfant?'));

if (age == 6 || age == 7) {
  alert('Poussin');
} else if (age == 8 || age == 9) {
  alert('Pupille');
} else if (age == 10 || age == 11) {
  alert('Minime');
} else if (age >= 12) {
  alert('Cadet');
}