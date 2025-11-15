import readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const frutas=['manzana', 'banana', 'naranja', 'fresa'];

function precioFrutas(fruta){
    let precio;

    switch(fruta.toLowerCase()){
        case 'manzana':
        precio = 0.75;
        break;
        case 'banana':
        precio = 0.50;
        break;
        case 'naraja':
            precio = 0.80;
        break;
        case 'fresa':
        precio = 1.20;
        break;
        default:
        precio = 'fruta no definida';
    }
    return precio
}

rl.question('Ingrese el nombre de una fruta: ',(frutas)=>{
    const precio = precioFrutas(frutas);

    if(frutas.includes(frutas.toLowerCase())){
        console.log(`El precio de la ${frutas} es $${precio.toFixed(2)}`);
    }else{
        console.log('Fruta no valida');
    }
    rl.close();
})
