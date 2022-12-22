const calcular = () => {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);
  const op = document.getElementById('operador').value;

  let res;

  if (op == '+') {
    res =  n1 + n2;
  } else if (op == '-') {
    res = n1 - n2;
  } else if (op == '*') {
    res = n1 * n2;
  } else if (op == '/') {
    res = n1 / n2
  }
  document.querySelector('#resultado').innerHTML = res;
};

// eventos modelo avanzado

const handlerEvent = () => {
  alert('Hola, soy un evento avanzado');
};

let button = document.getElementById('handler');
button.addEventListener('click', handlerEvent);

// setTimeout(() => {
//   button.removeEventListener('click', handlerEvent);
//   console.log('Ya no tienes este evento disponible.');
// }, 5000);

// calculadora con modelo de eventos avanzado
let op;

document.getElementById('suma').addEventListener('click', () => {
  op = '+';
})
document.getElementById('resta').addEventListener('click', () => {
  op = '-';
})
document.getElementById('mult').addEventListener('click', () => {
  op = '*';
})
document.getElementById('div').addEventListener('click', () => {
  op = '/';
})

const calcular2 = () => {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  let resultado;
  if (op == '+') {
    resultado = n1 + n2;
  } else if (op == '-') {
    resultado = n1 - n2;
  } else if (op == '*') {
    resultado = n1 * n2;
  } else if (op == '/') {
    resultado = n1 / n2;
  } else {
    alert('No seleccionaste la operacion');
    return;
  }
  document.getElementById('res').innerHTML = resultado;
};
document.getElementById('calcular2').addEventListener('click', calcular2);

// json
let userJson = JSON.stringify({"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
  "street": "Kulas Light",
  "suite": "Apt. 556",
  "city": "Gwenborough",
  "zipcode": "92998-3874",
  "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
  }
}}
);
console.log(userJson);
let userNoJson = JSON.parse(userJson);
console.log(userNoJson);

// LocalStorage
const user = 'Ale';
const user2 = 'Jose';
const user3 = {
  name: 'Juan',
  lastName: 'Alvarez'
};

if (localStorage) {
  localStorage.setItem('Persona', user);
  localStorage.setItem('Persona2', user2);
  localStorage.setItem('Persona3', userJson);
} else {
  alert('Tu navegador no soporta localStorage')
}
const persona3 = JSON.parse(localStorage.getItem('Persona3'));
console.log(persona3)
// localStorage.clear();