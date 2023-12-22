let blog1 = {
    title: "HTML",
    content: "osnovni HTML tagovi",
    author: "Jelena",
    likes: 10,
    comments: true,
    komentari: [`Ne razumem ovo...`, `Hvala, super je!`]
};

console.log(blog1); // ispis objekta
console.log(typeof blog1);

// Ispis odredjene osobine
console.log(blog1.title);
console.log(blog1.author);
console.log(blog1[`content`]);

// izmena odredjene osobine
blog1.content = `HTML tabele`;
console.log(blog1[`content`]);
blog1[`content`] = `HTML liste`;
console.log(blog1.content);
blog1.likes = 7;
blog1.comments = false;
console.log(blog1);
console.log(blog1.komentari);
console.log(blog1.komentari[0]);
blog1.noviProperti = `cao`; // moze se dodati novi properti ovako
console.log(blog1);

let user1 = {
    username: `JelenaMatejic`,
    age: 29,
    blogs: [`Naredba grananja`, `Nizovi`, `Objekti`],
    nextAge: this.age + 1, // OVO NE MOZE DA SE PISE JER JS TO JOS UVEK NE ZNA
    login: function() {
        console.log(`Ulogovani ste.`);
        console.log(this);
    },
    logout: function() {
        console.log(`Izlogovani ste.`);
    },
    logBlogs: function() {
        this.blogs.forEach(element => {
            console.log(element);
        });
    },
    hello: function() {
        return `Hello ${this.username}`;
    }
};

console.log(user1);
user1.login();
user1.logout();
user1.logBlogs();
console.log(user1.hello());

user1.blogs.forEach(blog => {
    document.write(`<p>${blog}</p>`);
});

//////////////////////////////////////////////////

let dan1 = {
    datum: `2023/12/22`,
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [3, 4, 6, 7, 6, 4],
    // 1. metoda 
    prosecna: function() {
        let suma = 0;
        this.temperature.forEach(t => {
            suma += t;
        });
        return suma / this.temperature.length;
    },
    // 2. metoda
    brNatprosecnih: function() {
        let br = 0;
        let pros = this.prosecna();
        // ovo je preko foreach
        this.temperature.forEach(t => {
            if(t > pros) {
                br++;
            }
        });
        // a moze i preko for petlje
        return br;
    },
    // 3. metoda
    MaxTemp: function() {
        let max = this.temperature[0];
        this.temperature.forEach(t => {
            if(t > max) {
                max = t;
            }
        });
        return max;
    },
    brMaxTemp: function() {
        let br = 0;
        let max = this.MaxTemp();
        this.temperature.forEach(t => {
            if(t == max) {
                br++;
            }
        });
        return br;
    },
    // 3. ALI BEZ DVE FUNKCIJE
    /*
    brMaxTemp: function() {
        let br = 0;
        let maxTemp = this.temperature[0];
        this.temperature.forEach(t => {
            if(t > maxTemp) {
                maxTemp = t;
            }
        });
        this.temperatre.forEach(t => {
            if (t == maxTemp) {
                br++;
            }
        });
        return br;
    }
    */
    // 4.
    brTempIzmedjuDvaparam: function (t1, t2) {
        let br = 0;
        // Ciljano da u t1 bude manja vrednost, a u t2 veca vrednost
        // cilj: t1 < t2
        
        if(t1 > t2) {
            let pom = t1;
            t1 = t2;
            t2 = pom;
        }       
        this.temperature.forEach(t => {
            if(t1 < t && t < t2) {
                br++;
            }
        });
     return [t1, t2, br];
    },
    /*
resenje 4 sa casa
        većaodt1manjaodt2: function (t1, t2) {
        let brMerenja = 0;
        let većatemp = t1;
        let manjatemp = t2
        if (t2 > većatemp){
            većatemp = t2;
        }
        if (t1 < manjatemp){
            manjatemp = t1;
        }
        this.temperature.forEach(el => {
            if (el > manjatemp && el < većatemp){
                brMerenja++;
            }
        });
        return brMerenja;
    }
*/
// 5
    iznadProseka: function() {
        let brojIznadProseka = this.brNatprosecnih();
        if(brojIznadProseka > (this.temperature.length / 2)) {
            return true;
        }
        else{
            return false;
        }
    },
// 5 na Jelenin nacin
/*
    iznadProsekaUVeciniDana: function() {
        let brDana = this.brNatprosecnih();
        if(brDana > this.temperature.length / 2) {
            return true;
        }
        else {
            return false;
        }
    }
*/
/* Milkov nacin
// 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka.
    // U suprotnom vraća false.
    temperatureIznadProseka: function() {
        return (this.brNatprosecnih() > this.temperature.length / 2) ? true : false
    },
*/
    // temperature: [-1, -3, -6, 6],
// 6
    ledenDan: function() {
        let leden = true;
        this.temperature.forEach(t => {
            if(t > 0) {
                leden = false;
            }
        });    
        return leden;
    },
    /* 6 na Jelenin nacin
    1. pristup
    leden: function() {
        this.temperature.forEach(t => {
            let ledenDan = true;
            if(t > 0) {
                ledenDan = false;
            }
        });
        return ledenDan;
    }
    2. pristup
    leden: function() {
        for(let i = 0; i < this.temeprature.length; i++) {
            if(this.temperature[i] > 0) {
                return false;
            }
        }
        return true;
    }
    */

    // 8 metod
    nepovoljan: function() {
        for(let i = 0; i < this.temperature.length - 1; i ++) {
            if(Math.abs(this.temperature[i] - this.temperature[i + 1]) > 8) {
                return true;
            }
        }
        return false;
    }

};

console.log(`Prosecna temperatura je ${dan1.prosecna()}`);
console.log(`Broj natprosecnih temperatura je ${dan1.brNatprosecnih()}`);
console.log(`Max temp je ${dan1.MaxTemp()}`);
console.log(`Broj max temp je ${dan1.brMaxTemp()}`);
console.log(`Broj temp izmedju dva atributa ${dan1.brTempIzmedjuDvaparam(8, 6)}`);

// AKO HOCEMO DA  VRATIMO ATRIBUTE t1 i t2 IZ FUNKCIJE DA SE ISPISUJU U KONZOLI////////////
let vraceneVrednost = dan1.brTempIzmedjuDvaparam(7, 4);
console.log(vraceneVrednost, vraceneVrednost[0], vraceneVrednost[1], vraceneVrednost[2]);
console.log(`Broj temp izmedju dva atributa ${vraceneVrednost[0]} i ${vraceneVrednost[1]} je ${vraceneVrednost[2]}`);
///////////////////////////////////////////////

console.log(`Da li ima vise natprosecnih temperatura? ${dan1.iznadProseka()}`);
console.log(`Da li je dan bio leden? ${dan1.ledenDan()}`);
console.log(`Da li je dan nepovoljan? ${dan1.nepovoljan()}`);







