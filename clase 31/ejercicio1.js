import readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const contra='causa03'
let mensaje;

rl.question('Ingrese una contraseña: ', (pass)=>{
    if(contra===pass){
        mensaje='CONTRASEÑA CORRECTA';
    }else{
        mensaje='CONTRASEÑA INCORRECTA';
    }

    console.log(mensaje);
    rl.close();

})