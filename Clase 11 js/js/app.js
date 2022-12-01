// function Persona (nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.presentation = (a) => {
//     alert(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años!`);
//     console.log(a);
//   }
// };

// const persona1 = new Persona('Ale', 25);

// const persona2 = new Object();
// persona2.name = 'Jose Lazcano';
// persona2.saludar = () => alert('Hola');
// console.log(persona2);

// const obj = {name: 'jose'};
// const obj2 = obj;

// console.log(obj2);
// obj.name = 'Ale';
// console.log(obj2);

// // Objeto Date
// const date = new Date();
// console.log(date.getFullYear());

// // Expresion regular, error y tray catch

// const emailValidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

// // try {
// //   if (emailValidation.test('alejandrogmail.com')) {
// //     alert('Email valido');
// //   } else {
// //     throw new Error('¡Ups, email invalido!');
// //   };
// //   alert('jajajaj');
// // } catch (err) {
// //   console.error(err.message);
// //   alert('Email invalido');
// // };

// // -------- CLASES---------

// class People {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   presentation () {
//     alert(`Hola mi nombre es ${this.name} y tengo ${this.age} años!`);
//   }
// };

// const people1 = new People('Vexler', 22);

//---------- Resolviendo ejercicios -----------
/*Modelando clases

Cuenta bancaria - Dificultad:  🟢🟡
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

class Cuenta {
  constructor(){
    this.nombre = 'Alex';
    this.saldo = 0;
  }
  ingresar(pesos) {
    const valorIngresado = parseFloat(pesos);
    try {
      if (!isNaN(valorIngresado)) {
        this.saldo = this.saldo + valorIngresado;
      } else {
        throw new Error('Tipo de dato no valido');
      }
    } catch (error) {
      console.error(error.message);
      alert('Solo puedes ingresar numeros');
    }
  }
  extraer(pesos) {
    const valorIngresado = parseFloat(pesos);
    try {
      if (!isNaN(valorIngresado)) {
        if (valorIngresado <= this.saldo) {
          this.saldo = this.saldo - valorIngresado;
        } else {
          throw new Error('Saldo insuficiente');
        }
      } else {
        throw new Error('Tipo de dato no valido');
      }
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  }
  informe() {
    alert(`El usuario ${this.nombre} tiene disponible: $${this.saldo}`);
  }
};

const bankUser = new Cuenta();