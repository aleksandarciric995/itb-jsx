class Cipela {
    constructor(n, b, p) {
        this.naziv = n;
        this.brojCipela = b;
        this.nizPrepravki = p;
    }

    // seteri
    set naziv(n) {
        this._naziv = n;
    }

    set brojCipela(b) {
        this._brojCipela = b;
    }

    set nizPrepravki(p) {
        this._nizPrepravki = p;
    }

    // geteri
    get naziv() {
        return this._naziv;
    }

    get brojCipela() {
        return this._brojCipela;
    }

    get nizPrepravki() {
        return this._nizPrepravki;
    }
    
    // metode
    zalepi() {
        console.log(`Zalepljena cipela.`);
    }

    prosiri() {
        console.log(`Prosirena cipela.`);
    }

    usij() {
        console.log(`Usivena cipela.`);
    }

    stampaj() {
        console.log(this._naziv, this._brojCipela, this._nizPrepravki);
    }
}

export default Cipela;