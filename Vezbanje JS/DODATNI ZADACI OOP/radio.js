class FMRadio {
    constructor(s, f, j) {
        this.stanica = s;
        this.frekvencija = f;
        this.jacinaTona = j;
    }

    // seteri
    set stanica(s) {
        this._stanica = s;
    }

    set frekvencija(f) {
        if(f < 87.5 || f > 108) {
            this._frekvencija = 92.5;
        }
        else {
            this._frekvencija = f;
        }
    }

    set jacinaTona(j) {
        if(j < 0 || j > 20) {
            this._jacinaTona = 10;
        }
        else {
            this._jacinaTona = j;
        }
    }

    // geteri
    get stanica() {
        return this._stanica;
    }

    get frekvencija() {
        return this._frekvencija;
    }

    get jacinaTona() {
        return this._jacinaTona;
    }

    // metode
    promeniZvuk(s) {
        if(s === `+`) {
            if(this.jacinaTona < 20) {
             this._jacinaTona++
            }
        }
        else if(s === `-`) {
            if(this.jacinaTona > 0) {
                this._jacinaTona--
            }
        }
        else {
            console.log(`Niste uneli dobru vrednost.`);
        }
    }

    frekvencijaIskljuci() {
        this._frekvencija = 87.5;
    }
}

export default FMRadio;