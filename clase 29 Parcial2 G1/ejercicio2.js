// Escriba un programa que solicite al usuario una cadena de texto, este programa debe
// de contener una función que reciba la cadena como parámetro y devuelva una nueva
// cadena donde la primera letra de cada palabra esté en mayúsculas
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function cadenaTexto(cadena) {
 return cadena.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
    .join(' ');
}

rl.question("Ingrese una cadena de tecto:", cadena =>{
    let result = cadenaTexto(cadena);
    console.log("La cadena con la primera letra en mayuscula es: " + result);
    rl.close();
})


      
    
