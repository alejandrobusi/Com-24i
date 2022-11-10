// Funciones declarativas
const alumnos = ['ale', 'santi', 'andre'];

function findUserByName(students, matchName) {
  for (let i = 0; i < students.length; i++) {
    if (students[i] == matchName) {
      return `Se encontro el alumno "${students[i]}"`;
    }
  }
};



// Funciones anominas
const saludar2 = function (students, matchName) {
  for (let i = 0; i < students.length; i++) {
    if (students[i] == matchName) {
      return `Se encontro el alumno "${students[i]}"`;
    }
  }
};
 

// Funcion Flecha o arrow function

const suma = (a,b) => {
  return a + b
};

//OPERADORES TERNARIOS
// equivalente a if else
console.log( 101 == 10 ? 'yes' : 'not');
// equivalente a if
console.log( 101 == 10 && 'yes');


const suma2 = a => a + 10;

// const age = prompt('Que edad tienes?');

// const isOld = (age >= 18) 
// ? () => alert('pasa capo') 
// : () => alert('no creck, no pasas');

// isOld();

var elvisLives = Math.PI > 4 ? "Sip" : "Nop";

// SCOPE Global

const name = 'Santi';

const saludar3 = () => {
  let name = 'AgusRojas'
  console.log(name);
};

const people = 'Andre';

const welcome = () => {
  let userInput = document.getElementById('inputUser').value
  alert(`Bienvenida ${userInput}`);
};

// SCOPE LOCAL

const saludar4 = () => {
  let userName = 'Nico';
  alert(`Hola ${userName}`);
};

if (true) {
  var student = 'arnold';
}
console.log(student);