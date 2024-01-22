let sviLi = document.querySelectorAll(`li`);
sviLi.forEach(l => {
    l.addEventListener(`click`, e => {
        e.preventDefault();
        l.classList.toggle(`precrtaj`);
    });
});