/* ZADATAK 8
Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
Prebrojati koliko ima ovakvih brojeva od n do m.
*/

function deljivSaTri(n, m) {
    let brojac = 0;
    for(let i = n; i <= m; i++) {
        if(i % 3 == 0) {
            console.log(i);
            brojac++;
        }
    }
    console.log(`Ima ${brojac} brojeva deljivih sa 3 u intervalu od ${n} do ${m}`);
}
deljivSaTri(10, 30);

/* ZADATAK 9 
Napisati funkciju sumiraj koja određuje i vraća sumu brojeva od n do m. 
Brojeve n i m proslediti kao parametre funkciji.
*/
console.log(`ZADATAK 9`);
function sumiraj(n, m) {
    let suma = 0;
    for(let i = n; i <= m; i++) {
        suma += i;
    }
    return suma;
}
console.log(sumiraj(1, 2));

/* ZADATAK 10
Napisati funkciju množi koja određuje i vraća proizvod brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.
*/
console.log(`ZADATAK 10`);
function mnozi(n, m) {
    let proizvod = 1;
    for(i = n; i <= m; i++) {
        proizvod *= i;
    }
    return proizvod;
}
console.log(mnozi(2, 4));

/* ZADATAK 11
Napraviti funkciju aritmeticka koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
*/
console.log(`ZADATAK 11`);
function aritmeticka(n, m) {
    let suma = 0;
    let sredina = 1;
    let brojac = 0;
    for(i = n; i <= m; i++) {
        suma += i;
        brojac++;
    }
    sredina = suma / brojac;
    return sredina;
}
console.log(aritmeticka(2, 6));

/* ZADATAK 12
Napisati funkciju aritmetickaTri koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.
*/
console.log(`ZADATAK 12`);
function aritmetickaTri(n, m) {
    let suma = 0; // moglo je samo let suma = sumiraj(n, m);
    let sredina = 1;
    let brojac = 0;
    for(i = n; i <= m; i++) {
        if(i % 10 == 3) {
            suma += i;
            brojac++;
        }
    }
    sredina = suma / brojac;
    return sredina; // mogao sam i bez let sredina, vec samo return suma / brojac;
}
console.log(aritmetickaTri(3, 23));

/* ZADATAK 13
Napisati funkciju velicinaFonta kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
*/
document.write(`ZADATAK 13`);
function velicinaFonta(i) {
    document.write(`<p style="font-size: ${i}px">Ovo je neki tekst zadatka 13</p>`)
}
velicinaFonta(36);

/* ZADATAK 14
Napisati funkciju recenica5 koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 
*/
document.write(`ZADATAK 14`);
function recenica5() {
    let i = 1;
    while(i <= 5) {
        document.write(`<p style="font-size: ${i}px">Recenica zadatka 14</p>`);
        i++;
    }
}

recenica5();

/* ZADATAK 15
Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
    a)Napišite funkciju poslednjaPlata kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati kolika će vam plata biti poslednjeg meseca prakse, ukoliko svakog meseca budete dobijali povišicu.
    Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
        b)Napišite funkciju ukupnaPlata kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno novca zaraditi na praksi, ukoliko svakog meseca budete dobijali povišicu.
        Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
*/
document.write(`Zadatak 15 pod a`);
function poslednjaPlata(n, a, d) {
    let povecanje = 1;
    for(i = 1; i <= n; i++) {
        povecanje = (d * (i - 1));
    }
    a += povecanje;
    return a;
    // a cela f*ja je mogla da glasi return a + (n-1) * d;
}
document.write(`<br> ${poslednjaPlata(5, 100, 20)}`);

document.write(`<br>Zadatak 15 pod b`);
function ukupnaPlata(n, a, d) {
    let ukupno = 0;
    for(i = 1; i <= n; i++) {
        ukupno += (d * (i - 1));
    }
    return ukupno + a*(i - 1);
}
document.write(`<br>${ukupnaPlata(5, 10, 2)}`);

/* 15. zadatak
function poslednjaPlata(n, a, d) {
  return a + (n - 1) * d;
}
console.log(poslednjaPlata(6, 1000, 100));
function ukupnaPlata(n, a, d) {
  return ((a + poslednjaPlata(n, a, d)) / 2) * n;
}
console.log(ukupnaPlata(3, 1000, 100));
*/

/* ZADATAK 16
Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Ukoliko takmičar pre podizanja mosta kroči na most, zadržaće ga svojom težinom i most se neće podići tj. takmičar će moći nesmetano da pređe most. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
npr: t=15, p=20, n=25, čekanje je 0s
npr: t=15, p=10, n=12, čekanje je 7s
*/

function igreBezGranica(t, p, n) {
    if(t<p || t>p+n) {
        console.log(`Cekanje je 0s`);
    }
    else {
        let cekanje = p + n - t;
        console.log(`Takmicar je potrebno da saceka ${cekanje} sekunde`);
    }
}

igreBezGranica(15, 10, 12);