import { parse } from 'path';
import readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log("===MENU DE OPERACIONES===");
console.log("1. sumar");
console.log("2. restar");
console.log("3. multiplicar");
console.log("4. dividir");
console.log("5. salir");

function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}

rl.question('Seleccione una opcion (1-5): ', (option)=>{
    let opcion = Number(option);

    switch(opcion){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:

        rl.question('Ingrese el primer numero: ',(num1)=>{
            rl.question('Ingrese el segundo numero: ',(num2)=>{
                let a = parseFloat(num1);
                let b = parseFloat(num2);

                let resultado = 0;
                switch(opcion){
                    case 1:
                        resultado = sumar(a, b);
                        console.log(`El resultado de la suma es: ${resultado}`);
                    break;
                    case 2:
                        resultado = restar(a, b);
                        console.log(`El resultado de la resta es: ${resultado}`);
                    break;
                    case 3:
                        resultado = multiplicar(a, b);
                        console.log(`El resultado de la multiplicacion es: ${resultado}`);
                    break;
                    case 4:
                        resultado = dividir(a, b);
                        console.log(`El resultado de la division es: ${resultado}`);
                    break;
                    case 5:
                        salir();
                    break;
                    
                }
                rl.close();

            })
        
        })
    }

 
})
