const form = document.querySelector(`#order`);
const capacity = document.querySelector(`#capacity`);
const div = document.querySelector(`#result`);

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

async function clickGetItems() {
    // kada napisem async, zamislimo da se nalazimo u .then u nekom promisu i ponasamo se sve vreme kao da je sve u redu
    //  ako nesto nije u redu bilo gde, ide u catch granu
    // prvi asinhron poziv
    let data1 = await getItemsReturnPromise(`json/stock.json`); // await ide ispred promisa (mora da ide ispred funkcije koja vraca Promise kako bi await radilo)
    // kod koji je ranije isao u then ide ispod await
    let nizArtikala = [];
    data1.forEach(artikal => {
        if(artikal.stock == 0) {
            nizArtikala.push(artikal.id);
        }
    });
    // drugi asinhron poziv
    let data2 = await getItemsReturnPromise(`json/weights.json`);
    let totalWeight = 0;
    data2.forEach(artikal => {
        if(nizArtikala.includes(artikal.id)) {
            totalWeight += artikal.weight;
        }
    });
    if(totalWeight <= Number(capacity.value)) {
        // treci asinhroni poziv
        let data3 = await getItemsReturnPromise(`json/prices.json`);
        let totalPrice = 0;
        data3.forEach(artikal => {
            if(nizArtikala.includes(artikal.id)) {
                totalPrice += artikal.price;
            }
        });
        return totalPrice;
    }
    else {
        return `Not enough capacity in the truck!!`;
    }
}

function submitFormVarijanta3(event) {
    event.preventDefault();
    clickGetItems() // jedino asinhrona funkcija moze da kaze await (cekaj asinhron poziv koji je definisan kroz promise)
    // kada pozovemo tu asinhronu F-ju, ona ima .then i .catch metode
    //  u .then stavljamo to sto vraca funkcija kada je sve ispravno, odnosno kada se sve zavrsi
    // u .catch funkcija stavlja ako se BILO GDE desila greska
    .then(data => { // ovo DATA koje se nalazi u .then jeste zapravo ono sto smo returnovali iz poslednjeg asinhronog poziva gore
        div.innerHTML = data;
    })
    .catch(err => {
        div.innerHTML = `Greska: ${err}`;
    });
}

form.addEventListener(`submit`, submitFormVarijanta3);
