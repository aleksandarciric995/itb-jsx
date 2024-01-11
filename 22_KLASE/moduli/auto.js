class Auto {
    constructor(m, b, k) {
        this.marka = m;
        this.boja = b;
        this.imaKrov = k;
    }
    // Konstruktor bi trebalo da radi dve stvari:
    // 1) Da kaze koja svojstva ce imati svaki objekat te klase
    // (POLJA NAZIVAJTE SA POCETNOM DONJOM CRTOM)
    sviraj() {
        console.log(`Auto marke ${this._marka} svira: Beep! Beep!`);
    }

    // Geteri i seteri
    // Svako polje moze (i ne mora) da ima po jedan geter i po jedan seter
    // Geter dohvata vrednost polja
    // Seter postavlja vrednost polja

    // Seteri
    set marka(m) {
        if(m.length > 0) {
            this._marka = m;
        }
        else {
            this._marka = `Skoda`;
        }
        console.log(`Pozvan je seter za polje _marka`);
    }

    set boja(b) {
        if(b.length > 0) {
            this._boja = b;
        }
        else {
            this._boja = `Crna`; 
        }
    }

    set imaKrov(k) {
        if(k === true || k === false) {
            this._imaKrov = k;
        }
        else {
            this._imaKrov = false;
        }
    }

    // GETERI
    get marka() {
        return this._marka;
    }

    get boja() {
        return this._boja;
    }

    get imaKrov() {
        return this._imaKrov;
    }
}

export default Auto;