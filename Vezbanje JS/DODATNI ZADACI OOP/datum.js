class Datum {
    constructor(d, m, g) {
        this.dan = d;
        this.mesec = m;
        this.godina = g;
    }

    // seteri
    set dan(d) {
        this._dan = d;
    }

    set mesec(m) {
        this._mesec = m;
    }    

    set godina(g) {
        this._godina = g;
    }
    // geteri

    get dan() {
        return this._dan;
    }

    get mesec() {
        return this._mesec;
    }

    get godina() {
        return this._godina;
    }

    stampaj() {
        console.log(this.dan, this.mesec, this.godina);
    }
}

export default Datum;