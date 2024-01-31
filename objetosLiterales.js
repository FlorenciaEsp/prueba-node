// let objeto = {
//     propiedad : valor,
//     propiedad : valor,
//     propiedad : valor,
//     propiedad : valor
// }


let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho", "Javier"],
    horario : "de 19 a 21hs.",
    notificaciones : function(){
        return "El horario de la cursada es " + this.horario;
}
}
//console.log("La cantidad de alumnos de este curso es de " + curso.cantidadDeAlumnos);

console.log(curso.notificaciones());

// con la Mayuscula en la primera letra de la función sabemos que va a construir un objeto
function Curso (cantidadDeAlumnos, docentes, horario) {
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario

}

let cursoDeProgramacion = new Curso(50, ["Javier", "Gerardo"], "de 19 a 21 hs.");
let cursoDeMarketing = new Curso(45,["Diego", "Debbie"], "de 17 a 19 hs.");

console.log(cursoDeProgramacion);
console.log(cursoDeMarketing);


