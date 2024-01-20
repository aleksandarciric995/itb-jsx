let request = new XMLHttpRequest();
request.addEventListener(`readystatechange`, e => {
    if(request.readyState == 4 && request.status == 200) {
        let data = JSON.parse(request.responseText);
        let ukupno = 0;
        data.forEach(d => {
            ukupno += d.visina;
        });
        console.log(`Prosecna visina svih sportista je ${ukupno / data.length}cm`);
    }
    else if(request.readyState == 4) {
        console.log(`Nesto ne valja.`);
    }
});
request.open(`GET`, `sportisti.json`);
request.send();

///////////////////////////////////////////////////////////////////////////
let request2 = new XMLHttpRequest();
request2.addEventListener(`readystatechange`, e => {
    if(request2.readyState == 4 && request2.status == 200) {
        let data = JSON.parse(request2.responseText);   
        let min = data[0].timovi.length;
        let index = 0;
        data.forEach((d, i) => {
            if(d.timovi.length < min) {
                min = d.timovi.length;
                index = i;
            }
        });
        console.log(`Sportista sa najmanje transfera je ${data[index].imePrezime}`); // prvi sportista koji ima najmanje transfera, da sam stavio u if uslovu <= ispisao bi se poslednji sportista koji ima najmanje transfera
    }
    else if(request2.readyState == 4) {
        console.log(`Nesto ne valja.`);
    }
});
request2.open(`GET`, `sportisti.json`);
request2.send();

///////////////////////////////////////////////////////////////////////////
let request3 = new XMLHttpRequest();
request3.addEventListener(`readystatechange`, e => {
    if(request3.readyState == 4 && request3.status == 200) {
        let data = JSON.parse(request3.responseText);
        data.forEach(d => {
            d.timovi.forEach(t => {
                if(t == `Lakers`) {
                    console.log(`Sportista ${d.imePrezime} je igrao (ili igra) za Lakerse`);
                }
            });
        });
    }
    else if(request3.readyState == 4) {
        console.log(`Nesto ne valja.`);
    }
 });
request3.open(`GET`, `sportisti.json`);
request3.send();