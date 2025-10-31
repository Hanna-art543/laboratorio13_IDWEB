//Objeto auto
let auto = {
    marca: "Tesla",
    modelo: "Model 3",
    anio: 2024,
    detalles: function () {
        return "Auto eléctrico \n"+
        "Marca: "+this.marca+"\n"+
        "Modelo: "+this.modelo + "\n"+
        "Año: "+this.anio;
    }
}

//Mostrar
alert(auto.detalles());