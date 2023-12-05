let datum = new Date();
let dan = datum.getDay();
let sati = datum.getHours();
let minuti = datum.getMinutes();
let trenutnoVreme = `${sati}:${minuti}`;

if((dan == 0) || (dan == 6)) {
    document.getElementById("naslov").innerHTML = `Odmarate? ITBootcamp vam nudi mogućnost da stičete nove veštine! (${trenutnoVreme})`
}
else if((dan > 0) && (dan < 6)) {
    document.getElementById("naslov").innerHTML = `Radite? ITBootcamp vam nudi mogućnost da se okrenete novoj profesiji! (${trenutnoVreme})`
}