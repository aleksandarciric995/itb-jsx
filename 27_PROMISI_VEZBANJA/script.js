const form = document.querySelector(`#order`);
const capacity = document.querySelector(`#capacity`);
const div = document.querySelector(`#result`);

/*
1) Odrediti artikle koji vise nisu na stanju
2) Odrediti ukupnu tezinu svih tih artikala
3) Ako je ta tezina manja od kapaciteta kamiona, onda:
    3.1) Odrediti i ispisati ukupnu cenu svih tih artikala
    3.2) Inace, ispisati poruku da kamion nema trazeni kapacitet
*/

function getItems(resource, resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener(`readystatechange`, function() {
        if(request.readyState === 4 && request.status === 200) {
            // sve ok, obradi zahtev
            let data = JSON.parse(request.responseText);
            resolve(data); // funkcija radi nesto sa podacima koji sustigli sa servera
        }
        else if(request.readyState === 4) {
            // desila se neka greska (ALI je konekcija sa serverom u potpunosti postignuta i odgovor je stigao u celosti!)
            reject(`Desila se greska.`);
        }
    });
    request.open(`GET`, resource);
    request.send();
}

function submitFormVarijanta1(event) {
    event.preventDefault();
    // 1) Odrediti artikle koji vise nisu na stanju
    let nizArtikala = [];
    getItems(`json/stock.json`, (data) => {
        data.forEach(artikal => {
            if(artikal.stock == 0) {
                nizArtikala.push(artikal.id);
            }
        });
        // 2) Odrediti ukupnu tezinu svih tih artikala
        getItems(`./json/weights.json`, (data) => {
            let totalWeight = 0;
            data.forEach(artikal => {
                if(nizArtikala.includes(artikal.id)) {
                    totalWeight += artikal.weight;
                }
            });
            // 3) Ako je ta tezina manja od kapaciteta kamiona, onda:
            if(totalWeight <= Number(capacity.value)) {
            // 3.1) Odrediti i ispisati ukupnu cenu svih tih artikala
                getItems(`json/prices.json`, (data) => {
                    let totalPrice = 0;
                    data.forEach(artikal => {
                        if(nizArtikala.includes(artikal.id)) {
                            totalPrice += artikal.price;
                        }
                    });
                    div.innerHTML = `Total price of articles: ${totalPrice} RSD`;
                }, (msg) => {
                    div.innerHTML = msg;
                });
            }
            else {
                // 3.2) Inace, ispisati poruku da kamion nema trazeni kapacitet
                div.innerHTML = `Not enough capacity in truck.`;
            }
        }, (msg) => {
            div.innerHTML = msg;
        });
    }, (msg) => {
        div.innerHTML = msg;
    });
}

/*
Funkcija submitFormVarijanta1 je apsolutno tacna
Problemi: velika nepreglednost, jako tesko odrzavanje(callback hell)
Callback hell moze da se ublazi Promisima 
*/

form.addEventListener(`submit`, submitFormVarijanta1);

