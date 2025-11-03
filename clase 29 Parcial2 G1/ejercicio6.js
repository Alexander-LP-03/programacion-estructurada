const readline = require('readline');

// Configuramos readline para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que convierte el texto a mayúsculas
function convertirMayusculas(texto) {
  return texto.toUpperCase();
}

// Pedimos al usuario una cadena
rl.question('Escribe una cadena de texto: ', (entrada) => {
  const resultado = convertirMayusculas(entrada);
  console.log('Texto en mayúsculas:', resultado);
  rl.close();
});
