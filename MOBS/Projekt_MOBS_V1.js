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


function handleHeaderClick(event) {

  switch (event.target.id) {

      case 'home':
          ClickHome();
          break;

  }
}

  function handleMainClick(event) {

    switch (event.target.id) {

    case 'StatusinformationID':
      ClickStatusinformation();
      break;

    case 'AufsperrenID':
      ClickAuf();
      break;

    case 'AbsperrenID':
      ClickZu();
    break;

    case 'FensterID':
      ClickFenster();
    break;

    case 'MusikID':
      ClickMusik();
    break;

    case 'NavigationID':
      ClickNavi();
    break;
    }
}


//Klicken Statusinformation
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

//Klicken Fenster
function ClickFenster() {
  document.getElementById("menuCenterContainer").style.display = "none";

  var w = document.getElementById('window');
  document.getElementsByTagName("main")[0].appendChild(w.content.cloneNode(true));
}

//Klicken Musik
function ClickMusik() {
  document.getElementById("menuCenterContainer").style.display = "none";

  var m = document.getElementById('music');
  document.getElementsByTagName("main")[0].appendChild(m.content.cloneNode(true));
}

//Klicken Tür auf
function ClickAuf() {
  fetch('http://192.168.0.76:5000/action/unlock')
  .then(console.log('done'));
}

//Klicken Tür zu
function ClickZu() {
  fetch('http://192.168.0.76:5000/action/lock')
  .then(console.log('done'));
}

//Klicken Navigation
function ClickNavi() {
document.getElementById("menuCenterContainer").style.display = "none";

var n = document.getElementById('navi');
document.getElementsByTagName("main")[0].appendChild(n.content.cloneNode(true));
}

//Klick Home
function ClickHome() {
  let mainElement = document.querySelector('main');
  mainElement.innerHTML = '';
  
  var h = document.getElementById('Home');
  document.getElementsByTagName("main")[0].appendChild(h.content.cloneNode(true));
  }

document.querySelector('main').addEventListener('click', handleMainClick);
document.querySelector('header').addEventListener('click', handleHeaderClick);