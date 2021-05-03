// Global variabler
var input1Elem, inputElem2; // Referenser till textfälten för indata
var resultElem; // Referenser till elemnt för resultat

// Initiering då webbsidan är inläst
function init() {
  input1Elem = document.getElementById("input1");
  input2Elem = document.getElementById("input2");
  resultElem = document.getElementById('result');
  document.getElementById('runBtn').onclick = areaCalculations;
} // End init
window.onload = init;

// Beräkna arean för en rektangel
function areaCalculations() {
  let length; // Längd i meter
  let width; // Bredd i meter
  let area; // Yta i kvadrameter

  length = Number(input1Elem.value);
  width = Number(input2Elem.value);
  area = length * width;

  // Beräkna arean för en rektangel
  resultElem.innerHTML += "<p>Rektangelns area är " + area + "m<sup>2</sup></p>";

  // Beräkna arean för en ellips
  area = 3.14 * length * width / 4;
  resultElem.innerHTML += "<p>Ellipens area är " + area + "m<sup>2</sup></p>"

  // Beräkna arean om bredden är bredden ökas med 5
  area = (length + 5) * width;
  resultElem.innerHTML += "<p>Längden + 5 ger rektangelns area " + area + "m<sup>2</sup></p>";

  // Beräkna arean om längden är längden ökas med 50% och bredden är bredden ökas med 3 m
  area = (length * 1.5) * (width + 3);
  resultElem.innerHTML += "<p>Då längden ökas med 50% och bredden med 3 meter blir rektangelns area " + area + "m<sup>2</sup></p>"

  // Beräkna arean för en triangel
  area = (length * 3.28) * (width * 3.28) / 2;
  resultElem.innerHTML += "<p>Triangelns area är " + area + "m<sup>2</sup></p>";

} // End areaCalculations