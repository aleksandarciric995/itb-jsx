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

/////////////////////////////////////////////////////////////////////
//  DRUGI ZADATAK
const form2 = document.getElementById(`form2`);
const inputNaziv = document.getElementById(`inputText`);
const minKg = document.getElementById(`minKg`);
const maxKg = document.getElementById(`maxKg`);
const btnSubmit = document.getElementById(`btnSubmit`);
const div2 = document.getElementById(`div2`);

function getItems2(link) {
    return new Promise((resolve, reject) => {
        let reqeust2 = new XMLHttpRequest();
        reqeust2.addEventListener(`readystatechange`, function() {
            if(reqeust2.readyState === 4 && reqeust2.status === 200) {
                let data2 = JSON.parse(reqeust2.responseText);
                resolve(data2);
            }
            else if(reqeust2.readyState === 4) {
                reject(`Nesto nije okej.`);
            }
        });
        reqeust2.open(`GET`, link);
        reqeust2.send();
    });
}

btnSubmit.addEventListener(`click`, (e) => {
    div2.innerHTML = ``;
    // e.preventDefault();
    console.log(minKg.value);
    console.log(maxKg.value);
    if(Number(minKg.value) > Number(maxKg.value)) {
        console.log(minKg.value);
        console.log(maxKg.value);
        let pomocna = minKg.value;
        minKg.value = maxKg.value;
        maxKg.value = pomocna;
        console.log(pomocna);
    }
    console.log(minKg.value, maxKg.value);
    let nizArtikala2 = [];
    let nizImena = [];
    getItems2(`json/stock.json`)
    .then((data2) => {
        data2.forEach(d => {
            if(d.stock > 0) {
                nizArtikala2.push(d);
            }
        })
        nizArtikala2.forEach(n => {
            if(n.item.includes(inputNaziv.value)) {
                nizImena.push(n);
            }
        });
        nizImena.forEach(n => {
            console.log(n.item);
        });
        return getItems2(`json/prices.json`);
    })
    .then(data2 => {
        let nizArtikala3 = [];
        let nizPomocni = [];
        data2.forEach(d2 => {
            if(d2.price >= minKg.value && d2.price <= maxKg.value) {
                nizArtikala3.push(d2);
                nizPomocni.push(d2.id);
            }
        });
        console.log(nizPomocni);
        let nizEnd = [];
        let ulLista = document.createElement(`ul`);
        nizImena.forEach(n => {
            if(nizPomocni.includes(n.id)) {
                let liItem = document.createElement(`li`);
                nizEnd.push(n);
                liItem.textContent = n.item;
                ulLista.appendChild(liItem);
            }
        });
        for(let i = 0; i < nizEnd.length; i++) {
            nizEnd[i].price = nizArtikala3[i].price;
        }
        let table = document.createElement(`table`);
        let tr = document.createElement(`tr`);
        let td1 = document.createElement(`td`);
        td1.textContent = `Naziv`;
        let td2 = document.createElement(`td`);
        td2.textContent = `Stock`;
        let td3 = document.createElement(`td`);
        td3.textContent = `Cena`;
        tr.append(td1, td2, td3);
        table.append(tr);
        
        nizEnd.forEach(d => {
            let tr = document.createElement(`tr`);
            let td1 = document.createElement(`td`);
            td1.textContent = d.item;
            let td2 = document.createElement(`td`);
            td2.textContent = d.stock;
            let td3 = document.createElement(`td`);
            td3.textContent = d.price;
            tr.append(td1, td2, td3);
            table.append(tr);
        });
        div2.append(ulLista, table);
        console.log(nizEnd);
    }).catch((msg) => {
        div2.innerHTML = msg;
    });
});

