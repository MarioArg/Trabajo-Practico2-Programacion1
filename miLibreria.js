export function calcularAumento (precio){
    let porcentaje = 0;

    if (precio < 60){
        porcentaje = 20;
    } else if (precio < 100){
        porcentaje = 15;
    } else {
        porcentaje = 10;
    }
    let aumento = (precio * porcentaje) / 100;
    let nuevoPrecio = precio + aumento;

    return {
        precioOriginal: precio,
        porcentajeAplicado: porcentaje,
        aumento: aumento,
        precioFinal: nuevoPrecio  
    };
}