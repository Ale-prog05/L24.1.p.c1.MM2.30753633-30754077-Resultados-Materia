export default class CL_salon {
    constructor () {
        this.contApro = 0
        this.contEstu = 0
        this.mayor = 0
        this.AuxCedula = 0
    }
      procesarEstudiante (est) {
         this.contEstu++
         if(est.notaFinal >= 48 ){
            this.contApro++}
        if(est.notaFinal > this.mayor){
            this.mayor = est.notaFinal
            this.AuxCedula = est.cedula}
    }

     porcentaje () {
        return (this.contApro / this.contEstu) * 100
    }

    devolverMayor () {
        return this.AuxCedula
    }

}