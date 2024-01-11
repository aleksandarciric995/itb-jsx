class Film {
    constructor(n, r, gI) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = gI;
    }
    stampaj() {
        console.log(`Ime filma je ${this.naslov}`);
    }

    // SETERI

    set naslov(n) {
        if(n.length > 0) {
            this._naslov = n;
        }
        else {
            this._naslov = `Interstellar`;
        }
    }

    set reziser(r) {
        if(r.length > 0) {
            this._reziser = r;
        }
        else {
            this._reziser = `Aca`;
        }
    }

    set godinaIzdanja(gI) {
        if(gI > 1873) {
            this._godinaIzdanja = gI;
        }
        else {
            this._godinaIzdanja = `0000`;
        }
    }

    // GETERI


    get naslov() {
        return this._naslov;
    }

    get reziser() {
        return this._reziser;
    }

    get godinaIzdanja() {
        return this._godinaIzdanja;
    }
}

export default Film;