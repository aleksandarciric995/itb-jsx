// OVO JE SAMOSTALNO VEZBANJE NAKON CASA

let getJSON = resource => {
    let request = new XMLHttpRequest();
    request.open(`GET`, resource);
    request.send();

    return new Promise((resolve, reject) => {
        request.addEventListener(`readystatechange`, e => {
            if(request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState == 4) {
                reject(`Nesto ne valja.`);
            }
        });
    });
}

getJSON(`../JSON/prvi.json`).then(sadrzaj => {
    console.log(`prvi niz`, sadrzaj);
    return getJSON(`../JSON/drugi.json`);
}).then(sadrzaj => {
    console.log(`drugi niz`, sadrzaj);
    return getJSON(`../JSON/treci.json`);
}).then(sadrzaj => {
    console.log(`treci niz`, sadrzaj);
}).catch(err => {
    console.log(err);
});

