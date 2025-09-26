import { calcularAumento } from "./miLibreria.js";     

let continuar = true;

while (continuar){
    let precio = parseFloat (prompt("Ingrese un precio:"));

    if (isNaN(precio)|| precio <= 0){
        alert ("Precio invalido.");
    } else {
        let resultado = calcularAumento(precio);

        alert(
        `Precio Orginal: $${resultado.precioOriginal}\n +
        Porcentaje Aplicado: ${resultado.porcentajeAplicado}%\n
        Aumento: $${resultado.aumento.toFixed(2)}\n +
        Nuevo Precio: $${resultado.precioFinal.toFixed(2)}`
        );
    }

    let opcion = prompt ("Desea Ingresar otro precio (s/n):");
    if (opcion.toLocaleLowerCase()!== "s"){
        continuar = false;
    }
}