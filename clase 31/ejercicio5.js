import readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let edad;

function edades(edad){
    if(edad >=0 && edad <= 11){
        return 'usted es un niño';
    }else if (edad >=12 && edad <=17){
        return 'usted es un adolecente'
    }else if (edad >=18 && edad <=59){
        return 'usted es un adulto'
    }else if (edad >=60)
        return ' usted es un anciano';
    else{
        return 'la edad ingresada no es valida';
    }
        
    }

rl.question('Ingrese su edad: ', (input) => {
    edad = parseInt(input);
    console.log(edades(edad));
    rl.close();
});