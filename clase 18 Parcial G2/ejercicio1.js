let empleado = {
  nombreCompleto: "Ana Lucía Rodríguez",
  edad: 28,
  salario: 1200.50,
  activo: true,
  fechaIngreso: new Date("2025-03-15"),
  habilidades: ["Excel", "Contabilidad", "Análisis"]
};

empleado.departamento = "Contabilidad";
empleado.salario *= 1.15;
delete empleado.activo;

console.log(`=== FICHA DE EMPLEADO ===
Nombre: ${empleado.nombreCompleto}
Edad: ${empleado.edad} años
Salario: $${empleado.salario.toFixed(2)}
Departamento: ${empleado.departamento}
Año de ingreso: ${empleado.fechaIngreso.getFullYear()}
Habilidades (${empleado.habilidades.length}): ${empleado.habilidades.join(", ")}
`);
