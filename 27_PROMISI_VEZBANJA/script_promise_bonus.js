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

function getItemsReturnPromise(resource) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener(`readystatechange`, function() {
            if(request.readyState === 4 && request.status === 200) {
                // sve ok, obradi zahtev
                let data = JSON.parse(request.responseText);
                resolve(data); // funkcija radi nesto sa podacima koji sustigli sa servera
            }
            else if(request.readyState === 4) {
                // desila se neka greska (ALI je konekcija sa serverom u potpunosti postignuta i odgovor je stigao u celosti! - samo sto taj odgovor NIJE dobar)
                reject(`Desila se greska.`);
            }
        });
        request.open(`GET`, resource);
        request.send();
    });
}

function submitFormVarijanta2(event) {
    event.preventDefault();
    let nizArtikala = [];
    getItemsReturnPromise(`json/stock.json`)
    .then(data => {
        data.forEach(artikal => {
            if(artikal.stock == 0) {
                nizArtikala.push(artikal.id);
            }
        });
        return getItemsReturnPromise(`json/weights.json`);
    })
    .then(data => {
        let totalWeight = 0;
        data.forEach(artikal => {
            if(nizArtikala.includes(artikal.id)) {
                totalWeight += artikal.weight;
            }
        });
        if(totalWeight <= Number(capacity.value)) {
            return getItemsReturnPromise(`json/prices.json`);
        }
        else {
            div.innerHTML = `Not enough capacity in the truck!`;
        }
    })
    .then(data => {
        if(data !== undefined) {
            let table = document.createElement(`table`);
            let totalPrice = 0;
            data.forEach(artikal => {
                if(nizArtikala.includes(artikal.id)) {
                    totalPrice += artikal.price;
                    let tr = document.createElement(`tr`);
                    let td1 = document.createElement(`td`);
                    let td2 = document.createElement(`td`);
                    td1.textContent = artikal.item;
                    td2.textContent = artikal.price;
                    tr.append(td1, td2);
                    table.append(tr);
                }
            });
            let tr = document.createElement(`tr`);
            let td1 = document.createElement(`td`);
            let td2 = document.createElement(`td`);
            td1.textContent = `UKUPNO`;
            td2.textContent = totalPrice;
            tr.append(td1, td2);
            table.append(tr);
            div.innerHTML = `Ukupna cena je: ${totalPrice}`;
            div.append(table);
        }
    })
    .catch(msg => {
        div.innerHTML = msg;
    });
}

form.addEventListener(`submit`, submitFormVarijanta2);

let text = document.createElement(`p`);
