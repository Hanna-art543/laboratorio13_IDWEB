//Crear Mapa con productos y precios
let productosPrecios = new Map ( [
    ["chocolate", 15],
    ["galleta", 1],
    ["queque", 2],
    ["atún", 3.5],
    ["huevo", 0.5],
] );

function calcularPrecio (producto) {
    let precio = productosPrecios.get(producto);
    return precio;
}


//Ingrese la lista de compras 
let cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));

let sumaTotal = 0;

//Mostrar Mapa
let mapaProductos = "Productos: \n";
for(let [producto, precio] of productosPrecios) {
    mapaProductos += producto +" - S/."+precio + "\n";
}
alert(mapaProductos);

for(let i=0; i < cantidad; i++) {
    let producto = prompt("Ingrese producto:");
    let precio = calcularPrecio(producto);
    sumaTotal += precio;
}

alert("La cantidad a pagar es: "+sumaTotal);

