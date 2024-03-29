let date = new Date();

class Chatroom {
    constructor(room, user) {
        this.room = room;
        this.username = user;
        this.chats = db.collection(`chats`);
        this.unsub = false; // NE MORAMO CAK NI DA JE POSTAVIMO NA FALSE, MOZEMO SAMO DA KAZEM this.unsub; i ona ce po defaultu biti undefined
    }

    // seteri
    set room(r) {
        this._room = r;
        if(this.unsub) {
            this.unsub();
        }
    } 

    set username(u) {
        if(u.length >= 2 && u.length <= 10 && u.trim() != ''){
            this._username = u;
        } else {
            alert(`Duzina korisnickog imena mora da bude izmedju 2 i 10 karaktera`);
        }
        if(this.unsub) {
            this.unsub();
        }
    }

    // geteri
    get room() {
        return this._room;
    }

    get username() {
        return this._username;
    }

    // Metod za dodavanje cetova

    addChat = (msg) => {
        this.chats.doc()
        .set({
            message: msg,
            username: this.username,
            room: this.room,
            created_at: new Date()
        })
        .then(() => {
            console.log(`Uspesno dodat cet!`);
            prikazPoruka.scrollTop = prikazPoruka.scrollHeight;

        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    };

    // JELENIN NACIN
    /*
    async addChat(mess) {
        // Kreiranje dokumenta koji zelimo da upisemo u bazu
        let docChat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: new Date()
        };
        let response = await this.chats.add(docChat); // pamti dokument u db
        return response; // vraca promise, na koji moze da se zakaci .then i .catch 
    }
    */
   // ovo ispod je pokazna vezba za try i catch
    async addChats(mess) {
        try {
            // Kreiranje dokumenta koji zelimo da upisemo u bazu
            let docChat = {
                message: mess,
                username: this.username,
                room: this.room,
                created_at: new Date()
            };
            let response = await this.chats.add(docChat); // pamti dokument u db
            return response; // vraca promise, na koji moze da se zakaci .then i .catch 
        }
        catch {
            console.error(`Doslo je do greske`, err); // mogli smo napisati samo i console.error();
        }
    }
    

    // Metod za ispis dodatnihh cetova/dokumenata
    /*
    getChat = () => {
        this.chats
        .where(`room`, `==`, this.room)
        .orderBy(`created_at`)
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let data = doc.data();
                console.log(data);
            });
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    }
    */ 
   // JELENIN NACIN
    // onSnapshot prati sve promene na bazi podataka - dodavanje, brisanje, update, citanje
    // snapshot belezi niz promena
   getChats(callback) {
    this.unsub = this.chats
    .where(`room`, `==`, this.room)
    .orderBy(`created_at`)
    .onSnapshot(snapshot => { // snapshot.forEach - PROMENA NAD CELOM BAZOM
        snapshot.docChanges().forEach(change => { // .docChanges - PROMENE NAD DOKUMENTIMA
            // console.log(`------`, change.type, `------`); ovo loguje svaki put kad se desi promena tip promene
            if(change.type == `added`) {
                callback(change.doc.data());
            };
        })
    });
   }
}

export default Chatroom;