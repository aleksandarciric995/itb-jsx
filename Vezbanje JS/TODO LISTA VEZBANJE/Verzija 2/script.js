let sviLi = document.querySelectorAll(`li`);
let ulLista = document.querySelector(`ul`);
let btnDodaj = document.getElementById(`btnDodaj`);
let inputDodaj = document.getElementById(`inputDodaj`);
let radioBottom = document.getElementById(`bottom`);
let radioTop = document.getElementById(`top`);

ulLista.addEventListener(`click`, e => {
    e.preventDefault();
    if(e.target.tagName == `LI`) {
        e.target.remove();
    }
})

inputDodaj.addEventListener(`keypress`, e => {
    if(e.keyCode == `13`){
        e.preventDefault();
        if(inputDodaj.value.trim() != ``) {
            if(radioBottom.checked) {
                let noviLi = document.createElement(`li`);
                noviLi.textContent = inputDodaj.value;
                ulLista.append(noviLi);
                inputDodaj.value = ``;
            }
            else {
                let noviLi = document.createElement(`li`);
                noviLi.textContent = inputDodaj.value;
                ulLista.prepend(noviLi);
                inputDodaj.value = ``;
            }
        }
        
    }
});