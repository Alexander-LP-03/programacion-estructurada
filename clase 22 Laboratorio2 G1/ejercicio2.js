const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let consumos = [];
let contador = 0;

function pedirConsumo() {
  if (contador < 3) {
    rl.question(`Ingresa los litros consumidos en el viaje ${contador + 1}: `, (input) => {
      const litros = parseFloat(input);

      if (isNaN(litros) || litros < 0) {
        console.log("Ingresa un número válido, por favor.");
      } else {
        consumos.push(litros);
        contador++;
      }

      pedirConsumo();
    });
  } else {
    const total = consumos.reduce((a, b) => a + b, 0);
    const promedio = total / consumos.length;

    console.log("\n---- CONSUMO DE COMBUSTIBLE ----");
    consumos.forEach((litros, i) => {
      console.log(`Viaje ${i + 1}: ${litros.toFixed(2)} litros`);
    });
    console.log("-------------------------------");
    console.log(`Promedio de consumo: ${promedio.toFixed(2)} litros`);

    rl.close();
  }
}

pedirConsumo();
