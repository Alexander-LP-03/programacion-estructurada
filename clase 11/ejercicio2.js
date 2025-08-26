//Un programa de sorteos necesita generar un número aleatorio entre 0 y 29 para asignar un premio.

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero del 0 al 29: ', (num) => {
    let numero = Number(num);
    let randomNum = Math.floor(Math.random() * numero) + 1;
    console.log(`\El numero aleatorio del 0 al 29 es: ${randomNum}`);

    rl.close();
})
 