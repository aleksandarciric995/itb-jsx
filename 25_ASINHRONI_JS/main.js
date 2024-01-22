function getUsers(resolve, reject) {
    const request = new XMLHttpRequest();
    request.addEventListener(`readystatechange`, function() {
        if(request.readyState === 4 && request.status === 200) {
            // sve OK
            // 1. dohvati podatke, pa ga PARSE pretvori u objekat (responseText je uvek string)
            let data = JSON.parse(request.responseText);
            // 2. pozovi callback funkciju koja obradjuje podatke
            resolve(data);
        }
        else if(request.readyState === 4) {
            // ako nije sve OK odnosno desila se greska
            reject(`Desila se greska.`);
        }
    });
    request.open(`GET`, "https://jsonplaceholder.typicode.com/users");
    request.send();
}
// fakticki gore imamo jednu asinhronu f-ju koja prihvata 2 f-je kao parametre

function zad2(niz) {
    niz.forEach(user => {
        if(user.website.includes(`.com`)) {
            document.body.innerHTML += user.website + `<br>`;
        } 
    });
};

function ispisStringa(str) {
    document.body.innerHTML += str + `<br>`;
}

// zadatak 2
getUsers(zad2, ispisStringa); // poziv funkcije getUsers
document.body.innerHTML += `1` + `<br>`;
document.body.innerHTML += `2` + `<br>`;

// zadatak 3 - preko arrow f-ja
getUsers(niz => {
    niz.forEach(user => {
        if(user.company.name.includes(`Group`) || user.company.name.includes(`LLC`)) {
            document.body.innerHTML += user.company.name + `<br>`;
        }
    });
}, poruka => {
    document.body.innerHTML += poruka + `br`;
});
