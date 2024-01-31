// if ternario

let fruta = 
'Naranja';

let resultado = fruta == 'Manzana'? 'Buenisimo, me gustan las manzanas':'Ufa, quería manzana';
console.log(resultado);

// switch

let semaforo = "azul";

switch(semaforo){
    case "verde":
        console.log("Puedo cruzar");
        break;
    case "amarillo":
        console.log("Precaución");
        break;  
    case "rojo":
        console.log("No cruces, hay que esperar");
        break;
    default:
        console.log("No funciona el semaforo");
        break;    

}

let dia = "jueves"
function finDeSemana (dia) { 	
	switch (dia){
	case "viernes":
    	console.log("buen finde");
				break;
	case "lunes":
    	console.log("buena semana");
		break;

	 default:
    	console.log("buen dia");
		break;
	}
}
    function tengoClases(dia) {
        switch (dia) {
        case "lunes":
            console.log("tenés clases");
            break;
        case "miércoles":
            console.log("tenés clases");
            break;
        case "viernes":
            console.log("tenés clases");
            break;
        default:
            console.log("no tenés clases");
            break;
    
        }
    }