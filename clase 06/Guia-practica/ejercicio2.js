import readline from 'readline';

const rl = readline.createInterface({ 
input: process.stdin,
output: process.stdout
})

rl.question ('Ingresa la cantidad de kilometros ',(kilometros) => {
        const millas = parseFloat(kilometros) * 0.621371;
        console.log(`La distancia de ${kilometros} kilometros es igual a ${millas.toFixed(2)} millas.`);
        rl.close(); 
});