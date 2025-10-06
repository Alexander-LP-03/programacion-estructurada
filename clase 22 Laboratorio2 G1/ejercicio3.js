//solicita al usuario el precio de tres productos, calcula el total de la compra y el IVA (13%). imprime el subtotal, el iva y el toal a pagar utilizando array y readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let precios = [];
let contador = 0;
const IVA = 0.13;

function pedirPrecio() {
  if (contador < 3) {
    rl.question(`Ingresa el precio del producto ${contador + 1}: `, (input) => {
      const precio = parseFloat(input);

      if (isNaN(precio) || precio < 0) {
        console.log(" Por favor ingresa un número válido.");
      } else {
        precios.push(precio);
        contador++;
      }

      pedirPrecio();
    });
  } else {
    const subtotal = precios.reduce((a, b) => a + b, 0);
    const iva = subtotal * IVA;
    const total = subtotal + iva;

    console.log("\n--- RESUMEN DE COMPRA ---");
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`IVA (13%): $${iva.toFixed(2)}`);
    console.log(`Total a pagar: $${total.toFixed(2)}`);

    rl.close();
  }
}

pedirPrecio();
