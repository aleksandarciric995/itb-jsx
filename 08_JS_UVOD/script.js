document.getElementById("d1").innerHTML = "Ja se zovem Aleksandar Ciric";

console.log("Zdravo");

console.log("Pera"); 
console.log("Mika");

console.log("It's alright!")
console.log(`It's alright!`)
console.log('It\'s alright!')
console.log("It\"s alright!")

// Literali

console.log(5);
console.log(-5.189);
console.log(3 + 4); // 7
console.log('3' + '4'); // konkatenacija (spajanje stringova)
console.log('3 + 4') // '3 + 4'
console.log('3 + 4 =', 3 + 4); // '3 + 4 = 7'
console.log('3 + 4 = ' + (3 + 4)); // 3 + 4 = 7
console.log('3 + 4 = ' + 3 + 4); // 3 + 4 = 34
console.log(true);
console.log(false);

// Promenljive

let x; // 1) deklaracija promenljive (uvodjenje promenljive u program) 
console.log(x);

x =  5;
console.log(x);

x = "Laza";
console.log(x);

let y = true;
console.log(y); // 2) definicija promenljive (deklaracija + dodela vrednosti)

const z = -7.6;
console.log(z);

let age;
console.log (age, age + 3); // undefinen, NaN (Not a Number)

age = null;
console.log(age, age + 3);  // null, 3

let broj = 3 + 4 * 2; // 11
console.log(broj);

broj = (3 + 4) * 2; // 14
console.log(broj);

// broj += 6;
// console.log(broj); // 20

broj = broj + 6; // JEDAN ZNAK JEDNAKOSTI ZNACI DODELA VREDNOSTI, A NE JEDNAKO JE!!!!!!
console.log(broj); // 14 (vrednost promenljive) + 6 = 20

broj *= 5; // broj = broj * 5;
console.log(broj); // 100

x = 6;
x++;
console.log(x); // 7

++x;
console.log(x); // 8

// MOZE I ++x i x++ ======== OBE POVECAVAJU x ZA JEDAN (-- ga smanjuje za 1)

x = 6;
console.log(x++); // post-increment (prvo se iskoristi stara vrednost promenljive pa se onda uveca) znaci ovde daje resenje 6
console.log(x); // a ovde daje resenje 7
console.log(++x); // 8 jer je ovo pre-increment

console.log(28 / 12);

// Kolicnik

console.log(Math.floor(28 / 12)); // = 2 - daje NAJBLIZI ceo broj

console.log(28 % 12); // = 4 - daje OSTATAK, cita se kao 28 PO MODULU 12 - odnosno OSTATAK PRI DELJENJU SA 12

console.log(7 % 3); // 1
console.log(24 % 18); // 6

x = 5;
y = 3;
console.log(x**y); // 125

