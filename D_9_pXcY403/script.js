// Zadatak 1
/*
Napisati funkciju kojoj se prosleđuje ceo broj i string, a ona ispisuje taj string u paragrafu koji ima prosleđenu veličinu fonta.
*/

function zad1(broj, string) {
    document.write(`<p style="font-size: ${broj}px;">${string}</p>`)
}
zad1(56, `Tekst prvog zadatka.`);

// Zadatak 2
/*
Napraviti funkciju kojoj se prosleđuje n ceo broj veći od nule, jedan string koji će predstavljati boju, drugi string koji će takođe predstavljati boju i treći string koji će predstavljati putanju do neke slike.
Funkcija treba da na stranicu dodaje n puta sliku čiju smo putanju prosledili funkciji. Slikama koje su na parnim pozicijama postavljati okvir koji je obojen prvom prosleđenom bojom, slikama koje su na neparnim pozicijama postavljati okvir koji je obojen drugom prosleđenom bojom.
*/

function zad2(n, boja1, boja2, putanja) {
    let i = 1;
    while (i <= n) {
        if(i % 2 == 0) {
            document.write(`<img src="${putanja}" style="border: 1px solid ${boja1};">`)
        }
        else {
            document.write(`<img src="${putanja}" style="border: 1px solid ${boja2};">`)
        }
        i++;
    }
}

zad2(2, `red`, `blue`, `https://www.ikea.com/rs/sr/images/products/bjoerksta-slika-mona-liza__0809958_pe771199_s5.jpg`);