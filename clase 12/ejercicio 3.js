//crea un objeto usuario conlas propiedades usuarios, email y rol, usa
//destructuring para crear variables con esas propiedades y mostrarlar en consola

const usuario = {
    usuarionombre: "yonathan",
    email: "yonathanCausa@gmail.com",
    rol: "admin"
}

const {usuarionombre,email,rol} = usuario;
console.log(usuarionombre);
console.log(email);
console.log(rol);
