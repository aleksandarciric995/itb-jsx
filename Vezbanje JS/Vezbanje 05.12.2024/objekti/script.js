let dan1 = {
    datum: `2023/12/22`,
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [3, 4, 6, 7, 6, 4],
    temperature: [73, 61, -42],
    // 1
    prosecna: function prosecnaTemp() {
        let zbir = 0;
        this.temperature.forEach(t => {
            zbir += t;
        });
        return zbir / this.temperature.length;
    },
    // 2
    brojNatprosecnih: function brojNatprosecnihTemperatura() {
        let brojac = 0;
        this.temperature.forEach(t => {
            if(t > this.prosecna()) {
                brojac++;
            }
        })
        return brojac;
    },
    // 3 
    brojMaxTemperatura: function brMaxTemp() {
        let max = this.temperature[0];
        this.temperature.forEach(t => {
            if(t > max) {
                max = t;
            }
        });
        let brojMaxTemp = 0;
        this.temperature.forEach(t => {
            if(t == max) {
                brojMaxTemp++;
            }
        })
        return brojMaxTemp;
    }, 
    // 4
    zadatak4: function zadatak4(t1, t2) {
        let brojac = 0;
        // if(t1 > t2) {
        //     this.temperature.forEach(t => {
        //         if(t > t2 && t < t1) {
        //             brojac++;
        //         }
        //     });
        // }
        // else {
        //     this.temperature.forEach(t => {
        //         if(t < t2 && t > t1) {
        //             brojac++;
        //         }
        //     });
        // }
        // return brojac;
        // drugi nacin zanimljiv
        if(t1 > t2) {
            let pom = t1;
            t1 = t2;
            t2 = pom;
        }
        this.temperature.forEach(t => {
            if(t < t2 && t > t1) {
                brojac++;
            }
        });
        return brojac;
    },
    //5 
    iznadProseka: function tempIznadProseka() {
        let brojac = 0;
        this.temperature.forEach(t => {
            if(t > this.prosecna()) {
                brojac++;
            }
        });
        if(brojac > this.temperature.length / 2) {
            return true;
        }
        else {
            return false;
        }
    },
    //6 
    ledenDan: function leden() {
        let ledenDan = true;
        this.temperature.forEach(t => {
            if(t > 0) {
                ledenDan = false;
            }
        });
        return ledenDan;
    },
    //7
    tropski: function tropskiDan() {
        for(let i = 0; i < this.temperature.length; i++) {
            if(this.temperature[i] < 24) {
                return false;
            }
        }
        return true;
    },
    // 8   
    nepovoljan: function nepovoljanDan() {
        for(let i = 1; i < this.temperature.length; i++) {
            if(Math.abs(this.temperature[i] - this.temperature[i-1]) > 8) {
                return true;
            }
        }
        return false;
    },
    neuobicajen: function neuobicajenDan() {
        if(this.kisa == true && this.oblacno == true && this.sunce == true) {
            return true;
        }
        for(let i = 0; i < this.temperature.length; i++) {
            if(this.kisa == true && this.temperature[i] <  -5) {
                return true;
            }
            if(this.oblacno == true && this.temperature[i] > 25) {
                return true;
            }
        }
        return false;
    },
}

//1
console.log(dan1.prosecna());
//2
console.log(dan1.brojNatprosecnih());
//3
console.log(dan1.brojMaxTemperatura());
//4
console.log(dan1.zadatak4(9, 3));
//5
console.log(dan1.iznadProseka());
// 6
console.log(dan1.ledenDan());
// 7
console.log(dan1.tropski());
//8 
console.log(dan1.nepovoljan());
// 9
console.log(dan1.neuobicajen());
