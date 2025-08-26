//IMPORTAR EL MODULO

//const readline = require('readline');
import readline from 'readline';

//CREAR UNA INTERFAZ
const rl = readline.createInterface({ 
input: process.stdin,
output: process.stdout
})

//REALIZAR PREGUNTA AL USUARIO
rl.question('¿Cual es tu nombre? ', (nombre) => {
    console.log(`Hola, buen dia ${nombre}`);
    rl.close(); //CERRAR LA INTERFAZ    
})