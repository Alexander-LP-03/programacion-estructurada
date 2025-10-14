//calcule el area de un triangulo
let triangulo = (base, altura) => {
    let area = (base * altura) / 2;
    return area;
}

console.log("El area del triangulo es:", triangulo(10, 5));

let triangulo2 = (base, altura) => (base * altura) / 2;
console.log("El area del triangulo es:", triangulo2(15, 10))