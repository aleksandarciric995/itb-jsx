//  VEZBA 12 Učitati dva razlicita cela broja i ispitati da li je veći od njih paran, a manji od njih deljiv sa 3.

let br1 = 10;
let br2 = 16;
if(br1 > br2) {
    console.log(`Veci broj je ${br1}, a manji broj je ${br2}`);
    // ISPITUJEMO DA LI JE VECI BROJ DELJIV SA DVA tj. DA LI JE PARAN
    if(br1%2 == 0) {
        console.log(`Veci broj je paran.`);
    }
    else {
        console.log(`Veci broj nije paran.`);
    }
        // ISPITUJEMO DA LI JE MANJI BROJ DELJIV SA TRI
    if(br2%3 == 0) {
        console.log(`Manji broj je deljiv sa 3`);
    }
    else {
        console.log(`Manji broj nije deljiv sa tri.`);
    }
}

else {
    console.log(`Veci broj je ${br2}, a manji broj je ${br1}`);

    // ISPITUJEMO DA LI JE VECI BROJ DELJIV SA DVA tj. DA LI JE PARAN
    if(br2%2 == 0) {
        console.log(`Veci broj je paran.`);
    }
    else {
        console.log(`Veci broj nije paran.`);
    }
        // ISPITUJEMO DA LI JE MANJI BROJ DELJIV SA TRI
    if(br1%3 == 0) {
        console.log(`Manji broj je deljiv sa 3`);
    }
    else {
        console.log(`Manji broj nije deljiv sa tri.`);
    }
}

// VEZBA 13 Uneti dva datuma i ispisati onaj koji je raniji. Datume unosimo tako što u posebnim promenljivama navedemo dan, mesec i godinu, za svaki od njih.

let d1, d2, m1, m2, g1, g2;

d1 = 3;
m1 = 4;
g1 = 1995;

d2 = 3;
m2 = 4;
g2 = 1995;

if(g1<g2) {
    console.log(`Raniji datum je ${d1}.${m1}.${g1}.`);
}
else if(g1>g2) {
    console.log(`Raniji datum je ${d2}.${m2}.${g2}.`);
}
else {
    if(m1<m2) {
        console.log(`Raniji datum je ${d1}.${m1}.${g1}.`);
    }
    else if(m1>m2) {
        console.log(`Raniji datum je ${d2}.${m2}.${g2}.`);
    }
    else {
        if(d1<d2) {
            console.log(`Raniji datum je ${d1}.${m1}.${g1}.`);
        }
        else if(d1>d2) {
            console.log(`Raniji datum je ${d2}.${m2}.${g2}.`);
        }
        else {
            console.log(`Isti su.`);
        }
    }
}


//  DRUGI NACIN

d1 = 5;
m1 = 5;
g1 = 2018;
d2 = 5;
m2 = 5;
g2 = 2018;
if (g1 > g2) {
    console.log(`Datum2 je raniji od datuma1`);
} else if (g1 < g2) {
    console.log(`Datum1 je raniji od datuma2`);
} else if (m1 > m2) {
    console.log(`Datum2 je raniji od datuma1`);
} else if (m1 < m2) {
    console.log(`Datum1 je raniji od datuma2`);
} else if (d1 > d2) {
    console.log(`Datum2 je raniji od datuma1`);
} else if (d1 < d2) {
    console.log(`Datum1 je raniji od datuma2`);
} else {
    console.log(`Datumi su jednaki`);
}

//  VEZBA 14 Napraviti program koji za uneti pol i broj godina korisnika ispisuje da li je korisnik muškarac ili žena i da li je punoletan

let pol, godine;
pol = "m";
godine = 18;

if (pol == "m") {
    if (godine >= 18) {
        console.log(`Korisnik je muskarac i punoletan je.`);
    }
    else {
        console.log(`Korisnik je muskarac ali nije punoletan.`);
    }
}
else if(pol =="z") {
    if (godine >= 18) {
        console.log(`Korisnik je zena i punoletna je.`);
    }
    else {
        console.log(`Korisnik je zena ali nije punoletna.`);
    }
}

// VEZBA 12 JEDNOSTAVNIJI NACIN Učitati dva razlicita cela broja i ispitati da li je veći od njih paran, a manji od njih deljiv sa 3.

br1 = 15;
br2 = 19;

let veci = br1;
if(br2 > veci) {
    veci = br2;
}
let manji = br1 + br2 - veci;
if(veci % 2 == 0) {
    console.log(`Veci broj je deljiv sa 2`);
}
else {
    console.log(`Veci broj nije deljiv sa 2`);
}

if(manji % 3 == 0) {
    console.log(`Manji je deljiv sa 3`);
}
else {
    console.log(`Manji broj nije deljiv sa 3`);
}
