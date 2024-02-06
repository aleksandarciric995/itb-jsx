import Chatroom from "./chat.js";

const inputText = document.getElementById(`inputText`);
const inputUser = document.getElementById(`inputUser`);

let user1 = new Chatroom(`#general`, `Aca`);
let user2 = new Chatroom(`#general`, `Seka`);
let user3 = new Chatroom(`#general`, `Aca`);
let user4 = new Chatroom(`#general`, `Seka`);
let user5 = new Chatroom(`#tests`, `Seka`);

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

user1.getChats(data => {
    console.log(data);
});