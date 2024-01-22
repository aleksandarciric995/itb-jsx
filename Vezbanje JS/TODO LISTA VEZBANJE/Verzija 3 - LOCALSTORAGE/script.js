let sviLi = document.querySelectorAll(`li`);
let ulLista = document.querySelector(`ul`);
let btnDodaj = document.getElementById(`btnDodaj`);
let inputDodaj = document.getElementById(`inputDodaj`);
let radioBottom = document.getElementById(`bottom`);
let radioTop = document.getElementById(`top`);

// LS
let nizZadataka = [];
if(localStorage.getItem(`zadaci`) == null) {
    localStorage.setItem(`zadaci`, JSON.stringify(nizZadataka));
}
else {
    nizZadataka = JSON.parse(localStorage.getItem(`zadaci`));
    nizZadataka.forEach(z => {
        let noviLi = document.createElement(`li`);
        noviLi.textContent = z;
        ulLista.append(noviLi);
    });
}

ulLista.addEventListener(`click`, e => {
    e.preventDefault();
    if(e.target.tagName == `LI`) {
        let indexElementa = nizZadataka.indexOf(e.target.textContent);
        nizZadataka.splice(indexElementa, 1);
        e.target.remove();
        localStorage.setItem(`zadaci`, JSON.stringify(nizZadataka));
    }
});

inputDodaj.addEventListener(`keypress`, e => {
    if(e.keyCode == `13`){
        e.preventDefault();
        if(inputDodaj.value.trim() != ``) {
            if(radioBottom.checked) {
                let noviLi = document.createElement(`li`);
                noviLi.textContent = inputDodaj.value;
                ulLista.append(noviLi);
                nizZadataka.push(inputDodaj.value);
                inputDodaj.value = ``;
            }
            else {
                let noviLi = document.createElement(`li`);
                noviLi.textContent = inputDodaj.value;
                ulLista.prepend(noviLi);
                nizZadataka.unshift(inputDodaj.value);
                inputDodaj.value = ``;
            }
        }
        localStorage.setItem(`zadaci`, JSON.stringify(nizZadataka));
    }
});