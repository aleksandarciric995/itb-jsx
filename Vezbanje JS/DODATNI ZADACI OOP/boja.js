class Boja { 
    constructor(t, z, i) {
        this.talasnaDuzinanm = t;
        this.zasicenje = z;
        this.intenzitet = i;
    }    

    // seteri
    set talasnaDuzinanm(t) {
        this._talasnaDuzinanm = t;
    }

    set zasicenje(z) {
        this._zasicenje = z;
    }

    set intenzitet(i) {
        this._intenzitet = i;
    }

    // geteri
    get talasnaDuzinanm() {
        return this._talasnaDuzinanm;
    }

    get zasicenje() {
        return this._zasicenje;
    }

    get intenzitet() {
        return this._intenzitet;
    }
}

export default Boja;