//Lista de empleados
const listaEmpleados = [
    { id: 1, nombre:"Jhon", area: "Ventas", salario: 2400},
    { id: 2, nombre:"Serafina", area: "Ventas", salario: 2400},
    { id: 3, nombre:"Blyke", area: "TI", salario: 2400},
    { id: 4, nombre:"Remigio", area: "TI", salario: 2400},
    { id: 5, nombre:"Cecilie", area: "Recursos Humanos", salario: 2400},
    { id: 6, nombre:"María", area: "Ventas", salario: 2400},
    { id: 7, nombre:"José", area: "Recursos Humanos", salario: 2400},
]

function gestionarEmpleados (empleados) {
    let mapaAreas = new Map ();
    
    for (let empleado of empleados) {
        let area = empleado.area;
        
        if(!mapaAreas.has(area)) {
            mapaAreas.set(area, {empleados: [], totalSalario: 0})
        }

        let datosArea = mapaAreas.get(area);
        datosArea.empleados.push(empleado.nombre);
        datosArea.totalSalario += empleado.salario;
    }

    for(let [area, datos] of mapaAreas) {
        let promedio = datos.totalSalario / datos.empleados.length;
        mapaAreas.set(area, {empleados: datos.empleados, promedio});
    }

    return mapaAreas;
}

//Resultado en consola
console.log(gestionarEmpleados(listaEmpleados));