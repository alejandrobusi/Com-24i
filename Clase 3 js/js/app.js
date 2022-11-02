/*document.write('<img src="https://picsum.photos/200/300?random=1">');

document.write('</br>');

document.write(3 + 5);

document.write('</br>');

const userName = prompt('Ingresa tu nombre');

document.write('Bienvenido ' + userName);

document.write('</br>');

document.write(`Bienvenido ${userName}`);
*/

// const num1 = parseInt(prompt('Ingresa el primer valor'));
// const num2 = parseInt(prompt('Ingresa el segundo valor'));
// document.write(`La suma es igual a ${ num1 + num2 }`);

// const num1 = parseFloat(prompt('Ingresa el primer valor'));
// const num2 = parseFloat(prompt('Ingresa el segundo valor'));

// if (num1 == num2) {
//   document.write(`Los numeros son iguales`);
// } else {
//   if (num1 > num2) {
//     document.write(`El mayor es ${num1}`);
//   } else {
//     document.write(`El mayor es ${num2}`);
//   };
// }

// const num1 = parseInt(prompt("ingresa el primer numero"));
// const num2 = parseInt(prompt("ingresa el segundo numero"));
// const num3 = parseInt(prompt("ingresa el tercer numero"));


// if (num1 > num2 && num1 > num3) {
//   alert(`El mayor es ${num1}`);
// } else if (num2 > num3) {
//   alert(`El mayor es ${num2}`);
// } else {
//   alert(`El mayor es ${num3}`);
// };

// const isDiv = prompt('Ingresa un numero');

// if (isDiv % 2 === 0) {
//   alert(`El numero ${isDiv}, es divisible por 2`);
// } else {
//   alert(`El numero NO ${isDiv}, es divisible por 2`);
// };

const inputString = prompt('Ingresa una frase').toLowerCase();
let allVoc = '';
for (let i = 0; i < inputString.length; i++) {
  if (inputString[i] == 'a' || inputString[i] == 'e' || inputString[i] == 'i' || inputString[i] == 'o' || inputString[i] == 'u') {
    allVoc = allVoc + inputString[i];
  }
}
console.log(allVoc);
