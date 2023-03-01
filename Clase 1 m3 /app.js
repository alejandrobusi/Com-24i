import { sales, ventas } from './facturas.js'

const facTypeA = 'a';
const facTypeb = 'b';


console.log(ventas.find((sale) => {return sale.type === facTypeA}))
console.log(ventas.filter((sale) => sale.type === facTypeA))

sales[0].type === facTypeA ? console.log('Es cierto') : console.log('No es cierto');
sales[0].type === facTypeA && console.log('retornando solo cuando es true');

let respuestaDeApi;

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((resp) => resp.json())
.then((resp) => {
  
})

console.log(respuestaDeApi);

const asynqFunc = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts/3')
  const data = await resp.json()
  return data
};

asynqFunc().then(resp => respuestaDeApi = resp)

