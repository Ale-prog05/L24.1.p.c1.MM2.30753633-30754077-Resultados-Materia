/* Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
aprueban con 48Ptos.
Se desea procesar a varios estudiantes y determinar la siguiente estadística: porcentaje de
aprobados y cédula de alguno de los mejores estudiantes.
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
777 (50Ptos), 999 (40Ptos), 333 (90Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y
222 (60Ptos), la salida que se espera es como la siguiente:
Porcentaje de aprobados: 75%
Cédula de uno de los mejores estudiantes: 333
*/

import CL_estudiante from "./CL_estudiante.js"
import CL_salon from "./CL_salon.js"


let estudiante1 = new CL_estudiante(888, 60)
let estudiante2 = new CL_estudiante(777, 50)
let estudiante3 = new CL_estudiante(999, 40)
let estudiante4 = new CL_estudiante(333, 90)
let estudiante5 = new CL_estudiante(111, 30)
let estudiante6 = new CL_estudiante(666, 90)
let estudiante7 = new CL_estudiante(444, 48)
let estudiante8 = new CL_estudiante (222, 60)
let salon = new CL_salon()
salon.procesarEstudiante(estudiante1)
salon.procesarEstudiante(estudiante2)
salon.procesarEstudiante(estudiante3)
salon.procesarEstudiante(estudiante4)
salon.procesarEstudiante(estudiante5)
salon.procesarEstudiante(estudiante6)
salon.procesarEstudiante(estudiante7)
salon.procesarEstudiante(estudiante8)

let salida = document.getElementById('salida')
salida.innerHTML =`
<h1>Resultados</h1>
<p> Porcentaje de aprobados: ${salon.porcentaje()}%</p>
<p>Cedula de uno de los mejores estudiantes: ${salon.devolverMayor()}</p>
`