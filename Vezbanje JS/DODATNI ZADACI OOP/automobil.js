class Automobil {
    constructor(vmax, vmin, vcur) {
        this.vmax = vmax;
        this.vmin = vmin;
        this.vcur = vcur;
    }
    // seteri
    set vmax(vmax) {
        this._vmax = vmax;
    }

    set vmin(vmin) {
        this._vmin = vmin;
    }

    set vcur(vcur) {
        if(vcur < this.vmax) {
            this._vcur = vcur;
        }
        else {
            this._vcur = this.vmax;
        }
    }

    // geteri
    get vmax() {
        return this._vmax;
    }

    get vmin() {
        return this._vmin;
    }

    get vcur() {
        return this._vcur;
    }

    // Metode
    //Napraviti metodu  ubrzaj kojoj se prosledjuje vrednost za koliko treba uvećati trenutnu brzinu. Ukoliko nije moguće izvršiti toliko ubrzanje, trenutnu brzinu postaviti na maksimalnu vrednost brzine, u suprotnom uvećati za traženu vrednost.

    ubrzaj(v) {
        if(this.vcur + v > this.vmax) {
            this.vcur = this.vmax;
        }
        else {
            this.vcur += v;
        }
    }
    // Napraviti metodu uspori kojoj se prosledjuje vrednost za koliko treba smanjiti trenutnu brzinu. Ukoliko nije moguće izvršiti toliko usporenje, trenutnu brzinu postaviti na minimalnu vrednost brzine, u suprotnom umanjiti brzinu za traženu vrednost.

    uspori(v) {
        if(this.vcur - v > this.vmin) {
            this.vcur -= v;
        }
        else {
            this.vcur = this.vmin;
        }
    }
}

export default Automobil;