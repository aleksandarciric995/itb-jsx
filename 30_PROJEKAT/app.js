import Chatroom from "./chat.js";
import ChatUI from "./ui.js";

//dom
const inputText = document.getElementById(`inputText`);
const inputUser = document.getElementById(`inputUser`);
const ulListaPoruka = document.getElementById(`ulListaPoruka`);
const btnSend = document.getElementById(`btnSend`);
const btnUser = document.getElementById(`btnUser`);
const prikazPoruka = document.getElementById(`prikazPoruka`);
const roomSelection = document.getElementById(`roomSelection`);
const generalRoom = document.getElementById(`generalRoom`);
const jsRoom = document.getElementById(`jsRoom`);
const homeworksRoom = document.getElementById(`homeworksRoom`);
const testsRoom = document.getElementById(`testsRoom`);
const btnColor = document.getElementById(`btnColor`);
const inputBoja = document.getElementById(`inputBoja`);
const trash = document.getElementsByClassName(`trash`);

// objekti
let soba = localStorage.getItem(`soba`);
let chatroom = new Chatroom(soba, `Seka`);
if(soba) {
    chatroom = new Chatroom(soba, `Seka`);
}
else {
    soba = localStorage.setItem(`soba`, `#general`);
}

chatroom = new Chatroom(soba, `Seka`);
let chatui = new ChatUI(ulListaPoruka);

// user1.addChat(`Cao`);
// user5.addChat(`ROOM TESTS`);

/* JELENIN NACIN sa CASA
// user1.addChat(`Zdravo svima`)
// .then(() => {
//     console.log(`Uspesno dodata poruka.`);
// })
// .catch((err) => {
//     console.log(`Doslo je do greske: ${err}`);
// });
*/

// OVO ISPOD JE TEST ZA TRY i CATCH
// user5.room = `#homeworks`;
// user5.addChats(`Rok za izradu je ponedeljak`);

// Ispis poruke u ul
function ispisPoruke(msg) {
    let poruka = document.createElement(`li`);
    poruka.textContent = msg.message;
    ulListaPoruka.append(poruka);
}

// FORMAT DATE 
/* OVO SADA POSTAJE METODA
// .padStart() funkcija za dodavanje 0 ispred jednocifrenog broja
function formatDate(date) {
    return `${date.getDate().toString().padStart(2, `0`)}.${(date.getMonth()+1).toString().padStart(2, `0`)}.${date.getFullYear()}. - ${date.getHours()}:${date.getMinutes()}`;
}
*/

// Ispis poruke u ul
/* OVO SADA POSTAJE METODA
function templateLi(msg) { // napravi ga posle sa spanovima i divovima kojima ces dati klase
    let poruka = document.createElement(`li`);
    poruka.innerHTML = 
    `
        <span class="username">${msg.username}</span>
        <span class="message">${msg.message}</span>
        <div class="datum">${formatDate(msg.created_at.toDate())}</div>
    `;
    // poruka.innerHTML =`<strong>${msg.username}:</strong> ${msg.message}<br>${formatDate(msg.created_at.toDate())}`;
    return poruka;
}
*/

// user5.getChats(data => {
//     templateLi(data);
// })


// user1.getChats(data => {
//     let poruka = document.createElement(`li`);
//     poruka.textContent = data.message;
//     ulListaPoruka.append(poruka);
// });

// user5.getChats(data => {
//     let poruka = document.createElement(`li`);
//     poruka.textContent = data.message;
//     ulListaPoruka.append(poruka);
// });



// user5.getChats(data => {
//     chatUI1.ul.append(templateLi(data));
// });
// Lokalna memorija
// localStorage.setItem(`user`, chatroom.username);
let username = `anonymous`;
if(localStorage.user) {
    username = localStorage.getItem(`user`);
}
chatroom.username = username;

// else {
//     chatroom.username = localStorage.getItem(`user`);
// }

if(localStorage.getItem(`soba`) === `#general`) {
    generalRoom.style.color = `red`;
}
else if(localStorage.getItem(`soba`) === `#js`) {
    jsRoom.style.color = `red`;
}
else if(localStorage.getItem(`soba`) === `#homeworks`) {
    homeworksRoom.style.color = `red`;
}
else if(localStorage.getItem(`soba`) === `#tests`) {
    testsRoom.style.color = `red`;
}


// Prikaz poruka na stranici
chatroom.getChats(data => {
    chatui.ul.append(chatui.templateLi(data));
    prikazPoruka.scrollTop = prikazPoruka.scrollHeight;
    // (chatui.templateLi(data));
});

