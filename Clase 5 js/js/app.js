// const userInputNumber = parseInt(prompt("Ingresa un numero del 0 al 10"));
// if (!isNaN(userInputNumber)) {
//   switch (userInputNumber) {
//     case 0:
//     case 1:
//     case 2:
//       alert('Muy deficiente');
//       break;
//     case 3:
//     case 4:
//       alert('Insuficiente');
//       break;
//     case 5:
//     case 6:
//       alert('Suficiente');
//       break;
//     case 7:
//       alert('Bien');
//       break;
//     case 8:
//     case 9:
//       alert('Notable');
//       break;
//     case 10:
//       alert('Sobresaliente');
//       break;
//     default:
//       alert('Numero erroneo');
//       break;
//   }
// } else {
//   alert("Ingresa un numero");
// };

// let userConfirm = confirm('Ingresa una frase o una palabra');
// let aux = ' ';
// let userInputText;
// while (userConfirm) {
//   userInputText = prompt('Ingresa una palabra o frase');
//   if (userInputText == '' || userInputText == null) {
//     alert('No ingresaste datos');
//   }
//   aux = aux + '-' + userInputText;
//   aux = aux.substring(1, aux.length);
//   userConfirm = confirm('Click en aceptar para volver a ingresar texto, o cancelar para salir');
// };
// if (userConfirm || userInputText !== '') {
//   console.log(aux);
// };

// for (let index = 1; index <= 500; index++) {
//   document.write(index);
//   if (index % 4 == 0) {
//     document.write(' Es muntiplo de 4')
//   }
//   if (index % 9 == 0) {
//     document.write(' Es muntiplo de 9')
//   }
//   if (index % 5 == 0) {
//     document.write('<hr/>')
//   }
//   document.write('</br>');
// };

// Funciones declarativas

function newFunc (num1 = 5, num2 = 10) {
  return num1 + num2;
};


let result = newFunc(10,15);


// funcion anomina

const anonima = function () {
  for (let index = 1; index <= 500; index++) {
    document.write(index);
    if (index % 4 == 0) {
      document.write(' Es muntiplo de 4')
    }
    if (index % 9 == 0) {
      document.write(' Es muntiplo de 9')
    }
    if (index % 5 == 0) {
      document.write('<hr/>')
    }
    document.write('</br>');
  };
};
