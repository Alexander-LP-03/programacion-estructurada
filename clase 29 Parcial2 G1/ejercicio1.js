// Escriba un programa que solicite al usuario una cadena de texto (palabra o frase)
// utilizando la librería readline, el programa debe de contener una función que permita
// recibir la cadena ingresada y devuelva una cadena con todas sus letras ordenadas
// alfabéticamente
//explicando cada paso con comentarios en el código

// Importamos la librería readline para poder interactuar con el usuario a través de la consola
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

// Definimos la función ordenarcadena que recibe una cadena de texto como parámetro
function ordenarcadena (cadena) {
    let ordenar = cadena.split('').sort().join('');
    return ordenar;

}

// Utilizamos rl.question para solicitar al usuario que ingrese una cadena de texto
rl.question("Ingrese una cadena de texto:", cadena =>{
    let result = ordenarcadena(cadena);
    console.log(`la cadena ordenada es: ${result}`);
    rl.close();

});