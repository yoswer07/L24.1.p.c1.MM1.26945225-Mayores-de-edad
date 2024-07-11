export default class Cl_Persona {
    constructor(n, e) {
        this.nombre = n;
        this.edad = e;
    }

    //metodos
    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._nombre;
    }

    set edad(e) {
        this._edad = e;
    }

    get edad() {
        return this._edad;
    }
}