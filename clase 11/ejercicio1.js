//Solicita un número al usuario y muestra el cuadrado de ese número y su raíz cuadrada. 

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

rl.question('Ingrese un numero: ', (num) => {
    let numero = Number(num);

    console.log(`\rNumero ingresado: ${numero}`);
    console.log(`El cuadrado de ${numero} es: ${Math.pow(numero,2)}`);
    console.log(`La raiz cuadrada de ${numero} es: ${Math.sqrt(numero)}`);

    rl.close();
})
