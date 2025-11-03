const readline = require('readline');

// Configuramos readline para leer desde consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que cuenta la cantidad de caracteres
function contarCaracteres(texto) {
  return texto.length;
}

// Pedimos al usuario que ingrese una palabra o cadena
rl.question('Escribe una palabra o cadena de texto: ', (entrada) => {
  const cantidad = contarCaracteres(entrada);
  console.log(`La cadena contiene ${cantidad} caracteres.`);
  rl.close();
});
