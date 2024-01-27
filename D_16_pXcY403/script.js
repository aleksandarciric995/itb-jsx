/*
Kreirati kolekciju movies u kojoj svaki dokument sadrži sledeća polja:
    Name (string),
    Director (objekat koji se sastoji od imena i prezimena režisera),
    Release_year (number),
    Genres (niz stringova),
    Rating (number – decimalni broj).

*/
/*
Napisati skript koji:
    Dodaje nekoliko filmova u bazu,
    Menja podatke o nekim filmovima u bazi,
    Dodaje žanr nekom filmu,
    Briše žanr nekom filmu,
    Menja ime ili prezime nekom režiseru.
*/

// Dodaje nekoliko filmova u bazu,
db.collection(`movies`).doc(`lotr1`)
.set({
    name: `Lord of the Rings: The Fellowship of the Ring`,
    director: {
        name: `Peter`,
        surname: `Jackson`
    },
    release_year: 2001,
    genres: [`Fantasy`, `Epic`],
    rating: 9.99
})
.then(() => {
    console.log(`Film dodat.`);
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

db.collection(`movies`).doc(`lotr2`)
.set({
    name: `Lord of the Rings: The Two Towers`,
    director: {
        name: `Peter`,
        surname: `Jackson`
    },
    release_year: 2002,
    genres: [`Fantasy`, `Epic`],
    rating: 8.99
})
.then(() => {
    console.log(`Film dodat.`);
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

db.collection(`movies`).doc(`lotr3`)
.set({
    name: `Lord of the Rings: The Return of the King`,
    director: {
        name: `Peter`,
        surname: `Jackson`
    },
    release_year: 2003,
    genres: [`Fantasy`, `Epic`],
    rating: 7.99
})
.then(() => {
    console.log(`Film dodat.`);
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

// Menja podatke o nekim filmovima u bazi,
db.doc(`movies/lotr1`)
.update({
    rating: 6.99
})
.then(() => {
    console.log(`Film apdejtovan.`);
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

db.doc(`movies/lotr2`)
.update({
    rating: 9.99
})
.then(() => {
    console.log(`Film apdejtovan.`);
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

// Dodaje žanr nekom filmu,
db.doc(`movies/lotr3`)
.update({
    genres: firebase.firestore.FieldValue.arrayUnion(`Family`)
})
.then(() => {
    console.log(`Zanr apdejtovan.`);
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

db.doc(`movies/lotr3`)
.update({
    genres: firebase.firestore.FieldValue.arrayUnion(`Comedy`)
})
.then(() => {
    console.log(`Zanr apdejtovan.`);
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

// Briše žanr nekom filmu,
db.doc(`movies/lotr3`)
.update({
    genres: firebase.firestore.FieldValue.arrayRemove(`Comedy`)
})
.then(() => {
    console.log(`Zanr apdejtovan.`);
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

// Menja ime ili prezime nekom režiseru.
db.doc(`movies/lotr3`)
.update({
    "director.name": `Test`
})
.then(() => {
    console.log(`Ime rezisera je apdejtovano.`);
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

db.doc(`movies/lotr3`)
.update({
    "director.name": `Peter`
})
.then(() => {
    console.log(`Ime rezisera je apdejtovano.`);
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

