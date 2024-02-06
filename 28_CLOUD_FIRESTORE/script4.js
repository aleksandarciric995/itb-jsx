/*
db.collection(`users`)
.orderBy(`name`, `desc`)
.orderBy(`age`, `asc`)  // OVO ASC JE PO DEFAULTU PARAMETAR, mozemo ga i ne napisati. Kada se ovako postavi, ovo drugo vazi za sve one koji imaju isto ime i sortira ih po rastucem redosledu
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatanje odredjenog broja dokumenta (limitiranje)
/*
db.collection(`users`)
.orderBy(`name`, `desc`)
.orderBy(`age`, `asc`) 
.limit(2) // dohvata 2 elementa
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatanje dokumenta koji zadovoljavaju odredjene uslove (filtriranje)

// Imaju platu veću ili jednaku od 500
/*
db.collection(`customers`)
.where(`salary`, `>=`, 500)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/
// Imaju platu između 300 i 800
/*
db.collection(`customers`)
.where(`salary`, `>=`, 300)
.where(`salary`, `<=`, 800)
// .limit(3) UVEK MOZEMO I DA LIMITIRAMO
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Imaju platu manju od 900, i imaju 30 godina,
/*
db.collection(`customers`)
.where(`salary`, `<=`, 900)
.where(`age`, `==`, 30)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// dohvati sve klijente koji imaju preko 25 godina sortirane po imenu
/*
db.collection(`customers`)
.where(`age`, `>`, 25)
.orderBy(`age`) // MORA da se doda, tako nam trazi baza podataka, tako prosto radi
.orderBy(`name`)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Imaju adresu u Nišu
/*
db.collection(`customers`)
.where(`addresses`, `array-contains`, `Nis`)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Imaju adresu u Nišu ili Beogradu 
/*
db.collection(`customers`)
.where(`addresses`, `array-contains-any`, [`Nis`, `Beograd`])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

//  Imaju 22, 25 ili 28 godina.
/*
db.collection(`customers`)
.where(`age`, `in`, [22, 25, 28])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.
/*
db.collection(`tasks`)
.orderBy(`title`)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Iz kolekcije tasks, pročitati sve zadatke, i koji:
/*
// Su prioritetni
db.collection(`tasks`)
.where(`priority`, `==`, true)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Treba da se izvrše u tekućoj godini,
/*
let datum = new Date();
let godina = datum.getFullYear();
let datum1 = new Date(godina, 0, 1);
let datum2 = new Date(godina + 1, 0 , 1);
let ts1 = firebase.firestore.Timestamp.fromDate(datum1); // timestamp je broj sekundi od 01.01.1970.
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);
db.collection(`tasks`)
.where(`dueDate`, `>=`, ts1)
.where(`dueDate`, `<`, ts2)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Su završeni
/*
let datum = new Date();
db.collection(`tasks`)
.where(`dueDate`, `<`, datum)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Tek treba da počnu.
/*
let datum = new Date();
db.collection(`tasks`)
.where(`startDate`, `>`, datum)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Iz kolekcije movies, pročitati sve filmove:
// Koje je režirao Peter Jackson
/*
db.collection(`movies`)
.where(`director.name`, `==`, `Peter`)
.where(`director.surname`, `==`, `Jackson`)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Čija je ocena između 5 i 10,
/*
db.collection(`movies`)
.where(`rating`, `>=`, 5)
.where(`rating`, `<=`, 10)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Kojima je žanr komedija, tragedija ili drama,
/*
db.collection(`movies`)
.where(`genres`, `array-contains-any`, [`Fantasy`, `Film`, `Test`])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Koji su izašli u 21. veku.
/*
// let datum = new Date(2001, 0, 1);
let niz = [];
db.collection(`movies`)
.where(`release_year`, `>=`, 2001)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
        niz.push(data);
    });
    /*
    // Prikazati sve informacije o najbolje rangiranom filmu.
    let max = niz[0].rating;
    let index = 0;
    niz.forEach((n, i) => {
        if(n.rating > max) {
            max = n.rating;
            index = i;
        }
    })
    console.log(niz[index]);
    // Prikazati sve informacije o najslabije rangiranoj fantasy.
    let nizFantasy = [];
    niz.forEach(n => {
        if(n.genres.includes(`Fantasy`)) {
            nizFantasy.push(n);
        }
    })
    let minFantasy = 
    nizFantasy.forEach((n, index) => {

    });
    console.log(nizFantasy);
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/
// Prikazati sve informacije o najbolje rangiranom filmu.
db.collection(`movies`)
.orderBy(`rating`, `desc`)
.limit(1)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});

// Prikazati sve informacije o najslabije rangiranoj drami.
db.collection(`movies`)
.where(`genres`, `in`, [`Fantasy`])
.orderBy(`rating`, `asc`)
.limit(1)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});