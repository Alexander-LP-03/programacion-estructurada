const estudiante = {
    nombre: "Juan",
    edad:"27 años",
    Direccion: {
        pais:"El Salvador",
        calle:"Los Almendros",
        numCasa: "23A"
    }
}

//Acceder a los valores del objeto anidado
console.log(estudiante);
console.log(estudiante.Direccion);

console.log(estudiante["Direccion"]);

//agregamos nueva propiedad al objeto
estudiante.colorOjos = "Rojos";
console.log(estudiante);

//agregando propiedad al objeto anidado
estudiante.Direccion.postal = 503;
console.log(estudiante["Direccion"]);

//mdificar propiedad
estudiante.Direccion.numCasa = "45B";
console.log(estudiante.Direccion);

//eliminar propiedad del objeto aninado
delete estudiante.Direccion.numCasa
console.log(estudiante.Direccion);


