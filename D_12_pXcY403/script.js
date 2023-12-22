let dan = {
    temperature: [13, 15, 16, 17, 19, 20, 18, 17, 16, 12],
    // Prvi zadatak preko zadatih temp
    tropski: function() {
        for(let i = 0; i < this.temperature.length; i++) {
            if(this.temperature[i] < 24) {
                return false;
            }
        }
        return true;
    },

    // 2. nacin za samostalan unos temperatura
    tropski2: function(t) {
        for(let i = 0; i < t.length; i++) {
            if(t[i] < 24) {
                return false;
            }
        }
        return true;
    },

    // 3. nacin za samostalan unos temperatura preko forEach
    tropski3: function(temp) {
        let tropical = true;
        temp.forEach(t => {
            if(t < 24) {
                tropical = false;;
            }
        });       
        return tropical;
    },

    kisa: true,
    oblacno: false,
    suncano: true,

    // Drugi zadatak
    neuobicajen: function () {
        for(let i = 0; i < this.temperature.length; i++) {
            if((this.kisa == true && this.temperature[i] < -5) || (this.oblacno == true && this.temperature[i] > 25) || (this.kisa == true && this.oblacno == true && this.suncano == true)) {
            return true;
        }
        }
        return false;
    },

    // 2. nacin za samostalan unos kisa/oblacno/suncano
    neuobicajen2: function (kisa, oblacno, suncano) {
        for(let i = 0; i < this.temperature.length; i++) {
            if((kisa == true && this.temperature[i] < -5) || (oblacno == true && this.temperature[i] > 25) || (kisa == true && oblacno == true && suncano == true)) {
            return true;
        }
        }
        return false;
    },
    // 3. nacin za sasmostalan unos kisa/oblacno/suncano/temperatura
    neuobicajen3: function (kisa, oblacno, suncano, temp) {
        for(let i = 0; i < temp.length; i++) {
            if((kisa == true && temp[i] < -5) || (oblacno == true && temp[i] > 25) || (kisa == true && oblacno == true && suncano == true)) {
            return true;
        }
        }
        return false;
    }
};
console.log(`Temperature su tropske: ${dan.tropski()}`);
console.log(`Temperature su tropske2: ${dan.tropski2([24, 25, 26])}`);
console.log(`Temperature su tropske3: ${dan.tropski3([32, 42, 36])}`);
console.log(`Dan je neuobicajen: ${dan.neuobicajen()}`);
console.log(`Dan je neuobicajen 2: ${dan.neuobicajen2(true, false, false)}`);
console.log(`Dan je neuobicajen 3: ${dan.neuobicajen3(true, true, false, [2, 3, 5, 6, 9])}`);