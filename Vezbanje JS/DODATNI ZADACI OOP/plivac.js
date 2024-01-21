class Plivac {
    constructor(i, g, n) {
        this.ime = i;
        this.godinaRodjenja = g;
        this.najboljiRezultat = n;
    }
    // seteri
    set ime(i) {
        this._ime = i;
    }

    set godinaRodjenja(g) {
        this._godinaRodjenja = g;
    }

    set najboljiRezultat(n) {
        this._najboljiRezultat = n;
    }

    // geteri
    get ime() {
        return this._ime;
    }

    get godinaRodjenja() {
        return this._godinaRodjenja;
    }

    get najboljiRezultat() {
        return this._najboljiRezultat;
    }

    // metode
    ispisi() {
        console.log(`Ime: ${this.ime}, godina rodjenja: ${this.godinaRodjenja}, najbolji rezultat: ${this.najboljiRezultat}`);
    }
}

export default Plivac;