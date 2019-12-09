function aktuellesDatum() {
  var heute = new Date();

  var Tag = heute.getDate(); // Tag

  // Monatsangabe startet bei 0!
  var Monat = heute.getMonth() + 1; // Monat

  var Jahr = heute.getFullYear(); // Jahr
  if (Tag < 10) {
    Tag = '0' + Tag;
  }
  if (Monat < 10) {
    Monat = '0' + Monat;
  }
  heute = Tag + '.' + Monat + '.' + Jahr;

  return heute;
}

document.getElementById('datum').textContent = aktuellesDatum();


function aktuelleUhrzeit() {

  var heute = new Date();
  var StundenZahl = heute.getHours();
  var MinutenZahl = heute.getMinutes();
  var SekundenZahl = heute.getSeconds();

  var stunden, minuten, sekunden;

  stunden = StundenZahl + ":";
  if (MinutenZahl < 10) { minuten = "0" + MinutenZahl + ":"; }
  else { minuten = MinutenZahl + ":"; }
  if (SekundenZahl < 10) { sekunden = "0" + SekundenZahl + " "; }
  else { sekunden = SekundenZahl + " "; }

  uhr.innerHTML = stunden + minuten + sekunden + "Uhr";

  window.setTimeout("aktuelleUhrzeit();", 1000);
}

window.onload = aktuelleUhrzeit;


function handleHeaderClick(event) {

  switch (event.target.id) {

    case "Statusinformation";
      showTemplate();
      break;

  }

}

function showTemplate() {
let newButton = document.querySelector("button.Statusinformation")


}

document.querySelector('main').addEventListener('click', handleHeaderClick);
