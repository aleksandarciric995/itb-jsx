class Radnik {
    constructor(i, p) {
        this.ime = i;
        this.plata = p;
    }
    
    // seteri
    set ime(i) {
        this._ime = i;
    }

    set plata(p) {
        this._plata = p;
    }

    // geteri
    get ime() {
        return this._ime;
    }

    get plata() {
        return this._plata;
    }

    stampaj() {
        console.log(this._ime, this._plata);
    }
}

export default Radnik;