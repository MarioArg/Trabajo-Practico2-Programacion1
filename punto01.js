

////////////////  PUNTO 1 /////////////////////

//funcion para contatenar
function concatenar (cadena1,cadena2){
    return cadena1+cadena2; 
}

//Aqui ingreso las cadenas 
let texto1 = prompt ("Ingrese la primera cadena de texto");
//muestro por consola el texto ingresado1
console.log (texto1);
let texto2 = prompt ("Ingrese la segunda cadena de texto");
//muestro por consola el texto ingresado2
console.log (texto2);


//resultado de los textos concatenados
let resultado = concatenar(texto1,texto2);
console.log ("Cadenas concatenadas", resultado);