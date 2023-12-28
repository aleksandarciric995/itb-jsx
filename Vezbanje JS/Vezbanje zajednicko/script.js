Student = {
    ime: `Aleksandar`,
    prezime: `Ciric`,
    godinaStudija: 3,
    ocene: [6, 8, 10, 9, 6, 7, 7, 9, 10, 8, 9],
    // ocene: [10, 10, 10, 10, 10, 10, 10, 10],
    // ocene: [6, 7, 7, 8],
    ocene: [7, 6, 9, 8, 10, 7, 8, 6, 9, 10, 7],
    // ocene: [7, 7],
    prosecanStudnet: function() {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] == 6 || this.ocene[i] == 10) {
                return false;
            }
        }
        return true;
    },
    extraStudent: function() {
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
                desetke++
            }
        }
        if(desetke / devetke >= 2) {
            return true;
        }
        else {
            return false;
        }
    },
    kida: function() {
        let devetke = 0;
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 9) {
                return false;
            }
            if(this.ocene[i] == 9) {
                devetke++;
            }
        }
        if(devetke < this.godinaStudija) {
            return true;
        }
        else {
            return false;
        }
    },
    razbija: function() {
        let desetke = 0;
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < 10) {
                return false;
            }
            if(this.ocene[i] == 10) {
                desetke++;
            }
        }
        if(this.godinaStudija == 1) {
            return false;
        }
        else{
            if((desetke > (5 * (this.godinaStudija - 1)))) {
                return true;
            }
            else{
                return false;
            }
        }
    },
    aljkav: function() {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] > 7) {
                return false;
            }
        }
        return true;
    },
    bruka: function() {
        let brukica = `true`;
        if(this.godinaStudija == 1) {
            brukica = false;
        }
        if(this.ocene.length < (3 * (this.godinaStudija - 1))) {
            brukica = true;
        }
        else {
            for(let i = 0; i < this.ocene.length; i++) {
                if(this.ocene[i] < 7) {
                    brukica = true;
                }
                else {
                    brukica = false;
                }
            }
        }
        return brukica;
    },
    kolekcionar: function() {
     let sest = 0;
     let sedam = 0;
     let osam = 0;
     let devet = 0;
     let deset = 0;
     for(let i = 0; i < this.ocene.length; i++) {
        if(this.ocene[i] == 6) {
            sest++;
        }
        if(this.ocene[i] == 7) {
            sedam++;
        }
        if(this.ocene[i] == 8) {
            osam++;
        }
        if(this.ocene[i] == 9) {
            devet++;
        }
        if(this.ocene[i] == 10) {
            deset++;
        }
     }
     if(sest >= 1 && sedam >= 1 && osam >= 1 && devet >= 1 && deset >= 1) {
        return true;
     }
     else {
        return false;
     }
    },
    skoroPaSavrsen: function() {
        if(this.ocene.length > 8) {
            let desetke = 0;
            for(let i = 0; i < this.ocene.length; i++) {
                if(this.ocene[i] == 10) {
                    desetke++;
                }
            }
            if(desetke > (0.9 * this.ocene.length)) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    },
    napreduje: function() {
        let suma1 = 0;
        let suma2 = 0;
        let prosek1 = 0;
        let prosek2 = 0;
        if(this.ocene.length % 2 == 0) {
            for(let i = 0; i < (this.ocene.length / 2); i++) {
                suma1 += this.ocene[i];
            }
            prosek1 = suma1 / (this.ocene.length / 2);
            for(let i = this.ocene.length / 2; i < this.ocene.length; i++) {
                suma2 += this.ocene[i];
            }
            prosek2 = suma2 / (this.ocene.length / 2);
        }
        else {
            for(let i = 0; i < (this.ocene.length - 1) / 2; i++) {
                suma1 += this.ocene[i];
            }
            prosek1 = suma1 / ((this.ocene.length - 1) / 2);
            for(let i = (this.ocene.length - 1) / 2; i < this.ocene.length; i++) {
            suma2 += this.ocene[i];
            }
            prosek2 = suma2 / (Math.ceil(this.ocene.length / 2));
        }
        console.log([[prosek1, prosek2]]);
        if(prosek2 > prosek1) {
            return true;
        }
        else {
            return false;
        }
    },
    najvecaRazlikaUzastopnih: function() {
        let razlika = 0;
        for(let i = 1; i < this.ocene.length; i++) {
            if(Math.abs(this.ocene[i] - this.ocene[i-1]) > razlika) {
                razlika = Math.abs(this.ocene[i] - this.ocene[i-1]);
            }
        }
        return razlika;
    },
    najvecaRazlika: function() {
        let max = this.ocene[0];
        let min = this.ocene[0];
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] > max) {
                max = this.ocene[i];
            }
        }
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] < min) {
                min = this.ocene[i];
            }
        }
        return max - min;
    },
    najcescaOcena: function() {
        let sest = 0;
        let sedam = 0;
        let osam = 0;
        let devet = 0;
        let deset = 0;
        for(let i = 0; i < this.ocene.length; i++) {
           if(this.ocene[i] == 6) {
               sest++;
           }
           if(this.ocene[i] == 7) {
               sedam++;
           }
           if(this.ocene[i] == 8) {
               osam++;
           }
           if(this.ocene[i] == 9) {
               devet++;
           }
           if(this.ocene[i] == 10) {
               deset++;
           }
        }
        let nizOcena = [sest, sedam, osam, devet, deset];
        let max = nizOcena[0];
        let index = 0;
        for(let i = 1; i < nizOcena.length; i++) {
            if(max < nizOcena[i]) {
                max = nizOcena[i];
                index = i;
            }
        }
        if(index == 0) {
            return `Sest`;
        }
        if(index == 1) {
            return `Sedam`;
        }
        if(index == 2) {
            return `Osam`;
        }
        if(index == 3) {
            return `Devet`;
        }
        if(index == 4) {
            return `Deset`;
        }
    },
    prosecnaOcenaZaNispita: function(n) {
        let suma = 0;
        for(let i = this.ocene.length - n; i < this.ocene.length; i++) {
            suma += this.ocene[i];
        }
        return suma / n;
    },
    nepredvidiv: function() {
        let brojacPonavljanja = 0;
        for(let i = 1; i < this.ocene.length; i++) {
            if((Math.abs(this.ocene[i] - this.ocene[i - 1])) > 2) {
                brojacPonavljanja++;
            }
        }
        if(brojacPonavljanja > 5) {
            return true;
        }
        else {
            return false;
        }
    },
    veomaNepredvidiv: function () {
        let brojacPonavljanja = 0;
        for(let i = 1; i < this.ocene.length; i++) {
            if((Math.abs(this.ocene[i] - this.ocene[i - 1])) > 2) {
                brojacPonavljanja++;
            }
        }
        if(brojacPonavljanja == (this.ocene.length - 1)) {
            return true;
        }
        else {
             return false;
        }
    },
    cudak: function() {
        for(let i = 0; i < this.ocene.length; i++) {
            if((this.ocene[i] != 6) && (this.ocene[i] != 10)) {
                console.log(this.ocene[i]);
                return false;
            }
        }
        return true;
    }
};

