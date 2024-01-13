class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }

    set ime(i) {
        this._ime = i;
    }

    set visina(v) {
        if(v > 0 && v < 250) {
            this._visina = v;
        }
        else {
            this._visina = 190;
        }
    }

    set tezina(t) {
        if(t > 0 && t < 550) {
            this._tezina = t;
        }
        else {
            this._tezina = 100;
        }
    }

    get ime() {
        return this._ime;
    }

    get visina() {
        return this._visina
    }

    get tezina() {
        return this._tezina;
    }

    stampaj() {
        console.log(this.ime, this.visina, this.tezina);
    }

    Bmi() {
        return (this.tezina / ((this.visina / 100)**2));
    }

    Kritican() {
        if(this.Bmi() < 15 || this.Bmi() > 40) {
            return true;
        }
        else {
            return false;
        }
    }

}

export default Pacijent;