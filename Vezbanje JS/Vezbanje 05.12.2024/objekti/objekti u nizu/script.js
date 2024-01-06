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
};

let user2 = {
    username: `StefanStanimirovic`,
    age: 34,
    blogs: [blog2],
};

let blogs = [blog1, blog2, blog3];
let users = [user1, user2];

console.log(blogs);
console.log(users);

// 1
let ukupanBrojLajkova = niz => {
    let suma = 0;
    niz.forEach(n => {
        suma += n.likes;
    })
    return suma;
}
console.log(ukupanBrojLajkova(blogs));
// 2
let prosecanBrojLajkova = niz => {
    return ukupanBrojLajkova(niz) / niz.length;
}
console.log(prosecanBrojLajkova(blogs));
// 3
let visePozOdNeg = niz => {
    niz.forEach(n => {
        if(n.likes > n.dislikes) {
            console.log(n.title);
        }
    });
}
visePozOdNeg(blogs);
// 4
let duploVise = niz => {
    niz.forEach(n => {
        if(n.likes > 2 * n.dislikes) {
            console.log(n.title);
        }
    });
}
duploVise(blogs);

// 5
let zavrsavaUzvicnikom = niz => {
    niz.forEach(n => {
        if(n.title[n.title.length-1] == `!`) {
            console.log(n.title);
        }            
    });
}
zavrsavaUzvicnikom(blogs);
// OBJEKTI U NIZU NIZOVI OBJEKATA ILI OBJEKTI U OBJEKTU
// 2
let godineAutora = niz => {
    niz.forEach(n => {
        if(n.age < 18) {
            console.log(n.username);
        }
    });
}
godineAutora(users);
// 3
function nasloviBlogovaViseOd50Lajkova(niz) {
    niz.forEach(u => {
        u.blogs.forEach(b => {
            if(b.likes > 50) {
                console.log(b.title);
            }
        });
    });
}
nasloviBlogovaViseOd50Lajkova(users);
//4  spisati sve blogove autora čiji je username ’JohnDoe’.
function JohnDoe(niz) {
    niz.forEach(n => {
        if(n.username == `JohnDoe`) {
            n.blogs.forEach(b => {
                console.log(b.title);
            });
        }
    });
}
JohnDoe(users);

// 5 Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
let autoriViseOd100Lajkova = niz => {
    niz.forEach(n => {
        let sumaLajkova = 0;
        n.blogs.forEach(b => {
            sumaLajkova += b.likes;
        });
        if(sumaLajkova > 100) {
            console.log(n.username);
        }
    });
}
autoriViseOd100Lajkova(users);

// 6 Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
let nasloviBlogovaSaViseOdProsekaPozOcena = niz => {
    let suma = 0;
    let brojac = 0;
    users.forEach(u => {
        u.blogs.forEach(b => {
            suma += b.likes;
            brojac++;
        })
    });
    niz.forEach(u => {
        u.blogs.forEach(b => {
            if(b.likes > suma / brojac) {
                console.log(b.title);
            }
        })
    });
}
nasloviBlogovaSaViseOdProsekaPozOcena(users);

// 7 Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
let zadatak7 = niz => {
    let suma = 0;
    let brojac = 0;
    niz.forEach(u => {
        u.blogs.forEach(b => {
            suma += b.likes;
            brojac++;
        })
    });
    console.log(suma / brojac);
    let negativnih = 0;
    niz.forEach(u => {
        u.blogs.forEach(b => {
            negativnih += b.dislikes;
        })
    });
    console.log(negativnih / brojac);
    niz.forEach(n => {
        n.blogs.forEach(b => {
            if(b.likes > (suma / brojac) && b.dislikes < (negativnih / brojac)) {
                console.log(b.title);
            }
        });
    });
}

zadatak7(users);

