//Función contar letras
function contarLetras (texto) {
    texto.toLowerCase(); //ignorar mayúsculas/minúsculas
    let arregloLetras = texto.split(""); //separar por letras
    let mapaLetras = new Map ();

    for (let letra of arregloLetras) {
        if(mapaLetras.has(letra)) {
            mapaLetras.set(letra, mapaLetras.get(letra) +1);
        }
        else {
            mapaLetras.set(letra, 1);
        }
    }
    return mapaLetras;
}

//Ingresar y mostrar
let palabra = prompt("Ingrese una palabra:");

let letrasMapa = contarLetras(palabra);

let resultado = "{ ";
for (let [clave, valor] of letrasMapa) {
    resultado += clave + ":" +valor + ", ";
}

resultado += "}";
alert(resultado);