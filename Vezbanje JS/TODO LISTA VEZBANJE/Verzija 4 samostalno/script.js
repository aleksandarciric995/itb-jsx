let inputDodaj = document.getElementById(`inputDodaj`);
let btnDodaj = document.getElementById(`btnDodaj`);
let ulLista = document.querySelector(`ul`);
let radioBottom = document.getElementById(`bottom`);
let radioTop = document.getElementById(`top`);

let nizZadataka = [];

if(localStorage.getItem(`zadaci`) == null) {
    localStorage.setItem(`zadaci`, JSON.stringify(nizZadataka));
}
else {
    nizZadataka = JSON.parse(localStorage.getItem(`zadaci`));
}

ulLista.addEventListener(`click`, e => {
    if(e.target.tagName = `UL`) {
        let index = nizZadataka.indexOf(e.target.textContent);
        nizZadataka.splice(index, 1);
        e.target.remove();
        localStorage.setItem(`zadaci`, JSON.stringify(nizZadataka));
    }
});

btnDodaj.addEventListener(`click`, e => {
    e.preventDefault();
    if(inputDodaj.value.trim() == ``) {
        alert(`Upisite nesto`);
        inputDodaj.value = ``;
    }
    else {
        if(radioBottom.checked) {
            let noviLi = document.createElement(`li`);
            noviLi.textContent = inputDodaj.value;
            ulLista.append(noviLi);
            nizZadataka.push(noviLi.textContent);
            inputDodaj.value = ``;
        }
        else {
            let noviLi = document.createElement(`li`);
            noviLi.textContent = inputDodaj.value;
            ulLista.prepend(noviLi);
            nizZadataka.unshift(noviLi.textContent);
            inputDodaj.value = ``;
        }
        localStorage.setItem(`zadaci`, JSON.stringify(nizZadataka));
    }
});