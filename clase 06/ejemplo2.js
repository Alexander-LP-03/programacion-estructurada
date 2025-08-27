import readline from 'readline';

const rl = readline.createInterface({ 
input: process.stdin,
output: process.stdout
})

rl.question ('ingresa la temperatura en grado fahrenheit:', (temperatura) => {
        const temModificado = parseFloat((temperatura)*9/5 +32.);
        console.log(`La temperatura ${temperatura} en grado celsius es ${temModificado} F`);
        rl.close();
        
    });
