let student = {
    ime: `Aleksandar`,
    prezime: `Ciric`,
    godinaStudija: 2,
    ocene: [10, 8, 9, 6, 7, 8, 9],
    ocene: [6, 9, 6, 9, 6, 9],
    prosecan: function prosecan() {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] == 6 || this.ocene[i] == 10) {
                return false;
            }
        }
        return true;
    },
    ekstra: function ekstra() {
        let devetke = 0;
        let desetke = 0;
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 9) {
                return false;
            }
            if(this.ocene[i] == 9) {
                devetke++;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }
        if(desetke > devetke * 2) {
            return true;
        }
        else {
            return false;
        }
    },
    kida: function kida() {
        let devetke = 0;
        let desetke = 0;
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 9) {
                return false;
            }
            if(this.ocene[i] == 9) {
                devetke++;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }
        if(devetke < this.godinaStudija) {
            return true;
        }
        else {
            return false;
        }
    },
    razbija: function razbija() {
        let desetke = 0;
        if(this.godinaStudija == 1) {
            return false;
        }
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] == 10) {
                desetke++;
            }
            else {
                return false;
            }
        }
        if(desetke > 5 * (this.godinaStudija - 1)) {
            return true;
        }
        else { 
            return false;
        }
    },
    nepredvidiv: function nepredvidiv() {
        let brojac = 0;
        for(let i = 1; i < this.ocene.length; i++) {
            if(Math.abs(this.ocene[i] - this.ocene[i - 1]) > 2) {
                brojac++;
            }
        }
        if(brojac > 5) {
            return true;
        }
        else{
            return false;
        }
    },
    zadatakM: function zadatakM(n) {
        let zbir = 0;
        let brojac = 0;
        for(let i = this.ocene.length - n; i < this.ocene.length; i++) {
            zbir += this.ocene[i];
            brojac++;
        }
        return zbir / brojac;
    },
    veomaNepredvidiv: function veomaNepredvidiv() {
        for(let i = 1; i < this.ocene.length; i++) {
            if(Math.abs(this.ocene[i] - this.ocene[i - 1]) <= 2) {
                return false;
            }
        }
        return true;
    },
};

// a) Napisati metodu koja vraća true ukoliko je student prosečan, u suprotnm vraća false. Student je prosečan ako nema nijednu šesticu i nijednu desetku.
console.log(student.prosecan());

// b) Napisati metodu koja vraća true ukoliko je student ekstra, u suprotnm vraća false. Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. 
console.log(student.ekstra());

// c) Napisati metodu koja vraća true ukoliko student kida, u suprotnm vraća false. Student “kida” ako je polagao ispite samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. 
console.log(student.kida());

// d) Napisati metodu koja vraća true ukoliko student razbija, u suprotnm vraća false.  Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). 
console.log(student.razbija());

// n) Napisati metodu koja vraća true ukoliko je student nepredvidiv, u suprotnom vraća false. Student je nepredvidiv, ukoliko ima više od 5 ponavljanja situacije da se uzastopne ocene razlikuju za više od 2.
console.log(student.nepredvidiv());

// Napisati metodu kojoj se prosleđuje broj n, a ona vraća prosečnu ocenu za poslednjih n ispita koje je student položio (podrazumevati da je broj n manji od dužine niza ocena).
console.log(student.zadatakM(3));

// o) Napisati metodu koja vraća true ukoliko je student veoma nepredvidiv, u suprotnom vraća falase. Student je veoma nepredvidiv, ukoliko mu se sve uzastopne ocene razlikuju za više od 2.
console.log(student.veomaNepredvidiv());