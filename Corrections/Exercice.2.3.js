var unitPrice = parseFloat(prompt("Veuillez saisir le prix unitaire de l'article"));
var number = parseInt(prompt("Veuillez saisir le nombre d'articles"), 10);
var VAT = parseFloat(prompt('Veuillez saisir le taux de TVA'));

var price = calculatePrice(unitPrice, number, VAT);

alert('Le prix total est : ' + price.toFixed(2));

function calculatePrice(unitPrice, numberOfUnit, VAT) {
  return unitPrice*numberOfUnit + unitPrice*numberOfUnit*VAT;
}