// EVENT LISTENER
btnSend.addEventListener(`click`, e => {
    if(inputText.value.trim() == ``) {
        alert(`Sending empty messages is not possible.`);
        inputText.value = ``;
    }
    else {
        chatroom.addChat(inputText.value);
        inputText.value = ``;
    }
});

btnUser.addEventListener(`click`, e => {
    if(chatroom.username == inputUser.value) {
        let divIspis = document.createElement(`div`);
        divIspis.classList.add(`ispisUsername`);
        let porukaIspis = document.createElement(`span`);
        porukaIspis.textContent = `You are already logged in as ${chatroom.username}`;
        divIspis.append(porukaIspis);
        document.body.appendChild(divIspis);
        setTimeout(() => {
            document.body.removeChild(divIspis);
        }, 3000);
        inputUser.value = ``;
    }
    else if(inputUser.value.trim() == ``) {
        let divIspis = document.createElement(`div`);
        divIspis.classList.add(`ispisUsername`);
        let porukaIspis = document.createElement(`span`);
        porukaIspis.textContent = `Username must contain between 2 and 10 characters.`;
        divIspis.append(porukaIspis);
        document.body.appendChild(divIspis);
        setTimeout(() => {
            document.body.removeChild(divIspis);
        }, 3000);
        inputUser.value = ``;
    }
    else {
        let newUsername = inputUser.value;
        chatroom.username = newUsername;
        localStorage.setItem(`user`, chatroom.username);
        let divIspis = document.createElement(`div`);
        divIspis.classList.add(`ispisUsername`);
        let porukaIspis = document.createElement(`span`);
        porukaIspis.textContent = `New user: ${chatroom.username}`;
        divIspis.append(porukaIspis);
        document.body.appendChild(divIspis);
        setTimeout(() => {
            document.body.removeChild(divIspis);
        }, 3000);
        inputUser.value = ``;
        chatui.delete();
        chatroom.getChats(data => {
            chatui.ul.append(chatui.templateLi(data));
            prikazPoruka.scrollTop = prikazPoruka.scrollHeight;
        });
    }
});

roomSelection.addEventListener(`click`, e => {
    if(e.target.id === `generalRoom`) {
        soba = `#general`;
        localStorage.setItem(`soba`, soba);
        chatui.delete();
        chatroom.room = `#general`;
        chatroom.getChats(data => {
            chatui.ul.append(chatui.templateLi(data));
            prikazPoruka.scrollTop = prikazPoruka.scrollHeight;
        });
        generalRoom.style.color = `red`;
        jsRoom.style.color = `black`;
        homeworksRoom.style.color = `black`;
        testsRoom.style.color = `black`;
    }
    else if(e.target.id === `jsRoom`) {
        soba = `#js`;
        localStorage.setItem(`soba`, soba);
        chatui.delete();
        chatroom.room = `#js`;
        chatroom.getChats(data => {
            chatui.ul.append(chatui.templateLi(data));
            prikazPoruka.scrollTop = prikazPoruka.scrollHeight;
        });
        generalRoom.style.color = `black`;
        jsRoom.style.color = `red`;
        homeworksRoom.style.color = `black`;
        testsRoom.style.color = `black`;
    }
    else if(e.target.id === `homeworksRoom`) {
        soba = `#homeworks`;
        localStorage.setItem(`soba`, soba);
        chatui.delete();
        chatroom.room = `#homeworks`;
        chatroom.getChats(data => {
            chatui.ul.append(chatui.templateLi(data));
            prikazPoruka.scrollTop = prikazPoruka.scrollHeight;
        });
        generalRoom.style.color = `black`;
        jsRoom.style.color = `black`;
        homeworksRoom.style.color = `red`;
        testsRoom.style.color = `black`;
    }
    else if(e.target.id === `testsRoom`) {
        soba = `#tests`;
        localStorage.setItem(`soba`, soba);
        chatui.delete();
        chatroom.room = `#tests`;
        chatroom.getChats(data => {
            chatui.ul.append(chatui.templateLi(data));
            prikazPoruka.scrollTop = prikazPoruka.scrollHeight;
        });
        generalRoom.style.color = `black`;
        jsRoom.style.color = `black`;
        homeworksRoom.style.color = `black`;
        testsRoom.style.color = `red`;
    }
});

if(localStorage.getItem(`boja`)) {
    document.body.style.backgroundColor = localStorage.getItem(`boja`);
}

btnColor.addEventListener(`click`, e => {
    document.body.style.backgroundColor = inputBoja.value;
    localStorage.setItem(`boja`, inputBoja.value);
});

inputBoja.value = localStorage.getItem(`boja`);
