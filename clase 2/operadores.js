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

//ejercicio 1
let base = 1.50;
let altura = 3.59;
let areaTriangulo = (base * altura) / 2;
console.log (`El area de un triangulo es: ${areaTriangulo}`);

//ejercicio 2
let num1 = 9
let num2 = 14
let comparacion = (num1 > num2) ? "El primer numero es mayor" :
(num1 < num2) ? "El primer numero es menor" :
"los numeros son iguales";
console.log(comparacion);

//ejercicio 3
let numero1 = 17;
let estaEntre10y20 = (numero1 >= 10 && numero1 <= 20);
console.log(`El numero ${numero1} esta entre 10 y 20? ${estaEntre10y20}`);

//ejercicio 4
let valor = 10;
valor += 5;
valor *= 2;
console.log(`El valor final es: ${valor}`);

//ejercicio 5
let valor1 = 10;
let valor2 = "10";
let sonIguales = valor1 == valor2;
let sonIgualesTipo = valor1 === valor2; 
console.log(`05- Son los valores iguales? ${sonIguales}
Son valores del mismo tipo? ${sonIgualesTipo}`);
