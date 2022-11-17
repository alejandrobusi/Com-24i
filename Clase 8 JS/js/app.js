// let saludo = "Hola, Mi nOmbre es";
// let userName = "AlejAndrO";
// let lastName = 'Busi';
// const presentation = "Hola, mi nombre es" + ' ' + userName + " " + lastName;

// const presentation2 = `${saludo} ${userName} ${lastName}`;
// console.log(presentation);

// console.log(lastName[lastName.length -1]);
// const todoEnMayus = presentation2.toUpperCase();
// console.log(presentation2.toUpperCase());
// console.log(presentation2.toLowerCase());

// let ultimaPisicionDeApellido = lastName.length -1;
// let ultimoiCaracterDeApellido =lastName.charAt(ultimaPisicionDeApellido);

// console.log(ultimoiCaracterDeApellido);

// let apellidoIngresado = prompt('Ingresa un apellido').trim();
// let primerLetra = apellidoIngresado.charAt(0);
// let letraMayus = primerLetra.toUpperCase();
// let restoDelApellido = apellidoIngresado.substring(1);
// console.log(`El apellido ingresado es: ${letraMayus}${restoDelApellido}`);
// const txt = '  Hola Creeek          ';
// console.log(txt.trimStart().trimEnd());

// const txt2 = 'Hola Mundo';
// console.log(txt2.repeat(3));

// console.log(txt2.replace('Mundo', 'Gente'));


// const userInput = prompt('Ingresa una palabra');

// const isInclud = 'The quick brown fox jumps over the lazy dog.'.includes(userInput);

// isInclud ? alert('Se encontro coincidencia') : alert('No se encontro coincidencia');
//------------------

let num1 = 44.49;

let num2 = 25;

let num3 = 34.256778;

// Redondear para abajo
console.log(Math.floor(num1));

// Redondear al numero mas cercano

console.log(Math.round(num1));

// Retornar el numero mas grande

console.log(Math.max(num1, num2, num3));

// Retornar el numero mas pequeño

console.log(Math.min(num1, num2, num3));

// Elevar a la potencia
const base = parseInt('4');
const exponente = 2;
console.log(Math.pow(base, exponente));

// Obtener raiz cuadrada

console.log(Math.sqrt(num2));

// obtener numero con dos decimales

console.log(Math.round(num3 * 100) / 100);
console.log(Number(num3.toFixed(2)));

// Eliminar decimales

console.log(Math.trunc(num3));

// Numero Random

console.log(Math.floor(Math.random() * 10));

// Redondear para arriba

console.log(Math.ceil(num3));