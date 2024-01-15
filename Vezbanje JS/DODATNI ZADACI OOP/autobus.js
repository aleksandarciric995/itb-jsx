class Autobus {
    constructor(rB, bS) {
        this.registarskiBroj = rB;
        this.brojSedista = bS;
    }

    // seteri
    set registarskiBroj(rB) {
        this._registarskiBroj = rB;
    }

    set brojSedista(bS) {
        this._brojSedista = bS;
    }

    // geteri
    get registarskiBroj() {
        return this._registarskiBroj;
    }

    get brojSedista() {
        return this._brojSedista;
    }

    stampaj() {
        console.log(this.registarskiBroj, this.brojSedista);
    }
}

export default Autobus;