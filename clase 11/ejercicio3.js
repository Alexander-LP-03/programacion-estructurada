//Una tienda de electrodomésticos necesita encontrar el precio más barato y el más caro de su lista de precios: [30, 52, 35, 1, 12, -3].

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una lista de precios separados por comas, ejemplo: 45, 67, 2, 14, 89 : ', (lista) => {
    let precios = lista.split(',').map(Number);

    let precioMaximo = Math.max(...precios);
    let precioMinimo = Math.min(...precios);

    console.log(`El precio más caro es: ${precioMaximo}`);
    console.log(`El precio más barato es: ${precioMinimo}`);

    rl.close();
})