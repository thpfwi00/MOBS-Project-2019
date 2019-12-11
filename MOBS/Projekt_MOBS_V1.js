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

var heute = aktuellesDatum();

document.getElementById('datum').textContent += heute;


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

  zeit = stunden + minuten + sekunden + "Uhr";
  uhr.innerHTML = zeit;

  window.setTimeout("aktuelleUhrzeit();", 1000);
}

window.onload = aktuelleUhrzeit;


//Klicken Statusinformation
const ButtonStatus = document.querySelector('.Statusinformation');

function ClickStatusinformation() {

  document.getElementById("menuCenterContainer").style.display = "none";

  var d = document.getElementById('Daten');
  document.getElementsByTagName("main")[0].appendChild(d.content.cloneNode(true));


  "use Strict";

  fetch('http://192.168.0.76:5000/status').then(function(response) {
          response.text().then(function(text) {
                  console.log(text);

        var array = text.split(',');
        var consumption = array[0].split(":");
        var humidity = array[1].substr(15, 6);
        var pressure = array[2].substr(15, 6);
        var speed = array[3].split(":");
        var temp = array[4].substr(12, 4);


        document.getElementsByClassName("templateStatusdaten")[0].append(speed[1] + " kmh");
        document.getElementsByClassName("templateStatusdaten")[1].append(consumption[1] + " l");
        document.getElementsByClassName("templateStatusdaten")[2].append(pressure + " Pa");
        document.getElementsByClassName("templateStatusdaten")[3].append(temp + " °C");
        document.getElementsByClassName("templateStatusdaten")[4].append(humidity[1] + " g/m^3");
      });
    });
}

ButtonStatus.addEventListener('click', ClickStatusinformation);


//Klicken Fenster
const ButtonFenster = document.querySelector('.Fenster');

function ClickFenster() {
  document.getElementById("menuCenterContainer").style.display = "none";

  var w = document.getElementById('window');
  document.getElementsByTagName("main")[0].appendChild(w.content.cloneNode(true));
}

ButtonFenster.addEventListener('click', ClickFenster);

//Klicken Musik
const ButtonMusik = document.querySelector(".Musik");

function ClickMusik() {
  document.getElementById("menuCenterContainer").style.display = "none";

  var m = document.getElementById('music');
  document.getElementsByTagName("main")[0].appendChild(m.content.cloneNode(true));
}

ButtonMusik.addEventListener('click', ClickMusik);

//Klicken Tür auf
const ButtonAuf= document.querySelector(".Aufsperren");

function ClickAuf() {
  fetch('http://192.168.0.76:5000/action/unlock')
  .then(console.log('done'));
}

ButtonAuf.addEventListener('click', ClickAuf);

//Klicken Tür zu
const ButtonZu= document.querySelector(".Absperren");

function ClickZu() {
  fetch('http://192.168.0.76:5000/action/lock')
  .then(console.log('done'));
}

ButtonZu.addEventListener('click', ClickZu);


function Home(){
  let mainElement = document.querySelector('main');

  mainElement.innerHTML = '';
}