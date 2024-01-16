class Student {
    constructor(jmbg, ime, prezime, nizOcena) {
        this.jmbg = jmbg;
        this.ime = ime;
        this.prezime = prezime;
        this.nizOcena = nizOcena;
        this.prosecnaOcena = this.nizOcena;
    }

    // seteri
    set jmbg(jmbg) {
        if(jmbg.length != 13) {
            this._jmbg = `30121901860000`;
        }
        else {
            this._jmbg = jmbg;
        }
    }

    set ime(ime) {
        this._ime = ime;
    }

    set prezime(prezime) {
        this._prezime = prezime;
    }

    set nizOcena(o) {
        this._nizOcena = [];
        o.forEach(t => {
            switch(t) {
                case 6:
                    this._nizOcena.push(t);
                    break;
                case 7:
                    this._nizOcena.push(t);
                    break;
                case 8:
                    this._nizOcena.push(t);
                    break;
                case 9:
                    this._nizOcena.push(t);
                    break;
                case 10:
                    this._nizOcena.push(t);
                    break;
                default:
                    this._nizOcena.push(10);
            }
        });
    }

    set prosecnaOcena(nizOcena) {
        let suma = 0;
        nizOcena.forEach(o => {
            suma += o;
        });
        this._prosecnaOcena = suma / nizOcena.length;
    }

    // geteri
    get jmbg() {
        return this._jmbg;
    }

    get ime() {
        return this._ime;
    }

    get prezime() {
        return this._prezime;
    }

    get nizOcena() {
        return this._nizOcena;
    }

    get prosecnaOcena() {
        return this._prosecnaOcena;
    }

    // metode
    ispis() {
        console.log(this.jmbg, this.ime, this.prezime, this.nizOcena, this.prosecnaOcena);
    }

}

export default Student;