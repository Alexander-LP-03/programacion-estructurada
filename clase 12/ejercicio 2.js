//al objeto animal agrega una nueva propiedad (la que desees)
//imprimela en conola y elimina la propiedad raza.

const raza = "pastor aleman";
const tamaño = "grande";
const color = "negro"

const animal = {
    raza: "pastor aleman",
    tamaño: "grande",
    color: "negro"
}

console.log(animal.raza);
console.log(animal.tamaño);
console.log(animal.color);
//////////////////////////

animal.peso = 30;
animal.sexo = "macho";

console.log(animal);
/////////////////////////

delete animal.raza;
console.log(animal);