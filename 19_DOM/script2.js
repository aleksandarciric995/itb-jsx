document.querySelectorAll(`p`).forEach((a, i) => {
    if(i % 2 == 0) {
        a.classList.add(`error`);
    }
    else {
        a.classList.add(`success`);
    }
});

let textSize = [`15px`, `20px`, `25px`];
////////////////////////////////

document.querySelectorAll(`p`).forEach((a, i) => {
    a.style.fontSize = textSize[i % 3];
});

document.querySelectorAll(`p`).forEach(a => {
    if(a.textContent.includes(`error`)) {
        a.classList.add(`error`);
    }
    else if(a.textContent.includes(`success`)) {
        a.classList.add(`success`);
    }
});
document.querySelectorAll(`p`).forEach(a => {
    a.classList.toggle(`error`);
});

////////////////////////////////////
// Dodati novi div tag dokumenta
let noviDiv = document.createElement(`div`);
noviDiv.innerHTML = `Div kreiran u JS-u`;
noviDiv.style.backgroundColor = `green`;
document.body.appendChild(noviDiv);

let noviNaslov = document.createElement(`h3`);
noviNaslov.innerHTML = `Novi naslov`;
noviDiv.appendChild(noviNaslov);

// Formirati ul listu sa stavkama ciji je sadrzaj proizvoljan tekst, i dodati je div elementu
let lista = document.createElement(`ul`);
noviDiv.append(lista);
let li1 = document.createElement(`li`);
li1.innerHTML = `Prva stavka liste`;
let li2 = document.createElement(`li`);
li2.innerHTML = `Druga stavka liste`;
let li3 = document.createElement(`li`);
li3.innerHTML = `Treca stavka liste`;
lista.append(li1, li2, li3);

// Iz ul liste izbaciti prvu stavku
// lista.removeChild(li1);
// lista.removeChild(lista.firstChild);
lista.removeChild(lista.childNodes[0]);

let li4 = document.createElement(`li`);
li4.innerHTML = `Cetvrta stavka liste`;

// U ul listu zameniti drugu stavku liste.
lista.replaceChild(li4, li3);

// Dodati jos jednu stavku ul listi, pri cemu je sadrzaj stavke slika.
let li5 = document.createElement(`li`);
lista.appendChild(li5);
let slika = document.createElement(`img`);
slika.src = `https://media.geeksforgeeks.org/wp-content/uploads/20220315200206/nthoftypepng`;
slika.alt = `neka slika`;
li5.append(slika);


