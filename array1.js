let notas = [3,5,8,10,9,7,8,8];

let posicionDelOcho = notas.indexOf(8);

// esta condición significa que si existe el código ya que sino da menos 1 existe.
if (posicionDelOcho != -1) {
    console.log("Lo encontré");

} 

// console.log(posicionDelOcho);

let resultadoJuntado = notas.join(",  ");

console.log(resultadoJuntado);

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  
  let fraseNueva = arrayFrase.join (" ");

  
  console.log(fraseNueva);

  