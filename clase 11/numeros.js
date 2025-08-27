import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero: ', (num) => {
    let numero = Number(num);

    console.log(`\rNumero ingresado: ${numero}`);

//Redondeo al entero mas cercano
    //console.log(`Math.round(${numero})->${Math.round(numero)}`);
  
 //Redondeo hacia abajo
    //console.log(`Math.Floor(${numero})->${Math.floor(numero)}`);

 //Redondeo hacia arriba
   //console.log(`Math.ceil(${numero})->${Math.ceil(numero)}`);

//Raiz cuadrada
  //console.log(`Math.sqrt(${numero})->${Math.sqrt(numero)}`);

//Potencia
  //console.log(`Math.pow(${numero})->${Math.pow(numero,3)}`);

//Valor absoluto
  //console.log(`Math.abs(${numero})->${Math.abs(numero)}`);

//Valor maximo
  //console.log(`Math.max(${numero})->${Math.max(numero,10,-5)}`);

//valor minimo
  //console.log(`Math.min(${numero})->${Math.min(numero,-5,30)}`);

//Numero aleatorio
  //console.log(`Math.random()->${Math.random()}`);
  //let randomNum = Math.floor(Math.random() * numero) + 1
  //console.log(`Numero aleatorio entre 1 y 20: ${randomNum}`);

//Formateo de numeros
  //console.log(`toFixed(2): ${numero.toFixed(2)}`);

//redondeo a un numero de digitos significativos
  //console.log(`toPrecision(4): ${numero.toPrecision(4)}`);

//notacion cientifica
  //console.log(`toExponential(2): ${numero.toExponential(2)}`);

//Conversion a diferentes bases
  //console.log(`toString(2): ${numero.toString(2)}`);
  //console.log(`toString(16): ${numero.toString(16)}`);

    rl.close();
    
}) 
