class ChatUI {
    constructor(ul) {
        this.ul = ul;
    }
// seteri
    set ul(ul) {
        this._ul = ul; 
    }
// geteri
    get ul() {
        return this._ul;
    }

    // METODE
    formatDate(date) {
        let datum = new Date();
        let god = datum.getFullYear();
        let mesec = datum.getMonth();
        let dan = datum.getDate();
        if(date.getDate() == dan && date.getMonth() == mesec && date.getFullYear() == god) {
            return `${date.getHours().toString().padStart(2, `0`)}:${date.getMinutes().toString().padStart(2, `0`)}`; 
        }
        else {
            return `${date.getDate().toString().padStart(2, `0`)}.${(date.getMonth()+1).toString().padStart(2, `0`)}.${date.getFullYear()}. - ${date.getHours().toString().padStart(2, `0`)}:${date.getMinutes().toString().padStart(2, `0`)}`;
        }
    }

    // templateLi = (msg) => {
    //     let poruka = document.createElement(`li`);
    //     poruka.innerHTML = 
    //     `
    //         <span class="username">${msg.username}:</span>
    //         <span class="message">${msg.message}</span>
    //         <div class="datum">${this.formatDate(msg.created_at.toDate())}</div>
    //     `;
    //     return poruka;
    // }
    // novi sa levo i desno poruke
    templateLi = (msg) => {
        if(msg.username == localStorage.getItem(`user`)){
            let poruka = document.createElement(`li`);
            poruka.innerHTML = 
            `<div class="userSend">
                <span class="username">${msg.username}:</span>
                <span class="message">${msg.message}</span>
                <div class="datum">${this.formatDate(msg.created_at.toDate())}
                <img src="/30_PROJEKAT/314864_trash_can_icon.png" alt="" class="trash"></div>
            </div>`;
            return poruka;
        }
        else {
            let poruka = document.createElement(`li`);
            poruka.innerHTML = 
            `<div class="userReceive">
                <span class="username">${msg.username}:</span>
                <span class="message">${msg.message}</span>
                <div class="datum">${this.formatDate(msg.created_at.toDate())}
                <img src="/30_PROJEKAT/314864_trash_can_icon.png" alt="" class="trash"></div>
            </div>`;
            return poruka;
        }
        
    }

    delete() {
        this.ul.innerHTML = ``;
    }
}

export default ChatUI;