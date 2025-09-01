const producto = {
    Detalles: {
       nombre: "Pollo",
       precio: "400",
    categoria: "Comida Rapida",
       Inventario: {
        stock: 30,
        proveedor: "Pollos S.A de C.V",
        ubicacion: "El Salvador",
    Historial: {
        fechaIngreso: "10/10/2023",
        ultimaVenta: "20/10/2023",
        ventaTotales:"1500",
        }

       }
    }
}

console.log(producto);

//mostrar el nombre del producto
console.log(producto.Detalles);

//actualizar el precio del producto
producto.Detalles.stock += 50;
console.log(producto.Detalles.Inventario);

//cambiar la categoria del producto
producto.Detalles.categoria = "electronica";
console.log(producto.Detalles);

//extraer el nombre y precio en variabls
const {nombre , precio} = producto.Detalles;
console.log(nombre, precio);



