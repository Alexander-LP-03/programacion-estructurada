const libro = {
    informacion: {
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        genero: "Ficción",
    },
    Disponibilidad: {
        copias : 10,
        prestados: 2,
        ubicacion: "Estante A3",
    },
    Registro: {
        fechaPublicacion: "06/04/1943",
        fechaIngreso: "15/03/2020",
        ultimaVersion: "01/01/2021",
    }
}

console.log(libro);

// mostrar la informacion del autor
console.log(libro.informacion.autor);

// calcular cuantos ejemplares disponibles quedan (copias - prestados)
const disponibles = libro.Disponibilidad.copias - libro.Disponibilidad.prestados;
console.log(`Ejemplares disponibles: ${disponibles}`);

// actualizar la ultimaVersion con fecha actual
libro.Registro.ultimaVersion = new Date().toLocaleDateString();

// extraer titulo y ubicacion en variables
const { titulo } = libro.informacion;
const { ubicacion } = libro.Disponibilidad;
console.log(titulo, ubicacion);