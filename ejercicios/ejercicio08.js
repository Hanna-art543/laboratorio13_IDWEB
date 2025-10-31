//Crear Mapa
let capitales = new Map ([
    ["Perú", "Lima"],
    ["Chile", "Santiago"],
    ["Argentina", "Buenos Aires"],
    ["México", "Ciudad de México"],
    ["Canadá", "Ottawa"]
])

//Función invertir Mapa
function invertirMapa (map) {
    let mapaInvertido = new Map ();

    for(let [clave, valor] of map) {
        mapaInvertido.set(valor, clave);
    }
    return mapaInvertido;
}

//Imprimir Mapa invertido
let mapaInver = invertirMapa (capitales);
let resultadoTexto = "Resultado: \n";

for(let [clave, valor] of mapaInver) {
    resultadoTexto += clave + " --- "+ valor + "\n";
}
alert (resultadoTexto);
