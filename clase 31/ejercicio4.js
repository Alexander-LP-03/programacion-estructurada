import readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const nombres=['alex', 'karen', 'yonathan', 'elizabeth'];

function existe(nombre){
    if(nombres.includes(nombre)){
        return 'el nombre ' + (nombre) + ' si esta en la lista';
    }else{
        return 'el nombre ' + (nombre) + ' no esta en la lista';
    }
}

rl.question('Ingrese un nombre: ', (nom)=>{
    let resultado = existe(nom);
    console.log(resultado);
    rl.close();
})