import readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let mensaje;

rl.question('Ingrese un numero: ', (num)=>{
    if(num>0){
        mensaje='El numero es positivo';
    }else{
        mensaje='El numero es negativo';
    }

    console.log(mensaje);
    rl.close();
})