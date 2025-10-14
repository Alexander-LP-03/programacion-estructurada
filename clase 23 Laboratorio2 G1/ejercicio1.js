const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let gastos = [];
let contador = 0;

function pedirGasto() {
  if (contador < 3) {
    rl.question(`Ingresa el gasto ${contador + 1} del mes: `, (input) => {
      const gasto = parseFloat(input);

      if (isNaN(gasto) || gasto < 0) {
        console.log("Ingresa un número válido, por favor.");
      } else {
        gastos.push(gasto);
        contador++;
      }

      pedirGasto();
    });
  } else {
    const total = gastos.reduce((a, b) => a + b, 0);

    console.log("\n--- GASTOS DEL MES ---");
    gastos.forEach((gasto, i) => {
      console.log(`Gasto ${i + 1}: $${gasto.toFixed(2)}`);
    });
    console.log(`Total gastado: $${total.toFixed(2)}`);

    rl.close();
  }
}

pedirGasto();
