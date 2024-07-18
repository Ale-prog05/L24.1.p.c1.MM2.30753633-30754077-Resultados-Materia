export default class CL_estudiante {
    constructor (c, nf) {
        this.cedula = c
        this.notaFinal = nf
    }
    set cedula (c) {
       return  this._cedula = c
    }
    get cedula () {
        return this._cedula
    }
    set notaFinal (nf) {
       return this._notaFinal = nf
    }
    get notaFinal () {
        return this._notaFinal
    }

}