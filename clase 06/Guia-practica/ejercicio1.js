import readline from 'readline';

const rl = readline.createInterface({ 
input: process.stdin,
output: process.stdout
})

rl.question ('ingresa la primera nota:', (nota1) => {
rl.question('ingresa la segundo nota:', (nota2) => {
rl.question('ingresa la tercer nota:', (nota3) => {
    const promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
    console.log(`El promedio de las notas ${nota1}, ${nota2} y ${nota3} es: ${promedio}`);
    rl.close();
});
}); 
});
        