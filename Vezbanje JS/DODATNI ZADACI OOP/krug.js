class Krug {
    constructor(r) {
        this.poluprecnik = r;
    }

    // seteri
    set poluprecnik(r) {
        this._poluprecnik = r;
    }

    // geteri
    get poluprecnik() {
        return this._poluprecnik;
    }

    // metode
    // Napraviti metodu obimKruga koja izračunava i vraća obim kruga.
    obimKruga() {
        return (2 * this._poluprecnik) * Math.PI;
    }

    povrsinaKruga() {
        return (this._poluprecnik ** 2) * Math.PI;
    }
}

export default Krug;

