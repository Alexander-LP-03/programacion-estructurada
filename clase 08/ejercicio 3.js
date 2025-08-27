import readline from 'readline';
const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout  
});

rl.question('Ingrese un código: ', (codigo) => {
    const ultimosCuatroCaracteres = codigo.slice(-4);
    
    console.log(`Los últimos 4 caracteres del código son: ${ultimosCuatroCaracteres}`);
    rl.close();
});