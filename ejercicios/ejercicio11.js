//Función combinar catálogos
function combinarCatalogos (tiendaA, tiendaB) {
    let combinado = {}; //objeto
    let clavesCombinadas = new Set ([
        ...Object.keys(tiendaA),
        ...Object.keys(tiendaB)
    ]);
    for(let producto of clavesCombinadas) {
        let precioA = tiendaA[producto];
        let precioB = tiendaB[producto];

        if (precioA && precioB) {
            combinado[producto] = Math.min(precioA, precioB);
        }
        else {
            combinado[producto] = precioA || precioB;
        }
    }
    return combinado;
}

//Objeto tienda A
let tiendaA = {
    "chocolate barra": 6,
    "lentejas": 8.7,
    "arroz extra tottus": 18.5,
    "galletas": 6.2,
    "fideo spaghetti": 3.3,
};

//Objeto tienda B
let tiendaB = {
    "lentejas": 5,
    "pastillas de chocolate": 27,
    "azúcar rubia": 18,
    "azúcar blanca": 22,
    "aceite vegetal": 7.8,
    "aceite blanca": 23.5, 
};

let resultado = combinarCatalogos(tiendaA, tiendaB);
console.log(resultado);