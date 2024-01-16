// 2 Dohvatiti sve <li> elemente sa stranice.
let liZadaci = document.querySelectorAll(`li`);
/* 3 
Svakom <li> elementu iz liste dodati Event Listener
(Hint: proći petljom po listi <li> elemenata koje ste dohvatili i svakom od njih dodati Event Listener)
4 Kada se klikne na <li> precrtati tekst 
u elementu na koji je kliknuto
5 Kada se ponovo klikne na precrtani 
<li> element, „otprecrtati ga“
*/
liZadaci.forEach(e => {
    e.addEventListener(`click`, () => {
        // 1. nacin
        if (e.style.textDecoration == `line-through`) {
            e.style.textDecoration = `none`;
        } 
        else {
            e.style.textDecoration = `line-through`;
        }
        // 2. nacin
        // e.classList.toggle(`precrtan`);
    })

});
