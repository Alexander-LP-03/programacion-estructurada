import readline from 'readline';

const rl = readline.createInterface({ 
input: process.stdin,
output: process.stdout
})

rl.question ('ingresa un primer numero:', (num1) => {
    rl.question('ingresa un segundo numero:', (num2) => {
        const suma = parseInt(9+num1) + parseInt(num2);
        console.log(`La suma de ${num1} y ${num2}, es: ${suma}`);
        rl.close();
    });
    
});