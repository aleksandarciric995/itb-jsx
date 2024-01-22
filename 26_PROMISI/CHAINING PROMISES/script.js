let getJSON = resource => {

    const request = new XMLHttpRequest();     // 1. kreiranje XML objekta
    request.open(`GET`, resource);     // 2. Otvaramo kreirani zahtev
    request.send();  // 3. Slanje zahteva

    return new Promise((resolve, reject) => {
        request.addEventListener(`readystatechange`, () => {
            if(request.readyState == 4 && request.status == 200) {
                // Sve OK
                let data = JSON.parse(request.responseText)
                resolve(data);
            }
            else if(request.readyState == 4) {
                // Nesto nije OK
                reject(`Doslo je do greske.`);
            }
        }); 
    });
}
// promise vraca podatke ili gresku (resolve ili reject); resolve upada u .then granu a reject upada u .catch granu
getJSON(`../JSON/prvi.json`).then(sadrzaj => {
    console.log(`prvi.json`, sadrzaj); // Ako je prvi.json resolved ispisuje njegove podatke
    return getJSON(`../JSON/drugi.json`); // Vraca instancu Promise, koja moze imati .then i .catch
}).then(sadrzaj2 => {
    console.log(`drugi.json`, sadrzaj2); // Ako je drugi.json resolved onda ispisuje njegove podatke
    return getJSON(`../JSON/treci.json`);
}).then(sadrzaj3 => {
    console.log(`treci.json`, sadrzaj3); // Ako je treci.json resolved ispisuje njegove podatke
}).catch(greska => {
    console.log(`Rejected:`, greska); // ako je ma jedan fajl bio rejected, upada u catch granu
});

// getJSON(`../JSON/prvi.json`, (data, err) => {
//     if(data) {
//         console.log(data); // Sve proslo OK u prvi.json i vraca podatke (data) iz prvi.json
//         // Ako je sve bilo OK sa prvim fajlom, onda uzmi drugi.json fajl
//         getJSON(`../JSON/drugi.json`, (data, err) => {
//             if(data) {
//                 console.log(data); // Sve proslo OK u drugi.json i vraca podatke (data) iy drugi.json
//                 getJSON(`../JSON/treci.json`, (data, err) => {
//                     if(data) {
//                         console.log(data); // Sve proslo OK u treci.json
//                     }
//                     else {
//                         console.log(err); // Ispisuje gresku iz treci.json
//                     }
//                 });
//             }
//             else {
//                 console.log(err); // Ispisuje gresku iz drugi.json
//             }
//         });
//     }
//     else {
//         console.log(err); // Ispisuje gresku iz prvi.json
//     }
// });



console.log(`KRAJ FAJLA`);