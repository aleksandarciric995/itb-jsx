let dan1 = {
    datum: `2023/12/22`,
    kisa: true,
    sunce: false,
    oblacno: true,
    // temperature: [3, 4, 6, 7, 6, 4, 3],
    temperature: [3, 4, 6, 7, 6, 4, 3, 7, 7, 7],
};
let dan2 = {
    datum: `2023/12/23`,
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [13, 14, 16, 17, 16, 14, 12],
};
let dan3 = {
    datum: `2023/12/24`,
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-4, -3, 0, 3, 6, 7, 6, 4, 9, 10],
};

let dani = [dan1, dan2, dan3];

// 2
function najviseIzmerenihTemp(niz) {
    let max = 0;
    for(let i = 0; i < dani.length; i++) {
        if(dani[i].temperature.length > max) {
            max = dani[i].temperature.length;
        }        
    }
    return max;
}
console.log(najviseIzmerenihTemp(dani));
// 2a
function drugiPodA(niz) {
    for(let i = 0; i < dani.length; i++) {
        if(dani[i].temperature.length == najviseIzmerenihTemp(dani)) {
            console.log(dani[i].datum);
            break;
        }
    }
}
drugiPodA(dani);

// 2b
function drugiPodB(niz) {
    let index = 0;
    for(let i = 0; i < dani.length; i++) {
        if(dani[i].temperature.length >= najviseIzmerenihTemp(dani)) {
            index = i;
        }
    }
    return dani[index].datum;
}
console.log(drugiPodB(dani));

// 2b na drugi nacin
function drugiPodBnaDrugiNacin(niz) {
    for(let i = dani.length - 1; i >= 0; i--) {
        if(dani[i].temperature.length == najviseIzmerenihTemp(dani)) {
            console.log(dani[i].datum);
            break;
        }
    }
}
drugiPodBnaDrugiNacin(dani);

// 3
let zadatak3 = niz => {
    let suncaniDani = 0;
    let oblacniDani = 0;
    let kisniDani = 0;
    niz.forEach(d => {
        if(d.oblacno == true) {
            oblacniDani++;
        }
        if(d.sunce == true) {
            suncaniDani++;
        }
        if(d.kisa) {
            kisniDani++;
        }
    })
    console.log(kisniDani);
    console.log(suncaniDani);
    console.log(oblacniDani);
}
zadatak3(dani);

// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom
let zadatak4 = niz => {
    let brojac = 0;
    let ukupnaTemp = 0;
    niz.forEach(n => {
        n.temperature.forEach(t => {
            ukupnaTemp+=t;
            brojac++;
        });
    });
    let prosek = ukupnaTemp / brojac;
    let prosecnaTemp = prosek / niz.length;
    niz.forEach(n => {
        let lokalni = 0;
        let broj = 0;
        n.temperature.forEach(t => {
            lokalni += t;
            broj++;
        });
        if(lokalni / broj > prosecnaTemp) {
            console.log(n.datum);
        }
    });
}
zadatak4(dani);