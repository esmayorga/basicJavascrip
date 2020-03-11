// Tipo de variable
console.log('>>> TIPO DE VARIABLES')
var numero = 2;
var tipoDeVariable = typeof(numero);
console.log(tipoDeVariable);

// Concatenacion de variables
console.log('>>> CONCATENACION CON EL SIMBOLO `')
var variable1 = 'Benito';
var variable2 = 'Lopez'
var variable3 = `Tu nombre es ${variable1} ${variable2}`;
// ALT 96 para sacar el simbolo `
console.log(variable3);

// Cambio de tipo de variables
console.log(">>> CAMBIO DE TIPO DE VARIABLES");
var texto = '2';
var numero = 55;
// Convertir a String
var numero1 = Number(texto);
var texto1 = String(numero);
console.log(numero1);
console.log(texto1);

// Otra forma de escribir Condionales
console.log(">>> OTRA FORMA DE ESCRIBIR CONDIONALES CON ? Y :")
var resultado = 10;
var respuesta = resultado > 20 ? 'Eres mayor de edad' : 'No eres mayor de edad';
console.log(respuesta);

// Parte de los arrays
console.log(">>>ARRAYS");
var arreglo = ["Primero", "Segundo", "Tercero"]
console.log("Array inicial");
console.log(arreglo);

console.log("Agregar un array a la ultimo valor");
arreglo.push("cuarta");
console.log(arreglo);

console.log("Eliminar el  valor del ultimo arreglo");
arreglo.pop();
console.log(arreglo);

console.log("Agregar un arreglo de primeras");
arreglo.unshift("Cero");
console.log(arreglo);

console.log("Eliminar el primer valor de un array");
arreglo.shift();
console.log(arreglo);

console.log("cantidad de valores en un array");
console.log(arreglo.length);

console.log("Posicion de un Array");
var positionArray = arreglo.indexOf("Primero");
console.log(positionArray);

// Ciclo for of con un array.
console.log(">>> CLICLO FOR OF CON ARRAY O OBJETO");
var estudiantes = ['Maria', 'Claudia', 'Penepole'];
for (var estudiante of estudiantes) {
    console.log(`Hola ${estudiante}`);   
}

// Objetos
////
console.log("CREACION DE OBJETOS");
var automoviles = {
    marca: "Toyota",
    año: 2020,
    description: function() {
        console.log(this.marca);}
}
console.log(automoviles.description());

// Creacion de objetos mas profesionales.
console.log("Creacio de objetos");

 function auto (marca, modelo, año) {
    this.marca = marca,
    this.modelo = modelo,
    this.año = año;
}

var autoNuevo = new auto ("Toyota", "no se", 2020);
console.log(autoNuevo);

// Array con objetos
console.log("Array con objetos");
var articulos = [
    { nombre: 'Compu', costo: 2500 },
    { nombre: 'Table', costo: 250 },
    { nombre: 'Celu', costo: 25 }
]

console.log("Array Original");
console.log(articulos);

    // funcion filter
console.log("funcion filter");
articulosFiltrados = articulos.filter((articulo) => articulo.costo <= 250 );
console.log(articulosFiltrados);
    
    // funcion map
console.log("Metodo map trae los datos de un solo campo")
nombreArticulos = articulos.map((articulo) => articulo.nombre);
console.log(nombreArticulos);

    // Funcion find Encontrar valor
console.log("Funcion Array find encontar un valor");
var encuentroArticulo = articulos.find((articulo) => articulo.nombre === 'Celu');
console.log(encuentroArticulo);

    // Metodo foreach, este no crea un nuevo array si no se basa en el original
console.log("METODO forEeach");
articulos.forEach((articulo) => console.log(articulo.nombre));

    // Metodo some, no bota un valor boleano si cumple la condion

console.log("Metodo Some, no arroga un valor booleano si cumple una condicion");
var articulosBaratos = articulos.some((articulo) => articulo.costo <= 25);
console.log(articulosBaratos);


var pepe = false;
switch (pepe) { 
    case false: console.log("Soy falso :( ")
    case true: console.log("Soy verdadero!") }




