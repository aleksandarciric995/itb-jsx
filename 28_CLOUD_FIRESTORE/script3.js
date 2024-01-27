let datum1 = new Date(`2024-01-26 17:00:00`);
let datum2 = new Date(`2024-01-26 21:00:00`);
/*
db.collection(`tasks`) // ako idemo preko .doc onda je metoda set(), ako idemo preko kolekcije onda je metoda .add()
.add({ // OVO KREIRA DOKUMENT SA AUTOMATSKI GENERISANIM ID
    title: `Cas ITBootcamp`,
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: `Cas iz baza podataka`
})
.then(() => {
    console.log(`Uspesno dodat task`);
})
.catch(e => {
    console.log(`Greska ${e}`);
});
*/
// doc(`...`).set() -> kompletno menja (`gazi`) sadrzaj dokumenta
//  doc(`...`).update() -> menja sadrzaj postojecih polja
/*
db.collection(`users`).doc(`cust04`)
.update({
    age: 28
})
.then(() => {
    console.log(`Uspesno promenjene godine.`);
})
.catch(e => {
    console.log(`Greska ${e}`);
});
*/

////////////////// zadatak ////////////////////

let test = {
    name: `Lord of the rings: The fellowship of the ring`,
    director: {
        name: `Peter`,
        surname: `Jackson`
    },
    release_year: 2001,
    genres: [`Fantasy`, `Film`],
    rating: 9.99
}

let test2 = {
    name: `Lord of the rings2`,
    director: {
        name: `Peter`,
        surname: `Jackson`
    },
    release_year: 2001,
    genres: [`Fantasy`, `Film`],
    rating: 7.99
}

let test3 = {
    name: `Lord of the rings3`,
    director: {
        name: `Peter`,
        surname: `Jackson`
    },
    release_year: 2001,
    genres: [`Fantasy`, `Film`],
    rating: 8.99
}
/*
db.collection(`movies`).doc(`lotr1`)
.set({
    name: `Lord of the rings: The fellowship of the ring`,
    director: {
        name: `Peter`,
        surname: `Jackson`
    },
    release_year: 2001,
    genres: [`Fantasy`, `Film`],
    rating: 9.99
})
.then(() => {
    console.log(`Uspesno dodat film!`);
})
.catch(e => {
    console.log(`Greska ${e}`);
});
*/
db.collection(`movies`).doc(`lotr1`)
.set(test)
.then(() => {
    console.log(`Uspesno dodat film!`);
})
.catch(e => {
    console.log(`Greska ${e}`);
});
db.collection(`movies`).doc(`lotr2`)
.set(test2)
.then(() => {
    console.log(`Uspesno dodat film!`);
})
.catch(e => {
    console.log(`Greska ${e}`);
});
db.collection(`movies`).doc(`lotr3`)
.set(test3)
.then(() => {
    console.log(`Uspesno dodat film!`);
})
.catch(e => {
    console.log(`Greska ${e}`);
});

db.collection(`movies`).doc(`lotr1`)
.update({
    name: `Lord of the rings 1`
})
.then(() => {
    console.log(`Uspesno izmenjen naziv filma!`);
})
.catch(e => {
    console.log(`Greska: ${e}`);
})

db.doc(`movies/lotr1`)
.update({
    genres: firebase.firestore.FieldValue.arrayUnion(`Test`)
})
.then(() => {
    console.log(`Genres izmenjen`);
})
.catch(e => {
    console.log(`Ne radi ${e}`);
});

/*
class Movie {
  constructor(n, d, y, g, r) {
    this.name = n;
    this.director = d;
    this.releaseYear = y;
    this.genres = g;
    this.rating = r;
  }
}
let movie1 = new Movie(
  "Film1",
  { name: "Ime1", surname: "Prezime1" },
  2023,
  ["Action", "Comedy"],
  5.5
);
let movie2 = new Movie(
  "Film2",
  { name: "Ime2", surname: "Prezime2" },
  2014,
  ["Horror"],
  7.0
);
let movies = [movie1, movie2];
function addMovie(arr) {
  for (let i = 0; i < movies.length; i++) {
    db.collection("movies")
      .doc(`movie${i + 1}`)
      .set(Object.assign({}, movies[i]))
      .then(() => {
        console.log("Movie added successfully");
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
      });
  }
}
addMovie(movies);
db.collection("movies")
  .doc("movie1")
  .update({
    rating: 5.8,
  })
  .then(() => {
    console.log("Rading updated successfully");
  })
  .catch((e) => {
    console.log(`Error: ${e}`);
  });
*/



/*
db.collection("movies").doc("film1")
.set( {
    name: "Terminator2",
    release_year: 1991,
    director: {
        ime: "James",
        prezime: "Cammeron"
    },
    genres: ["action", "thriller", 'sf'],
    rating: 9.2,
})
.then(() => {
    console.log("Movie added");
})
.catch((e) => {
    console.log(`Greska${e}`);
})
db.collection("movies").doc("film2")
.set( {
    name: "LOTR return of the king",
    release_year: 2003,
    director: {
        ime: "Peter",
        prezime: "Jackson"
    },
    genres: ["action", "fantasy",],
    rating: 9.5,
})
.then(() => {
    console.log("Movie added");
})
.catch((e) => {
    console.log(`Greska${e}`);
})
db.collection("movies").doc("film3")
.set( {
    name: "Star wars new hope",
    release_year: 1979,
    director: {
        ime: "George",
        prezime: "Lucas"
    },
    genres: ["comedy", "family", "SF"],
    rating: 8.2,
})
.then(() => {
    console.log("Movie added");
})
.catch((e) => {
    console.log(`Greska${e}`);
})
db.collection("movies").doc("film1")
.update ({
    rating: 9.8
})
.then(() => {
    console.log("Film izmenjen");
})
.catch((e) => {
    console.log(`Greska${e}`);
})
db.collection("movies").doc("film2")
.update ({
    genres : firebase.firestore.FieldValue.arrayUnion("family")
})
.then(() => {
    console.log("Dodat zanr");
})
.catch((e) => {
    console.log(`Greska${e}`);
})
*/

db.collection(`movies`).doc(`mov1`)
.set({
    name: `Citizen Kane`,
    director: {
        name: `Orson`,
        surname: `Welles`
    },
    release_year: 1941,
    genres: [`Drama`, `Mistery`, `Noir`],
    rating: 8.3
})
.then(() => {
    console.log(`Uspesno dodat film`);
    return db.collection(`movies`).doc(`mov1`)
    .update({ // .set .update i te metode su sve promisi i zato trebamo raditi return
        rating: 8.4
    });
})
.then(() => {
    console.log(`Uspesno azuriran rating`);
})
.catch(e => {
    console.log(`Greska ${e}`);
})

// Dohvatanje dokumenta
// OVAKO postoji sansa da vrati mov1 sa NEIZMENJENIN rejtingom, zavisi sta se prvo izvrsi - da bi se uzelo u obzir sigurno i izmena rejtinga, potrebno je get() ubaciti kao return unutra then f-je kod promene rejtinga
db.collection(`movies`).doc(`mov1`)
.get()
.then(doc => {
    if(doc.exists) {
        let data = doc.data();
        console.log(`Uspesno skinut dokument: ` + doc.id);
        console.log(data);
    }
    else {
        console.log(`Ne postoji ovaj dokument.`);
    }
})
.catch(e => {
    console.log(`Greska ${e}`);
});

// dohvatanje svih dokumenata iz kolekcije
db.collection(`customers`)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(doc.id, ` => `, data);
    });
})
.catch(e => {
    console.log(`Greska ${e}`);
});