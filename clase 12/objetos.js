//const nombre = "alex";
//const edad = 18;
const altura = 1.80;

//creacion de objetos con object literal
const persona = {
    nombre: "alex",
    edad: 18,
    altura: 1.80
}

//imprimir el objeto
console.log(persona);

//acceder a las propiedades del objeto

//acceso por punto
console.log(persona.nombre);    
console.log(persona.edad);
console.log(persona.altura);

//acceso a las propiedades por corchetes
console.log(persona["nombre"]);
console.log(persona["edad"]);
console.log(persona["altura"]);

//agregamos mas propiedades al objeto
persona.peso = 75;
persona.genero = "masculino";
persona.casado = false;
persona.imagen = "imagen.jpg";

console.log(persona);

//eliminar propiedades del objeto
delete persona.casado;
delete persona.imagen;

console.log(persona);

//modificar el valor de una propiedad
persona.nombre = "juan";
console.log(persona);

//asignado el valor de la propiedad del objeto a una variable
const nom = persona.nombre;
console.log(nom);

//Destructuring
//const {nombre} = persona;
console.log(nombre);

//const {edad} = persona;
console.log(edad);

const {nombre,edad} = persona;
console.log(nombre);
console.log(edad);

