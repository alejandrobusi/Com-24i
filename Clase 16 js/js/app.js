// console.log(document.body.innerHTML = '<h1> Hello </h1>');
// document.body.innerText = '<h1> Hello </h1>';
// console.log(document.getElementById('titulo'));
console.log(document.querySelectorAll('h1'));
const allH1 = document.querySelectorAll('h1')[1];

let miH2 = document.createElement('h2');
miH2.innerHTML = 'Hola Mundo';
miH2.className = 'miClaseH2';
document.getElementById('contenedorDiv').appendChild(miH2);

let obtenerDiv = document.getElementById('contenedorDiv');
document.getElementById('contenidoClonado').appendChild(obtenerDiv.cloneNode(true));

const leerInpup = () => console.log(document.getElementById('seleccion').value);

const hacerClick = () => {
  alert(document.getElementById('miInput').value);
};

const readInputOnKeyPress = (value) => {
  console.log(value);
};
