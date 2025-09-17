let computadora = {
  marca: "Dell",
  modelo: "XPS 15",
  especificaciones: {
    procesador: "Intel Core i7",
    ram: "8GB",
    almacenamiento: "512GB"
  }
};

computadora.especificaciones.ram = "16GB";
computadora.especificaciones.sistemaOperativo = "Windows 11";
delete computadora.especificaciones.almacenamiento;

console.log(`=== INFORMACIÓN DE LA COMPUTADORA ===
Marca: ${computadora.marca}
Modelo: ${computadora.modelo}
Procesador: ${computadora.especificaciones.procesador}
Memoria RAM: ${computadora.especificaciones.ram}
Sistema Operativo: ${computadora.especificaciones.sistemaOperativo}
`);
