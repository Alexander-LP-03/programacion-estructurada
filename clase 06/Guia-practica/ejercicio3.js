import readline from 'readline';

const rl = readline.createInterface({ 
input: process.stdin,
output: process.stdout
})

rl.question ('Ingresa el precio unitario del producto:', (precioUnitario) =>   {
    rl.question('Ingresa la cantidad de productos comprados:', (cantidad) => {
        const total = parseFloat(precioUnitario) * parseInt(cantidad);
        console.log(`El total a pagar por ${cantidad} productos a un precio unitario de ${precioUnitario} es: ${total}`);
        rl.close();
    });
});