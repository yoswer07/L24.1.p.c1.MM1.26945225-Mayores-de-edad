export default class Cl_TodoPersona {
    constructor(){
        this.contPersonas = 0;
        this.contMayorEdad = 0;
    }

    //metodos
    procesarPersona(per) {
        this.contPersonas++;
        if(per.edad > 17) {
            this.contMayorEdad++;
        }
    }
    devolverContPersonas(){
        return this.contPersonas;
    }
    devolverContMayorEdad() {
        return this.contMayorEdad;
    }
    porcentajeMayorEdad() {
        return (this.contMayorEdad / this.contPersonas) * 100;
    }
}