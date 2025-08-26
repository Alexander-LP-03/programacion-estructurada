import readline from 'readline';
const rl = readline.createInterface({   
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su correo electrónico: ', (correo) => {
    const correoMinusculas = correo.toLowerCase();
    const esGmail = correoMinusculas.endsWith('@gmail.com'); 
    
    console.log(`Correo en minúsculas: ${correoMinusculas}`);
    console.log(`¿El correo pertenece al dominio Gmail? ${esGmail}`);
    rl.close();
    
});