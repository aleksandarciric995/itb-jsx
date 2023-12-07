let i = 1;
while(i <= 5) {
    console.log(i);
    i++; // ili smo mogli reci i = i + 1; ili i += 1;
}

console.log(`Kraj petlje`);

// Isti zadatak samo na drugi nacin

i = 1;
while(i <= 5){
    console.log(i++);
}

// Isti zadatak samo na treci nacin
i = 0;
while(i < 5) {
    i++;
    console.log(i);
}

/* 

Pre petlje : i = 1;
1. ITERACIJA: log(1), i = 2;
2. ITERACIJA: log(2), i = 3;
3. ITERACIJA: log(3), i = 4;
4. ITERACIJA: log(4), i = 5;
5. ITERACIJA: log(5), i = 6;

*/

// VEZBE
console.log(`VEZBE`);

i = 20;
while(i > 0) {
    console.log(i--);
}

i = 1;


console.log(`VEZBA DRUGA`);

