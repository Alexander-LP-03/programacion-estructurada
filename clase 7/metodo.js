// importar el modulo
import readine from 'readline';

//crear la interfaz de lectura
const rl = readine.createInterface({
    input: process.stdin,
    output: process.stdout 
});

//realizamos la pregunta
rl.question(' Ingresa una frase ', (frase) => {
console.log(`\n === Tratamiento de cadenas ===`);

   //1.length 
   const fraseLength = frase.length;
   console.log(`La longitud de la frase es: ${fraseLength}`);

   //2.toUpperCase
   const fraseMayus = frase.toUpperCase();
   console.log(`La frase en mayúsculas es: ${fraseMayus}`);

   //3.toLowerCase
   const fraseMinus = frase.toLowerCase();
    console.log(`La frase en minúsculas es: ${fraseMinus}`);
  

   //4.trim
    const fraseTrim = frase.trim();
    console.log(`La frase sin espacios al inicio y final es: '${fraseTrim}'`);

    //5.substring
    const subCadena = frase.substring(2,6);
    console.log(` los primeros 5 caracteres de la frase son: '${subCadena}'`);

    //6.slice
    const subCadenaSlice = frase.slice(1,5);
    console.log(`los primeros 5 caracteres de la frase son: '${subCadenaSlice}'`); 

    const subCadenaSlice2 = frase.slice(-6);
    console.log(`los últimos 6 caracteres de la frase son: '${subCadenaSlice2}'`);

    //7.replace
    const fraseReemplazada = frase.replace('hola', 'adios');
    console.log(`La frase con 'hola' reemplazado por 'adios' es: '${fraseReemplazada}'`);

    //8. replaceAll
    const fraseReemplazadaAll = frase.replaceAll('hola', 'adios');
    console.log(`La frase con todas las ocurrencias de 'hola' reemplazadas por 'adios' es: '${fraseReemplazadaAll}'`);

    //9.split divide la frase en palabras separandolas por un espacios
    const fraseArray = frase.split(' ');
    console.log(`La frase dividida en palabras es: ${fraseArray}`);

    //10. includes
    const contieneHola = frase.includes('hola'); 
    console.log(`La frase contiene la palabra 'hola': ${contieneHola}`);

    //11. indexOf
    const indiceHola = frase.indexOf('hola');
    console.log(`El índice de la primera ocurrencia de 'hola' es: ${indiceHola}`);

    //12.strartsWith
    const empiezaConHola = frase.startsWith('hola'); 
    console.log(`La frase empieza con 'hola': ${empiezaConHola}`);

    //13.endsWith
    const terminaConAdios = frase.endsWith('adios'); 
    console.log(`La frase termina con 'hola': ${terminaConAdios}`);
     rl.close();

});