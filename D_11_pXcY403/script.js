// Zadatak 1
console.log(`ZADATAK 1`);

let nizTemperatura = [15, 17.5, 18.5, 20, 25, 28, 32, 29, 28, 25, 19, 12];

let zadatak1SrVr = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el        
    });
    return suma / niz.length;
}
console.log(`Srednja temperatura je ${zadatak1SrVr(nizTemperatura)}`);

let zadatak1 = niz => {
    let razlika = niz[0] - zadatak1SrVr(niz);
    let broj = niz[0];
    niz.forEach(el => {
        if(Math.abs(razlika) > Math.abs(el - zadatak1SrVr(niz))) {
            razlika = Math.abs(el - zadatak1SrVr(niz));
            broj = el;
        }
    });
    return broj;
}
console.log(`Temp najbliza srednjoj je ${zadatak1(nizTemperatura)}`);

// Zadatak 2
let maxVr = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if(el > max) {
            max = el;
        }
    });
    return max;
}

let minVr = niz => {
    let min = niz[0];
    niz.forEach(el => {
        if(el < min) {
            min = el;
        }
    });
    return min;
}

let zadatak2 = niz => {
    niz.forEach(el => {
        if(el == maxVr(niz)) {
            document.body.innerHTML += `<p style="color: red;">${el}</p>`
        }
        else if(el == minVr(niz)) {
            document.body.innerHTML += `<p style="color: blue;">${el}</p>`
        }
        else if(el == zadatak1(niz)) {
            document.body.innerHTML += `<p style="color: yellow;">${el}</p>`
        }
        else {
            document.body.innerHTML += `<p style="color: black;">${el}</p>`
        }
    });
};

zadatak2(nizTemperatura);