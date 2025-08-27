import readline from 'readline';

const rl = readline.createInterface({ 
input: process.stdin,
output: process.stdout
})

rl.question ('ingresa la base del rectangulo:', (base) => {
    rl.question('ingresa la altura del rectangulo:', (altura) => {
        const area = parseFloat(base) * parseFloat(altura);
        console.log(`El area del rectangulo con base ${base} y altura ${altura} es: ${area}`);
        rl.close();
    });
    
    });