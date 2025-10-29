
// Función para duplicar los valores
function duplicarElementos(arreglo) {
    let nuevoArreglo = [...arreglo]; // copia del arreglo original

    for (let i = 0; i < arreglo.length; i++) {
        let elementoDuplicado = arreglo[i];
        nuevoArreglo.push(elementoDuplicado); // añade los duplicados
    }
    return nuevoArreglo;
}

// Datos y mostrar
let arreglo = [0, 1, 2, 3, 4];
alert("Nuevo arreglo: " + duplicarElementos(arreglo));
