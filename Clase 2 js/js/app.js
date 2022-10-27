// let nombre = 'Ale';

// console.log( nombre );

// let incrementar = 1;
// incrementar--
// console.log(incrementar)

// let onOff = true;

// console.log(!onOff);

// console.log(onOff);

// console.log( 2 === '2' );

// console.log( 3 !== '3' );

// console.log( 10 >= 10 );

// const email = false;
// const pass = false;

// console.log( email == true && pass == true );

// console.log( email == true || pass == true );
const defaultAge = 18;
const defaultWallet = 20000;

const ageRodri = defaultAge || prompt("Ingresa tu edad");
const walletRodri = defaultWallet || prompt("Ingresa tu money");
const minYears = 18;
const minWallet = 20000;
const onOff = true;
console.log("antes de el if");

console.log(ageRodri);

//    IF

// if ( typeof(ageRodri) == 'number' ) {
//   if (ageRodri >= minYears || walletRodri >= minWallet) {
//     alert('Si pasas, capo total');
//   };
// }

// console.log('Hola, yo voy despues de el if');

//     IF ELSE

// if ( ageRodri >= 18 ) {
//   alert('Si pasas, creeeekk');
// } else {
//   alert('Vaya a la casa');
// };

//   CONDICIONAL ANIDADA
const num = 10;

// if (num < 10) {
//   console.log('el numero es menor a 10');
// } else {
//   if (num > 10) {
//   console.log('el numero es mayor a 10');
//   } else {
//     if (num == 10) {
//       console.log('el numero es igual a 10');
//     }
//   }
// };

// Condicional multiple

// if (num < 10) {
//   console.log("el numero es menor a 10");
// } else if (num > 10) {
//   console.log("el numero es mayor a 10");
// } else if (num === 10) {
//   console.log("el numero es igual a 10");
// } else {
//   console.log("Mandaste fruta amigo");
// }

// console.log("Hemos dejado la condicional multiple");

// Switch
const lunes = 'lunes';
const day = lunes || prompt('que dia es hoy?');

switch (day) {
  case "lunes":
    console.log("Si, hoy arranca la semana");
    break;
  case "martes":
    console.log("Es martes, no esta tan mal");
    break;
  case "miercoles":
    console.log("Miercoles, que voy a hacer el finde?");
    break;
  case "jueves":
    console.log("Acortamos la semana");
    break;
  case "viernes":
    console.log("Es hoyy es hoy!!");
    break;
  case "sabado":
    console.log("Me pase de mergas ayer");
    break;
  case "domingo":
    console.log("Deme ese alikal");
    break;
  default:
    console.log("nose en que dia vivo");
    break;
};


//  Condicionales compuestas

let num2 = 10;
let message = 'El numero esta entre 10 y 20';
if ( num2 >= 10 || num2 <= 20) {
  console.log(message);
};

//      Bucles/loops
let i = 1;
while (i <= 100) {
  console.warn('Hola Mundo');
  i++;
};