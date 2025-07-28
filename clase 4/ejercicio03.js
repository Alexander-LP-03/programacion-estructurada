import readline from 'readline';

const rl = readline.createInterface({ 
input: process.stdin,
output: process.stdout
})

rl.question('¿Cual es tu primer nombre? ', (nombre) => {
rl.question('¿Cual es tu primer apellido? ', (apellido) => {
    console.log(`hola, tu primer nombre es: ${nombre}, y tu primer apellido es: ${apellido}`);
    rl.close();   
})
})