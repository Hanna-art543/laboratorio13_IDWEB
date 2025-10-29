//Función filtrar y transformar
function filtrarYMostrar(arreglo) {
    
    let positivos = arreglo.filter(num => num >= 0);
    let cuadrados = positivos.map (x => Math.pow(x, 2));

    //Suma total
    let sumaTotal = 0;
    for (let elemento of cuadrados) {
        sumaTotal += elemento;
    }

    return sumaTotal;
}

//Ingresar y mostrar información
let arreglo = [-2, 3, -5, 4];
alert("Arreglo: ["+arreglo+"]\nSuma total (postivos al cuadrado): "+filtrarYMostrar(arreglo));

