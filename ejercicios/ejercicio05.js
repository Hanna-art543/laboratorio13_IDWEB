//Función para verificar si existen duplicados debe devolver true
function tieneDuplicados (arreglo) {
    let valor = true;
    let copiaArreglo = [...arreglo];
    let nuevoArreglo = new Set(copiaArreglo);
    if (arreglo.length == nuevoArreglo.length) {
        valor = false;
    }
    return valor;
}

//Arreglo y mostrar respuesta
let arreglo = [1, 2, 3, 4, 5, 2];
let valor = tieneDuplicados(arreglo);

if (valor) {
    alert("Existen duplicados.");
}
else {
    alert("No hay duplicados");
}