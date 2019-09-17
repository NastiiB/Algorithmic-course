var notes = new Array(9);

for(var i = 0; i < 9; i++) {
  notes[i] = parseInt(prompt('Note ' + (i+1) + '?'));
}

var somme = notes[0];
for(var i = 1; i < 9; i++) {
  somme = somme + notes[i];
}

alert('Moyenne : ' + (somme/notes.length).toFixed(2));