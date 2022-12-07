// class Rectangulo {
//   constructor(height = 0, width = 0){
//     this.height = height;
//     this.width = width;
//   }
//   changeHeight( value ){
//     this.height = value;
//   }
//   set changeWidth( value ){
//     this.width = value;
//   }
//   get area(){
//     return this.height * this.width;
//   }
// }

// const obj = new Rectangulo();

// window.alert('llegue')

//-------------BOM
//http://127.0.0.1:5500/Clase%2012%20js/index.html
//console.log(window.navigator);
// console.log(window.location.href);
// console.log(window.history);
// var historyObj = window.history;
// console.log(historyObj.back());
// console.log(window.frames.screen);
// console.log(window.screen);


// const statusCode = 400;
// if (statusCode == 200) {
//   if (window.location.protocol == 'http:') {
//     window.alert('Este sitio no es seguro');
//     window.location.href = 'https://www.google.com.ar';
//   }
// } else {
//   window.alert('La pagina que buscas no esta disponible ahora.');
//   // window.location.reload();
// };


// const bucle = setInterval(() => {
//   console.log('Estoy en un setInterval');
// }, 500);

// const stopBucle = () => {
//   clearInterval(bucle);
//   console.log('El bucle se ha detenido');
// };

// setTimeout(() => {
//   stopBucle();
// }, 3000);

// console.log(document.body.innerHTML = '<h1>Ejemplo</h1>');

const getElementById = document.getElementById('buttonTest');

console.log(getElementById);

const querySelector = document.querySelector('.divClass')
const querySelector2 = document.querySelector('#divId')
console.log(querySelector, querySelector2);

