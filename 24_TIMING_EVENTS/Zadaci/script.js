let btnStart = document.getElementById(`start`);
let btnStop = document.getElementById(`stop`);
let input = document.getElementById(`input`);


let brojac = 0;
let timer = null;

btnStart.addEventListener(`click`, function(e) {
    e.preventDefault();
    if (timer === null) {
        timer = setInterval(function() {
            input.value = brojac;
            brojac++;
        }, 1000)
    }
});


btnStop.addEventListener(`click`, function(e) {
    e.preventDefault();
    clearInterval(timer);
    timer = null;
});

// Jelenino resenje je da inputu u HTMLu da value = 0; pa izbegne da ima brojac nego pise samo input.value++; s tim sto je input.value STRING, ali ga JS konvertuje u broj kada damo opciju input.value++; 
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zadatak</title>
</head>
<body>
    <button type="button" id="btn1">Start count!</button>
    <input type="number" name="number" id="number" value="0">
    <button type="button" id="btn2">Stop count!</button>
    <script src="script.js"></script>
</body>
</html>
*/

/*
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const input = document.getElementById("number");
console.log(input.value);
let clock;
btn1.addEventListener("click", function(e) {
    e.preventDefault();
    if (clock === undefined) {
        clock = setInterval(() => {
            input.value++;
        }, 1000);
    }
});
btn2.addEventListener("click", function(e) {
    e.preventDefault();
    clearInterval(clock);
    clock = undefined;
});
*/
