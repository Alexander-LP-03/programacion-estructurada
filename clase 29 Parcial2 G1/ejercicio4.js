const readline = require('readline');

// Configuramos readline para leer desde consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que calcula la suma total de tres precios
function calcularTotal(precio1, precio2, precio3) {
  return precio1 + precio2 + precio3;
}

// Pedimos los precios al usuario
rl.question('Ingrese el precio del primer producto: ', (p1) => {
    const precio1 = parseFloat(p1);
  rl.question('Ingrese el precio del segundo producto: ', (p2) => {
    const precio2 = parseFloat(p2);
    rl.question('Ingrese el precio del tercer producto: ', (p3) => {
      const precio3 = parseFloat(p3);
      const total = calcularTotal(precio1, precio2, precio3);
      console.log(`La suma total de los tres productos es: $${total}`);
      rl.close();
    });
  });
});