console.log(`Student je prosecan: ${Student.prosecanStudnet()}`);
console.log(`Student je extra: ${Student.extraStudent()}`);
console.log(`Student kida: ${Student.kida()}`);
console.log(`Student razbija: ${Student.razbija()}`);
console.log(`Student je aljkav: ${Student.aljkav()}`);
console.log(`Student se bruka: ${Student.bruka()}`);
console.log(3 * (Student.godinaStudija - 1));
console.log(Student.ocene.length);
console.log(`Student je kolekcionar: ${Student.kolekcionar()}`);
console.log(`Student je skoro pa savrsen: ${Student.skoroPaSavrsen()}`);
console.log(`Student napreduje: ${Student.napreduje()}`);
console.log(`Najveca razlika uzastopnih: ${Student.najvecaRazlikaUzastopnih()}`);
console.log(`Najveca razlika: ${Student.najvecaRazlika()}`);
console.log(`Najcesca ocena: ${Student.najcescaOcena()}`);
console.log(`Prosecna ocena za n ispita: ${Student.prosecnaOcenaZaNispita(5)}`);
console.log(`Student je nepredvidiv: ${Student.nepredvidiv()}`);
console.log(`Student je veoma nepredvidiv: ${Student.veomaNepredvidiv()}`);
console.log(`Student je cudak: ${Student.cudak()}`);

let niz = [1, 2, 3, 4];
console.log(niz[((niz.length)/2)]);
console.log(((niz.length - 1)/2) - 1);

// 2. ZADATAK

let = {
    destinacija: `Budimpesta`,
    brojPutnika: 111,
    brojMesta: 130,
    isplativ: function() {
        return (this.brojPutnika > (this.brojMesta / 2));
    }
};

console.log(let.isplativ());