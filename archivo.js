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

//cambio de tipo de variables
console.log(">>> CAMBIO DE TIPO DE VARIABLES");
var texto = '2';
var numero = 55;
//convertir a Strin
var numero1 = Number(texto);
var texto1 = String(numero);
console.log(numero1);
console.log(texto1);

//Otra forma de escribir Condionales
console.log(">>> OTRA FORMA DE ESCRBIR CONDIONALES CON ? Y :")
var resultado = 25;
var respuesta = resultado > 20 ? 'eres mayor de edad' : 'no eres mayor de edad'