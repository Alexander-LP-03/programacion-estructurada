//Un programador quiere saber en qué parte de su mensaje aparece la palabra error.
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa su mesaje de error: ', (mensaje) => {
    const posicionError = mensaje.indexOf('error');

    console.log(`La palabra "error" se encuentra en la posición: ${posicionError}`);
    rl.close();
});
