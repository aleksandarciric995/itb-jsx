const request = new XMLHttpRequest();
request.addEventListener(`readystatechange`, () => {
    if(request.readyState == 4 && request.status == 200) {
        let data = JSON.parse(request.responseText)
        console.log(data);
        console.log(data[5]);
        console.log(data[5].title);
    }
    else if(request.readyState == 4) { // request.readyState == 4 ZNACI DA SMO DOBILI ODGOVOR OD SERVERA
        console.log(`Desila se greska.`);
    }
}); // PRVO!!!!! pisemo addEventListener pa tek onda "open" da bi se registrovala i ta promena
// API ENDPOINT je fakticki URL kojem se moze pristupitu zarad nekih informacija
//ovim dole se uspostavlja konekcija
request.open(`GET`, `https://jsonplaceholder.typicode.com//todos`); // samo se registrujemo da cemo na serveru da pristupamo na taj API endpoint
request.send(); // asinhrona funkcija
// ovim gore se uspostavlja konekcija

////////////////////////////// ZADACI /////////////////////////////////////////

// 1 Uspostaviti konekciju ka endpointu za users resurs: https://jsonplaceholder.typicode.com/users
// 2 Ispisati u konzoli one korisnike čiji website ima domen „.com“.


const request1 = new XMLHttpRequest();
request1.addEventListener(`readystatechange`, () => {
    if(request1.readyState == 4 && request1.status == 200) {
        console.log(`Zadatak 1 i 2`);
        let data = JSON.parse(request1.responseText);
        data.forEach(d => {
            if(d.website.includes(`.com`)) {
                console.log(d);
            }
        });
    }
    else if(request1.readyState == 4) {
        console.log(`Nesto ne valja.`);
    }
});
request1.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
request1.send();

// 3 Ispisati korisnike čije ime sadrži reč „Clementin“.

const request2 = new XMLHttpRequest();
request2.addEventListener(`readystatechange`, e => {
    if(request2.readyState == 4 && request2.status == 200) {
        console.log(`Zadatak 3`);
        let data = JSON.parse(request2.responseText);
        data.forEach(d => {
            if(d.name.includes(`Clementin`)) {
                console.log(d);
            }
        });
    }
    else if(request2.readyState == 4) {
        console.log(`Nesto ne valja.`);
    }
});
request2.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
request2.send();

// 4 Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 

const request3 = new XMLHttpRequest();
request3.addEventListener(`readystatechange`, () => {
    if(request3.readyState == 4 && request3.status == 200) {
        console.log(`Zadatak 4`);
        let data = JSON.parse(request3.responseText);
        data.forEach(d => {
            if(d.company.name.includes(`Group`) || d.company.name.includes(`LLC`)) {
                console.log(d);
            }
        });
    }
    else if(request3.readyState == 4) {
        console.log(`Nesto ne valja.`);
    }
});
request3.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
request3.send();

// 5 Ispisati sve različite gradove u kojima rade ovi korisnici.

const request4 = new XMLHttpRequest();
request4.addEventListener(`readystatechange`, e => {
    if(request4.readyState == 4 && request4.status == 200) {
        console.log(`Zadatak 5`);
        let data = JSON.parse(request4.responseText);
        console.log(data);
        let niz = [];
        for(let i = 0; i < data.length; i++) {
            if(niz.includes(data[i].address.city)) { // ovde sam mogao da kazem .includes === false; pa da uopste nemam else granu
                continue;
            }
            else {
                niz.push(data[i].address.city);
            }
        }
        console.log(niz);
    }
    else if(request4.readyState == 4) {
        console.log(`Nesto ne valja.`);
    }
});
request4.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
request4.send();

// 6 Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.

const request5 = new XMLHttpRequest();
request5.addEventListener(`readystatechange`, e => {
    if(request5.readyState == 4 && request5.status == 200) {
        console.log(`Zadatak 6`);
        let br = 0;
        let data = JSON.parse(request5.responseText);
        data.forEach(d => {
            if(d.address.geo.lat < 0 && d.address.geo.lng < 0) { // ovde sam trebao da pretvorim u brojeve geo.lat i geo.lng da bih se osigurao(JS bi trebao sam da uradi to, ali da se ne bi rizikovalo)
                br++;
            }
        });
        console.log(br);
    }
    else if(request5.readyState == 4) {
        console.log(`Nesto ne valja.`);
    }
});
request5.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
request5.send();

// RESENJA SA CASA
/*
//Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group", ili reč „LLC".
const request3 = new XMLHttpRequest();
request3.addEventListener("readystatechange", function () {
  if (request3.readyState === 4 && request3.status === 200) {
    let data = JSON.parse(request3.responseText);
    console.log("Cetvrti zadatak");
    data.forEach(user => {
      if (
        user.company.name.includes("Group") ||
        user.company.name.includes("LLC")
      ) {
        console.log(user);
      }
    });
  } else if (request3.readyState === 4) {
    console.log("Desila se greska");
  }
});

request3.open("GET", "https://jsonplaceholder.typicode.com/users");
request3.send();

// Ispisati sve različite gradove u kojima rade ovi korisnici.
const request4 = new XMLHttpRequest();
request4.addEventListener("readystatechange", function () {
  if (request4.readyState === 4 && request4.status === 200) {
    let data = JSON.parse(request4.responseText);
    console.log("Peti zadatak");

    let gradovi = [];
    data.forEach(user => {
      if (
        user.company.name.includes("Group") ||
        user.company.name.includes("LLC")
      ) {
        if (gradovi.includes(user.address.city) === false)
          gradovi.push(user.address.city);
      }
    });
    console.log(gradovi);
  } else if (request4.readyState === 4) {
    console.log("Desila se greska");
  }
});

request4.open("GET", "https://jsonplaceholder.typicode.com/users");
request4.send();

// Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
const request5 = new XMLHttpRequest();
request5.addEventListener("readystatechange", function () {
  if (request5.readyState === 4 && request5.status === 200) {
    let data = JSON.parse(request5.responseText);
    console.log("Sesti zadatak");

    let suma = 0;
    data.forEach(user => {
      if (
        Number(user.address.geo.lat) < 0 &&
        Number(user.address.geo.lng) < 0
      ) {
        suma++;
      }
    });
    console.log(suma);
  } else if (request5.readyState === 4) {
    console.log("Desila se greska");
  }
});

request5.open("GET", "https://jsonplaceholder.typicode.com/users");
request5.send();
*/