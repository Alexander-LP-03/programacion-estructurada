const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let datos = [];
let contador = 0;
const etiquetas = ["sueldo base", "bono", "descuento por seguro"];

function pedirDato() {
  if (contador < etiquetas.length) {
    rl.question(`Ingresa el ${etiquetas[contador]}: `, (input) => {
      const valor = parseFloat(input);

      if (isNaN(valor) || valor < 0) {
        console.log("Ingresa un número válido, por favor.");
      } else {
        datos.push(valor);
        contador++;
      }

      pedirDato();
    });
  } else {
    const [sueldo, bono, descuento] = datos;
    const salarioFinal = sueldo + bono - descuento;

    console.log("\n---- CÁLCULO DE SALARIO ----");
    console.log(`Sueldo base: $${sueldo.toFixed(2)}`);
    console.log(`Bono: $${bono.toFixed(2)}`);
    console.log(`Descuento por seguro: $${descuento.toFixed(2)}`);
    console.log(`Salario final: $${salarioFinal.toFixed(2)}`);

    rl.close();
  }
}

pedirDato();
