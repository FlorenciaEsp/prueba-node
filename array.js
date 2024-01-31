let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
console.log(seriesFavoritasDeAna);

let seriesFavoritasDeHector = ["En Terapia", "Recordando el Show de Alejandro Molina"]
console.log(seriesFavoritasDeHector);

let saludo = ["hola","mundo!"];
console.log(saludo);

let otroSaludo = ["hola","hola!"];
console.log(otroSaludo);

let notas = [3,5,10,9,7,8,8,8];

notas.push (1);
notas.push (2);
notas.push (4);

// notas.pop () // quita el ultimo que guardo en una variable.

let elUltimo = notas.pop();

console.log(notas);
console.log(elUltimo);



let notas1 = [3,5,10,9,7,8,8,8];

notas1.shift();
notas1.shift();

notas1.unshift(1);

notas1.push(4);
notas1.push(4);

notas1.pop();

console.log(notas1);

