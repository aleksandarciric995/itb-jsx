let dan = {
    datum: `2024/01/07`,
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [5, 6, 8, 9, 11, 10, 9, 7, 6],
}
// a) prosecnaTemp kojoj se prosleđuje dan, a koja određuje i vraća prosečnu temperaturu izmerenu tog dana.
function prosecnaTemp(dan) {
    let zbir = 0;
    dan.temperature.forEach(t => {
        zbir += t;
    });
    return zbir / dan.temperature.length;
}

console.log(prosecnaTemp(dan));

// b) brojNatprosecnoMerenja kojoj se prosleđuje dan, a koja prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.

function brojNatprosecnoMerenja(dan) {
    let br = 0;
    dan.temperature.forEach(t => {
        if(t > prosecnaTemp(dan)) {
            br++;
        }
    });
    return br;
}

console.log(brojNatprosecnoMerenja(dan));

// Napisati funkciju brojMaxMerenja kojoj se prosleđuje dan, a koja prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.

function brojMaxMerenja(dan) {
    let max = 0;
    dan.temperature.forEach(t => {
        if(t > max) {
            max = t;
        }
    });
    console.log(max);
    let broj = 0;
    dan.temperature.forEach(t1 => {
        if(t1 == max) {
            broj++;
        }
    });
    return broj;
}

console.log(brojMaxMerenja(dan));

// d) Napisati funkciju brojMerenjaIzmedju kojoj se prosleđuje dan, kao i dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).

function brojMerenjaIzmedju(dan, t1, t2) {
    let broj = 0;
    if(t1 > t2) {
        let pomocna = t1;
        t1 = t2;
        t2 = pomocna;
    }
    dan.temperature.forEach(t => {
        if(t > t1 && t < t2) {
            broj++;
        }
    });
    return broj;
}

console.log(brojMerenjaIzmedju(dan, 3, 10));
console.log(brojMerenjaIzmedju(dan, 10, 3));

// e) Napisati funkciju natprosecnoTopao kojoj se prosleđuje dan, a koja vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 

function natprosecnoTopao(dan) {
    let broj = 0;
    dan.temperature.forEach(t => {
        if(t > prosecnaTemp(dan)) {
            broj++;
        }
    });
    if(broj > (dan.temperature.length / 2)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(natprosecnoTopao(dan));


