let mojaFunkcija = callback => {
    callback();
};

mojaFunkcija(() => {
    console.log(`Callback funkcija okidanje`);
});

/////////////////////////////////////////////////////////////////////

let sabiranje = funkcija => {
    funkcija(4, 5);
}

sabiranje((a, b) => {
    console.log(a + b);
});

// 2. nacin
function stampajSumu(x, y) {
    console.log(x + y);
}

sabiranje(stampajSumu); // pozivam stampajSumu funkciju bez zagrada

/////////////////////////////////////////////////////////////////////

let racunaj = funkcija => {
    let rez = funkcija(100, 30);
    console.log(rez);
}

racunaj((a, b) => {
    return a - b;
});

racunaj((a, b) => {
    return a * b;
});