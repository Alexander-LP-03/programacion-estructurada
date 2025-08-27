import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su nombre completo: ', (nombreCompleto) => {
    const nombreLimpio = nombreCompleto.trim();
    const nombreSinEspacios = nombreLimpio.replaceAll(' ', '');
    const cantidadCaracteres = nombreSinEspacios.length;

    console.log(`Nombre sin espacios: "${nombreLimpio}"`);
    console.log(`Cantidad de caracteres sin contar espacios: ${cantidadCaracteres}`);
    rl.close();

})