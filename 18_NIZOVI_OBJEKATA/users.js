let blog1 = {
    title: `IF naredba grananja!`,
    likes: 50,
    dislikes: 21
};
let blog2 = {
    title: `While petlja`,
    likes: 25,
    dislikes: 36
};
let blog3 = {
    title: `For petlja`,
    likes: 100,
    dislikes: 12
};
let user1 = {
    username: `JohnDoe`,
    age: 29,
    blogs: [blog1, blog3],
    logBlogs: function () {
        this.blogs.forEach(el => {
            console.log(el.title);
        });
    }
};

let user2 = {
    username: `StefanStanimirovic`,
    age: 34,
    blogs: [blog2],
    logBlogs: function () {
        this.blogs.forEach(el => {
            console.log(el.title);
        });
    }
};

//////////////////////////////////////////////////

console.log(user1.blogs);
console.log(user1.blogs[0]);
console.log(user1.blogs[0].title);
console.log(user1.blogs[0][`title`]);
console.log(user1[`blogs`][0][`title`]);

user1.logBlogs();
user2.logBlogs();

// 1. ZADATAK
// Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
let users = [user1, user2];
console.log(users);

// Ispis username polja iz users niza
// Ispisati imena onih autora koji imaju ispod 18 godina

users.forEach(u => {
    console.log(u.username);
});

// Ispis svih naslova blogova koje su korisnici kreirali

users.forEach(u => {
        u.logBlogs()
    });


// Da nisam imao metodu logBlogs()
users.forEach(u => {
    let userBlogs = u.blogs; //niz blogova korisnika
    // Iteriram nizom objekata, gde je svaki objekat po jedan blog. Iz tog objekta blog mogu uzeti naslov
    userBlogs.forEach(b => {  // a moze umesto promenljive samo u.blogs.forEach
        console.log(b.title);
    });
});

// 3. ZADATAK
// Ispisati naslove onih blogova koji imaju više od 50 lajkova
console.log(`3. ZADATAK`);
users.forEach(u => {
    let userBlogs = u.blogs; // niz blogova korisnika
    userBlogs.forEach(b => {
        if(b.likes > 50) {
            console.log(b.title);
        }
    });
});

// 2. ZADATAK
// Ispisati imena onih autora koji imaju ispod 18 godina
console.log(`2. ZADATAK`);
users.forEach(u => {
    if(u.age < 18) {
        console.log(u.username);
    }
});

// 4. ZADATAK
// Ispisati sve blogove autora čiji je username ’JohnDoe’ - ne bas okej resenje, ovo donje je sa casa
console.log(`4. ZADATAK`);
users.forEach(u => {
    if(u.username == `JohnDoe`) {
        u.blogs.forEach(bl => {
            console.log(bl);
        });
    }
});
users.forEach(u => {
    if(u.username == `JohnDoe`) {
        u.logBlogs();
    }
});

// 5. ZADATAK
// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
console.log(`5. ZADATAK`);

users.forEach(u => {
    let sum = 0;
    u.blogs.forEach(bl => {
        sum += bl.likes;
    });
    if(sum > 100) {
        console.log(u.username);
    }
});

// 6. ZADATAK
// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
console.log(`6. ZADATAK`);
let sumaLajkova = 0;
let brojac = 0;
users.forEach(u => {
    u.blogs.forEach(b => {
        sumaLajkova += b.likes;
        brojac++;
    });
});
console.log(sumaLajkova);
console.log(brojac);
let prosekOcena = sumaLajkova / brojac;
console.log(prosekOcena);

users.forEach(u => {
    u.blogs.forEach(b => {
        if(b.likes > prosekOcena) {
            console.log(b.title);
        }
    });
});

// 7. ZADATAK
// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
console.log(`7. ZADATAK`);
let sumaDisLajkova = 0;
let brojacDislajkova = 0;
users.forEach(u => {
    u.blogs.forEach(b => {
        sumaDisLajkova += b.dislikes;
        brojacDislajkova++;
    });
});
let prosekDislajkova = sumaDisLajkova / brojacDislajkova;
console.log(sumaDisLajkova);
console.log(prosekDislajkova);

users.forEach(u => {
    u.blogs.forEach(b => {
        if(b.likes > prosekOcena && b.dislikes < prosekDislajkova) {
            console.log(b.title);
        }
    });
});