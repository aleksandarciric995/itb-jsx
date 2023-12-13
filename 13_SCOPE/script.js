let a = 10;
var b = 20; // ako napisemo samo b = 20; - isto je kao da smo napisali var b = 20;
const c = 30;
console.log(a, b, c);

a = 15; // let ne moze vise puta da se pise za istu promenljivu
var b = 25; // var moze vise puta da se pise za istu promenljivu
// c = 40; //CONST NIKADA NE MOZE PROMENITI VREDNOST i PRIJAVLJIVACE GRESKU
console.log(a, b);

if(true) { // if koji se uvek izvrsava
    let a = 50;
    var b = 70;
    console.log(a, b); // 50, 70
    if (true) {
        // let a = 25;
        console.log(a, b);
    }
}

console.log(a, b); // 15, 70