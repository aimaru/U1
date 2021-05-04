// Globala variabler
var input1Elem;
var input2Elem;
var msgElem;
var imgElem;

// ------------------------------
// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {
  input1Elem = document.getElementById('input1');
  input2Elem = document.getElementById('input2');
  msgElem = document.getElementById('message');
  imgElem = document.getElementById('fruitImg');
  document.getElementById('btn1').onclick = showFruit;
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad
// ------------------------------

function showFruit() {
  // Läs indata
  let nr = Number(input1Elem.value);
  let url; // Variabel

  // Bilders url
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
  imgElem.src = url;  // Byt ut bildens url
}