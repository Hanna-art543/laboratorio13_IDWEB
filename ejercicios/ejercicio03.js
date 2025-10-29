//Función reordenar palabras
function reordenarPalabras (texto) {
    //quitar espacios
    let textoNuevo = texto.trim();
    let arregloPalabras = textoNuevo.split(/\s+/); //separa en un arreglo

    for (let i = 0; i < arregloPalabras.length; i++) {
        let palabra = arregloPalabras[i].toUpperCase();
        arregloPalabras[i] = palabra;
    }

    return arregloPalabras.sort();
}

//Ingresar y mostrar
let texto = prompt("Ingresar un texto:");
alert("Cadena: ["+reordenarPalabras(texto)+"]");