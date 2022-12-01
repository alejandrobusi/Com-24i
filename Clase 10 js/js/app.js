// let auto = {
//   marca: "Peugeot",
//   color: [
//     "rojo",
//     "negro",
//     { type: "compact", combustible: ["gasoil", "nafta"] },
//   ],
//   modelo: () => {
//     alert("Modelo 2020");
//   },
// };

// console.log(auto.color[2].combustible[1]);
// console.log(auto["color"][2]["type"]);

// // auto.modelo()

// auto.marca = "peugeot 2";
// delete auto.modelo;
// auto.color = "rojo";
// console.log(auto);

// const keys = Object.keys(auto);
// console.log(keys);
// for (let i = 0; i < keys.length; i++) {
//   console.log(auto[keys[i]]);
// }

// const products = [
//   { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
//   { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
//   { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] },
// ];

// const prodList = products.map((product) => {
//   console.group(product.name)
//   console.log(`id: ${product.id}`);
//   console.log(`price: $${product.price}`);
//   console.log(`cat: ${product.categories.join(" - ")}`);
//   console.groupEnd()
// });

// const numeros = [1, 2, 3, 4];

// numeros.map((num) => console.log(num))

// let auto = {
//   color: 'rojo',
//   año: 2020
// };

// funcion constructora

function Auto(colorA, marcaA, modeloA, añoA) {
  this.color = colorA;
  this.marca = marcaA;
  this.modelo =  modeloA;
  this.año = añoA;
  this.status = false;
  this.onOff = () => {
    let encApa = confirm('encender o apagar');
    if (encApa) {
      this.status = true;
    } else {
      this.status = false;
    }
    alert(`Estado del motor: ${this.status}`)
  }
};

const car = new Auto('rojo', 'Fiat', 'Punto', 2020);
const car2 = new Auto('negro', 'chevro', 'cruce', 2020);
console.log(car, car2);