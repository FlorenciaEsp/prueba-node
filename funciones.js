// Función expresada

let sumar = function(numeroA, numeroB) {
    return numeroA + numeroB;

}

console.log (sumar(7 , 9));



// Función declarada

function restar (numeroC, numeroD) {
    return numeroC - numeroD;
}

console.log (restar(10,3));

// Ejemplo de Scope

let mensaje = "Hola";

function saludar () {
    let mensaje = "Chau";
    return mensaje;
}

console.log(mensaje);
console.log(saludar());

//Practica

function multiplicar(numeroA,numeroB) {
    return numeroA * numeroB;
}

multiplicar(5*5);
console.log(multiplicar(5,5));

// Subir a git
