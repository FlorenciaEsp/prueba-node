//let usuariohabilitado = true;
//let medioPagoActivo = true;
//let diaFeriado = false;
//let precioProductoMarcaAcme = 34.56
//let precioProductoMarcaPatito = 45.67
//let nombre = "Gabriela";

//let resultadoComparacion = !(precioProductoMarcaAcme > precioProductoMarcaPatito) && (medioPagoActivo || usuariohabilitado);
                                  //             false                                                true
//console.log(resultadoComparacion);

// not ! cambia el valor a falsop o verdadero dependiendo cual era el anterior



///Condicionales///

let nota = 5;
// lo que hay dentro del if js siempre intenta convertirlo en un valor true or false 
//if(nota>6){ 
 //   console.log("Felicidades Aprobaste");
//bloque else se ejecuta solo si la condición no se cumple
//}else if (nota>4){
 //   console.log("Regularizaste, tenes que rendir un final");
//}else{
    //console.log ("Lo siento!, tenes que recursar.");
//}

// if ternario buena practica para asignar valores a las variables mas que nada. 

let mensaje = (nota > 6) ? "Felicidades Aprobaste!!!" : nota > 4 ? "Regularizaste" : "Lo siento!, tenes que recursar.";

console.log(mensaje);