const numero=[10,20,30,40,50];

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo');

const deTodo = ['hola',10,null,true,{nombre:'juan',trabajo:'programador'},[1,2,3]];
console.log(deTodo[5][1]);

//modificar los valores de un arreglo
numero[1] = 80;
//console.table(numero);

meses.push('noviembre')
console.log(meses);

meses.pop();
console.log(meses);

meses.shift();
console.log(meses);

meses.unshift('Enero');
console.log(meses);

for(i=0;i<meses.length;i++){
    console.log([i]);
}