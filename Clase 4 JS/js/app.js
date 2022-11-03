// var msg = 'Hello';
// let msg2 = 'Hello';
// const msg3 = 'bye';
// console.log(msg);
// console.log(msg2);
// console.log(msg3);
// console.error(msg);
// console.warn(msg2);


// console.group('grupo de mensajes')
// console.log(msg2);
// console.log(msg3);
// console.groupEnd();
// console.log('Hola');

let alumnos = ['Nico', 'Santi', 'Juli', 'Romi'];
// console.log(alumnos[alumnos.length - 1]);

// let match = 42;
let numbers = [ 10, 200, 42, 1200 ];

// for(let i = 0; i < numbers.length; i++) {
//   if (match == numbers[i]) {
//     alert('se hizo match, encontramos el numero 43 en este array');
//   }
// };
// Agregar items al final de un array
// alumnos.push('Agustin');
// console.log(alumnos);
// // eliminar el ultimo item

// alumnos.pop();
// console.log(alumnos);
// // Agregar items al principio de un array

// alumnos.unshift('Lucas');
// console.log(alumnos);

// // eliminar el primer item de un array

// alumnos.shift();
// console.log(alumnos);

//
// alumnos.map((alumno) => {
//   if (alumno == 'Romi') {
//     alert(`El alumno ${alumno}, se encuentra en la lista`)
//   }
// });

// Encontrar indice de un item con el nombre

// const find = alumnos.indexOf(prompt('Ingresa el nombre'));
// if (find != -1) {
//   alert(`Se encontro un item: ${alumnos[find]}`);
// } else {
//   alert('No existe el item');
// };
// console.log(find);

// Eliminar uno o mas elemento con su posicion(index)

// alumnos.splice(2,2);
// console.log(alumnos);

// Añadir nuevos elementos con un splice

// alumnos.splice(0,1, 'Ale');
// console.log(alumnos);

// Concatenar arrays
const cars = ['fiat', 'peugeot'];
const newArray = numbers.concat(alumnos, cars);
console.log(newArray);

// determinar si existe un valor

console.log(newArray.includes(11));

// invertir orden de un array

// console.log(newArray.reverse());

// ordenar los items de un array
const letters = ['d', 'c', 'a', 'b'];
console.log(letters.sort());

// Concatenar como string  todo un array
const concatArrayString = newArray.join()
console.log(newArray);
console.log(concatArrayString);

// Extraer cierta porcion de un array 

console.log(newArray.slice(0,3));