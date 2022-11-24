const auto = {
  colores: ['rojo', 'negro', 'blanco'],
  marca: 'fiat',
  año: 2020,
  automatico: false,
};

// console.log(auto);

// console.log(auto.colores);
// console.log(auto['colores']);

// // editar valor de una key
// auto.automatico = true;

// // agregar una key

// auto.modelo = 'Palio';

// // eliminar una key

// delete auto.año;
// console.log(auto);


// recorrer objetos

// for (var llave in auto) {
//   if (auto.hasOwnProperty(llave)) {
//     console.log(auto[llave]);
//   }
// };

// let llaves = Object.keys(auto);

// for (let i = 0; i < llaves.length; i++) {
//   let llave = llaves[i];
//   console.log(auto[llave]);
// };

let products = [
  {
    id:1234,
    name: 'Leche',
    price: 120,
    categories: ['familiar', 'comida']
  },
  {
    id:2323,
    name: 'Arroz',
    price: 80,
    categories: ['familiar', 'comida']
  },
  {
    id:2133,
    name: 'Lavadora',
    price: 14000,
    categories: ['electrodomesticos']
  }
];

for (let i = 0; i < products.length; i++) {
  console.group(products[i].name)
  console.log(`Id: ${products[i].id}`)
  console.log(`Nombre: ${products[i].name}`)
  console.log(`Price: $${products[i].price}`)
  console.log(`Categoria: ${products[i].categories}`)
  console.groupEnd()
};

