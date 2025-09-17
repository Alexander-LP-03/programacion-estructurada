let vehiculo = {
  marca: "Toyota",
  año: 2022,
  seguro: {
    compania: "Seguros El Ahorro",
    numeroPoliza: "POL123456",
    vigente: true
  }
};

vehiculo.seguro.compania = "Mapfre";
vehiculo.seguro.fechaVencimiento = "2026-05-10";
delete vehiculo.seguro.vigente;

console.log(`=== INFORMACIÓN DEL VEHÍCULO ASEGURADO ===
Marca: ${vehiculo.marca}
Año: ${vehiculo.año}

--- Datos del Seguro ---
Compañía: ${vehiculo.seguro.compania}
Número de Póliza: ${vehiculo.seguro.numeroPoliza}
Fecha de Vencimiento: ${vehiculo.seguro.fechaVencimiento}
`);
