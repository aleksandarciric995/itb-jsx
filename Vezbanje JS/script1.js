// Odrediti indeks maksimalnog elementa celobrojnog niza.

let nizA = [1, 2, 5, 37, 3, 0, -1];

let indeksMaxElem = niz => {
    let max = niz[0];
    let index = 0;
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] > max) {
            max = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(indeksMaxElem(nizA));

// Odrediti indeks minimalnog elementa celobrojnog niza.

let indeksMinElem = niz => {
    let min = niz[0];
    let index = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] < min){
            min = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(indeksMinElem(nizA));

// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
nizA = [1, 2, 5, 37, 3, 0, -1];

let SrVr = niz => {
    let srvr = 0;
    let brojac = 0;
    for(var i = 0; i < niz.length; i++) {
        srvr += niz[i];
        brojac++;
    }
    return srvr / i;
}
console.log(SrVr(nizA));

let brElemVeciOdSrVr = niz => {
    let brojac = 0;
    for(let i = 0; i < niz.length; i++){
    if(niz[i] > SrVr(niz)) {
        brojac++;
    }
}
    return brojac;
}
console.log(brElemVeciOdSrVr(nizA));