import readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let des;

//crear la funcion
function descuento(compra) {
    if(compra>=100){
        descuento = 0.10;
    }else if (compra >= 50 && compra <=99){
        descuento = 0.05;
    }else{
        descuento = 0;
    }
    const total = compra - (compra * descuento);
    return total;
}
rl. question('Ingrese el monto de la compra: ', (monto)=>{
    let compra = Number(monto);
    const totalPagar = descuento(compra);
    console.log('El total a pagar es: $' + compra , 'y el total a pagar con descuento es de: $' + totalPagar)
    rl.close();
})

