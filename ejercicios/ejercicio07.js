//Función contar palabras
function contarPalabras (texto) {
    let palabraCantidad = new Map ();

    let arregloTexto = texto.trim().split(/\s+/);

    for(let palabra of arregloTexto) {
        if (palabraCantidad.has(palabra)) {
            palabraCantidad.set(palabra, palabraCantidad.get(palabra) + 1);
        }
        else {
            palabraCantidad.set(palabra, 1);
        }
    }
    return palabraCantidad;
}

//Ingresar texto y mostrar resultado
let texto = prompt("Ingrese texto:");
let mapaTexto = contarPalabras(texto);

let mostrarTexto = "Palabras \n";
for (let [palabra, cantidad] of mapaTexto) {
    mostrarTexto += palabra + " --> "+ cantidad + "\n";
}
alert(mostrarTexto);
