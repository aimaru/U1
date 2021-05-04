// Globala variabler
var input1Elem, input2Elem; // Referenser till textfälten för indata 
var msgElem; // Referens till element för fel meddelande
var imgElem; // Referens till element för frukt bild

// ------------------------------
// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {
  input1Elem = document.getElementById('input1');
  input2Elem = document.getElementById('input2');
  msgElem = document.getElementById('message');
  // imgElem = document.getElementById('fruitImg');
  document.getElementById('btn1').onclick = showFruit;
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad
// ------------------------------

// ------------------------------
// Funktion som anropa funktionen som validera numret 
// som användare har valt. Och sen bytas ut bilden 
// (om användaren valt numret mellan 1 och 5). 
function showFruit() {

  // Den första paramentern: värdet i textfältet
  // Den andra paramentern: den övre gränsen för tillåtna värden
  let nr = checkNr(input1Elem.value, 5);

  // Bilds url byts ut
  document.getElementById('fruitImg').src = getUrl(nr);
}
// ------------------------------

// ------------------------------
// Får bildens url
function getUrl(nr) {
  let url; // Variabel för bilds url
  switch (nr) {
    case 1:
      url = "img/apple.png";
      break;

    case 2:
      url = "img/banana.png";
      break;

    case 3:
      url = "img/orange.png";
      break;

    case 4:
      url = "img/pear.png";
      break;

    case 5:
      url = "img/pineapple.png";
      break;

    default:
      url = "img/nofruit.png";
  }
  return url;
} // End getUrl
// ------------------------------

// ------------------------------
function checkNr(nr, high) {
  msgElem.innerHTML = "";

  // Kontrollera om nummer är ett tal
  if (isNaN(nr)) {
    msgElem.innerHTML = "Du måste skriva ett tal med siffror.";
    return null; // Om numret är fel, returnerar ju funktionen null
  }

  // Kontrollera att talet ligger utanför intervallet 1 och 5.
  if (nr < 1 || nr > high) {
    msgElem.innerHTML = "Du måste skriva ett tal mellan 1 och " + high;
    return null; // Om numret är fel, returnerar ju funktionen null
  }

  // Om talet är decimaltal konverteras numret til ett heltal och visa det för användaren
  nr = parseInt(nr);

  return nr;
}