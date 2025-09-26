/* Un importador necesita transformar a pesos mercadería que
    está valuada en Euro, Dólar, Real, Yen, Yuan, Libra Británica o
    Nuevo Sol según sea el caso. Si el precio obtenido en pesos es
    mayor a 20.000 adicionarle un 2% de impuestos. Mostrar el
    valor obtenido por pantalla.  */

function convertirAPesos(monto,moneda){
    //Tasas de cambio del dia 26/09/2025 "https://www.bcra.gob.ar/PublicacionesEstadisticas/Cotizaciones_por_fecha_2.asp"
    const tasas = {
        "euro": 1551.42,
        "dolar": 1326,
        "real": 248.29,
        "Yen": 8.86,
        "Yuan": 185.70,
        "Libra": 1789.49,
        "Sol":379.74
    };
    //usamos tolowercase para que el usuario ingrese en minusculas la moneda sin problemas
    moneda= moneda.toLowerCase();

    if (!tasas[moneda]){
        console.log ("Moneda no valida");
        return;
    }
    //conversion
    let pesos = monto * tasas [moneda];

    if (pesos > 20000){
        pesos = pesos * 1.02;
    }

    console.log (`El valor en pesos es : $${pesos.toFixed(2)}`);

}
//Programa principal
let monto = parseFloat(prompt("Ingrese el monto a convertir:"));
let moneda = prompt ("Ingrese la moneda (Euro, Dolar, Real, Yen, Yuan, Libra Britanica, Sol");

convertirAPesos (monto,moneda);