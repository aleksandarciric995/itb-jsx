class Knjiga {
    constructor(n, a, g, b, c) {
        this.naslov = n;
        this.autor = a;
        this.godIzdanja = g;
        this.brojStrana = b;
        this.cena = c;
    }

    // seteri

    set naslov(n) {
        if(n.length > 0) {
            this._naslov = n;
        }
        else {
            this._naslov = `Gospodar prstenova - Druzina prstena`;
        }
    }

    set autor(a) {
        if(a.length > 0) {
            this._autor = a;
        }
        else {
            this._autor = `Tolkin`;
        }
    }

    set godIzdanja(g) {
        this._godIzdanja = g;
    }

    set brojStrana(b) {
        if(b > 0) {
            this._brojStrana = b; 
        }
        else {
            this._brojStrana = 599;
        }
    }

    set cena(c) {
        if(c > 0) {
            this._cena = c;
        }
        else {
            this._cena = 2999;
        }
    }

    // GETERI

    get naslov() {
        return this._naslov
    }

    get autor() {
        return this._autor;
    }

    get godIzdanja() {
        return this._godIzdanja;
    }

    get brojStrana() {
        return this._brojStrana;
    }

    get cena() {
        return this._cena;
    }

    // metode

    stampaj() {
        console.log(this.naslov, this.autor, this.godIzdanja, this.brojStrana, this.cena);
    }

    obimna() {
        if(this.brojStrana > 600) {
            return true;
        }
        else {
            return false;
        }
    }

    skupa() {
        if(this.cena > 8000) {
            return true;
        }
        else {
            return false;
        }
    }

    dugackoIme() {
        if(this.autor.length > 18) {
            return true;
        }
        else {
            return false;
        }
    }
}

export default Knjiga;