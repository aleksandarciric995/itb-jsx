// Pamcenje/Upisivanje/Smestanje u lokalnoj memoriji
localStorage.setItem(`ime`, `Stefan`);
localStorage.setItem(`grad`, `Nis`);

// Izmena/Update u lokalnoj memoriji
localStorage.setItem(`grad`, `Leskovac`);
// Ukoliko postoji neki key u LS onda vrsi update
// Ukoliko ne postji neki key u LS, onda vrsi upis (novi unos)

// Preuzimanje iz lokalne memorije
let unetoIme = localStorage.getItem(`ime`);
console.log(unetoIme);
console.log(localStorage.getItem(`grad`));

console.log(localStorage.getItem(`godina`)); // vraca null jer kljuc godina ne postoji
localStorage.removeItem(`grad`); // brise iz LS po zadataom kljucu
