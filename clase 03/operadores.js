//operadores aritmeticos

let a = 15;
let b = 4;

suma = a+b;
console.log("la suma de a + b: , ${a+b}");
console.log("la resta de a + b: , ${a-b}");
console.log("la multiplicasion de a + b: , ${a*b}");
console.log("la division de a + b: , ${a/b}");
console.log("el porcentaje de a + b: , ${a%b}")

//oepradpres de comparacion

let edad1 = 30;
let edad2 = 25;

console.log("Edad 1 > Edad 2?", edad1 > edad2);
console.log("Edad 1 < Edad 2?", edad1 < edad2);
console.log("Edad 1 == Edad 2?", edad1 == edad2);
console.log("Edad 1 != Edad 2?", edad1 != edad2);
console.log("Edad 1 >= Edad 2?", edad1 >= edad2);
console.log("Edad 1 <= Edad 2?", edad1 <= edad2);

//operadores d asignacion

let puntos = 0;

puntos =puntos +10;
console.log('el puntaje final es $(puntos)')
puntos +=10;

puntos -= 5;
puntos *= 2;

//operadores logicos

let tieneTarea = false;
let estudio = true;

let puedeSalir = !tieneTarea && estudio;
console.log('¿puede salir a jugar? $(puede salir)');

//operadores ternarios

let numero =9;
let resultado = (numero % 2 ===0) ? "par" : "Impar";
console.log('el numero es : ${resultado}')
