let notas = [10, 4, 4, 8, 9, 2, 7];

let notasHastaEl100 = notas.map(function(numero){
    return numero*10;
});

//console.log(notasHastaEl100);

let notasAprobadas = notas.filter(function(numero){
    return numero>=7;
});

//console.log(notasAprobadas);

let sumaNotas = notas.reduce(function(estado, numero){ //si al estado no le digo nada comienza en cero
    return estado + numero;

});

//console.log(sumaNotas);

notas.forEach(function(valor, indice){
    //console.log(indice);
    //console.log(valor);
   console.log ("En la posición " + indice + " tengo el valor de " + valor);
});


