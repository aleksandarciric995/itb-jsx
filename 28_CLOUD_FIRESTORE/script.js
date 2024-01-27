const customers = `customers`;

console.log(db);

let users = db.collection(`users`);
console.log(users);

let d1 = users.doc(`aciric`);
console.log(d1);
let d2 = db.doc(`users/aciric`);
console.log(d2);

/*
    CRUD - Create, Read, Update, Delete
    Za pristup dokumentu:
    let doc = db.collection(`...`);.doc(`...`);
    Kod dokumenta imamo sledece metode:
    - doc.set(...) -> Create
    - doc.get(...) -> Read
    - doc.update(...) -> Update
    - doc.delete(...) -> Delete
    Sve ove 4 metode kao rezultat vracaju PROMISE (zato sto je ovo asinhron poziv (cekamo odgovor od servera))
    Nakon ovih poziva lancaju se .then() i .catch()
*/

// 1. Create (set) metoda
let cust1 = {
    name: `Mika`,
    age: 38,
    addresses: [`Loznica`, `Valjevo`],
    salary: 400.60
}; // JS objekat - na osnovu njega kreiramo dokument u bazi

db.collection(`customers`).doc(`cust1`)
.set(cust1)
.then(() => {
    document.body.innerHTML += `Korisnik dodat u bazu.`;
})
.catch(e => {
    document.body.innerHTML += `Greska: ${e}`;
});

/*
db.collection(customers).doc() // ako ostavimo prazno, automatski ID dodaje, i sa svakim refreshom dodaje novi dokument
.set({
    name: `Zika`,
    age: 22,
    addresses: [`Nis`],
    salary: 600.00
})
.then(() => {
    document.body.innerHTML += `Korisnik dodat u bazu.`;
})
.catch(e => {
    document.body.innerHTML += `Greska: ${e}`;
});
*/