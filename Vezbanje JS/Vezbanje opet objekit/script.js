student = {
    ime: `Aleksandar`,
    prezime: `Ciric`,
    godinaStudija: 3,
    ocene: [10, 8, 7, 7, 8, 6, 9, 8, 6, 8],
    ocene: [10, 9, 7, 8, 9, 9],
    ocene: [10, 7, 10, 10, 10, 10, 10],
    ocene: [7, 8, 6, 7],

    prosecan: function () {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] == 6 || this.ocene[i] == 10) {
                return false;
            }
        }
        return true;
    },

    ekstra: function () {
        let devetke = 0;
        let desetke = 0;
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] != 10 && this.ocene[i] != 9) {
                return false;
            }
            else if (this.ocene[i] == 10) {
                desetke++;
            }
            else if (this.ocene[i] ==  9) {
                devetke++;
            }
        }
        return (desetke >= (devetke * 2));
    },

    kida: function () {
        let devetke = 0;
        let desetke = 0;
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] != 10 && this.ocene[i] != 9) {
                return false;
            }
            else if (this.ocene[i] == 10) {
                desetke++;
            }
            else if (this.ocene[i] ==  9) {
                devetke++;
            }
        }
        return (devetke < this.godinaStudija);
    },
    
    razbija: function () {
        let desetke = 0;
        if(this.godinaStudija == 1) {
            return `Ne moze da razbija u prvoj godini.`
        }
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] != 10) {
                return false;
            }
            else if (this.ocene[i] == 10) {
                desetke++;
            }
        }
        console.log(desetke);
        return desetke > (5 * (this.godinaStudija - 1));
    },

    aljkav: function () {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.ocene[i] > 7) {
                return false;
            }
        }
        return true;
    },

    bruka: function() {
        for(let i = 0; i < this.ocene.length; i++) {
            if(this.godinaStudija == 1) {
                return false;
            }
            if(this.ocene.length < (3 * (this.godinaStudija - 1)) && this.ocene[i] < 7) {
                console.log(i);
                return true;
            }
        }
        return false;

    }
};

console.log(`prosecan: ${student.prosecan()}`);
console.log(`ekstra: ${student.ekstra()}`);
console.log(`kida: ${student.kida()}`);
console.log(`razbija: ${student.razbija()}`);
console.log(`aljkav: ${student.aljkav()}`);
console.log(`bruka: ${student.bruka()}`);
