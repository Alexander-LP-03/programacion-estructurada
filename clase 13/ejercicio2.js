const perfilUsuario = {
    informacionPersonal: {
        nombre: "Juan",
        edad: 30,
        email:"juancito234@gmail.com",
    },
    preferenciasDeLaAplicacion: {
       idioma: "Español",
       notificaciones: true,
       tema: "Oscuro",
    },
    estadisticasDeUso: {
        fechaRegistro: "01/01/2023",
        ultimoAcceso:"15/10/2023",
        numeroSesiones: 120,
        }
       }
    


console.log(perfilUsuario);

//cambiar idioma de español a ingles
perfilUsuario.preferenciasDeLaAplicacion.idioma = "Ingles";
console.log(perfilUsuario.preferenciasDeLaAplicacion);

//actualizar ultimo acceso
perfilUsuario.estadisticasDeUso.ultimoAcceso = new Date().toLocaleDateString();
console.log(perfilUsuario.estadisticasDeUso);

//Eliminar una preferencia
delete perfilUsuario.preferenciasDeLaAplicacion.tema;
console.log(perfilUsuario.preferenciasDeLaAplicacion);

//extraer email y el idioma en variables separadas
const {email} = perfilUsuario.informacionPersonal;
const {idioma} = perfilUsuario.preferenciasDeLaAplicacion;
console.log(email, idioma);
