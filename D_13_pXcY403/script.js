let knjiga1 = {
    naziv: `Mali Princ`,
    autor: `Antoan de Sent Egziperi`,
    putanja: `https://upload.wikimedia.org/wikipedia/sr/thumb/b/b6/Littleprincecover.JPG/220px-Littleprincecover.JPG`,
    procitana: true
};

let knjiga2 = {
    naziv: `Antigona`,
    autor: `Sofokle`,
    putanja: `https://dereta.rs/cached/dereta.rs/Images/Antigona0-1000x0-0000129200231216.jpg`,
    procitana: true
}

let knjiga3 = {
    naziv: `Rat i mir`,
    autor: `Lav Tolstoj`,
    putanja: `https://www.laguna.rs/_img/korice/5660/rat_i_mir_i_v.jpg`,
    procitana: false
}

let nizKnjiga = [knjiga1, knjiga2, knjiga3];

let tr = ``;
let tabela = niz => {
    niz.forEach(n => {
        tr += `<tr><td><img src="${n.putanja}"></td>`;
        tr += `<td><p>${n.naziv}, ${n.autor}</p></td></tr>`;
    });
}
tabela(nizKnjiga);
document.body.innerHTML += `<table>${tr}</table>`;

let bojenje = (niz) => {
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].procitana) {
            document.querySelectorAll(`tr:nth-of-type(${i + 1})`).forEach(tr => {
                tr.style.color = `blue`;
            });
        }
        else {
            document.querySelectorAll(`tr:nth-of-type(${i + 1})`).forEach(tr => {
                tr.style.color = `gray`;
            });
        }
    }
};
bojenje(nizKnjiga);

document.querySelectorAll(`td`).forEach(a => {
    a.style.border = `1px solid black`;
});
document.querySelectorAll(`img`).forEach(a => {
    a.style.width = `50%`;
});
document.querySelectorAll(`table`).forEach(a => {
    a.style.borderCollapse = `collapse`;
});


document.querySelectorAll(`tr:nth-of-type(even)`).forEach(a => {
    a.style.backgroundColor = `yellow`;
});
document.querySelectorAll(`tr:nth-of-type(odd)`).forEach(a => {
    a.style.backgroundColor = `purple`;
});


// Ovo ispod je drugi nacin za naizmenicno bojenje
// let test = () => {

//     for(let i = 0; i < document.querySelectorAll(`tr`).length; i++)
//     if(i % 2 == 0) {
//         document.querySelectorAll(`tr`)[i].style.backgroundColor = `red`;
//     }
//     else {
//         document.querySelectorAll(`tr`)[i].style.backgroundColor = `purple`;
//     }
// }
// test();