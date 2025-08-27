//ejercicio 1 parte 2
import readline from 'readline';

const rl = readline.createInterface({ 
input: process.stdin,
output: process.stdout
})

rl.question('¿En que ciudad vives? ', (ciudad) => {
    console.log(`eres de ${ciudad} y es un lugar hermoso`);
    rl.close();   
})