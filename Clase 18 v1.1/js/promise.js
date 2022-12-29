// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject ('no se resolvio la promesa');
//   }, 3000)
// });

// promesa.then((response) => console.log(response));
// promesa.catch((response) => console.log(response));

const motos = [
  {
    id:1,
    marca: 'Honda'
  },
  {
    id:2,
    marca: 'Yamaha'
  },
  {
    id:3,
    marca: 'Motomel'
  },
  {
    id:4,
    marca: 'KTM'
  },
];



const buscarMoto = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const findMoto = motos.find((moto) => moto.id == id);
      if (findMoto) {
        resolve(findMoto);
      } else {
        reject('No se ha encontrado el id');
      }
    }, 3000)
  });
};

buscarMoto(3)
.then((resp) => console.log(resp))
.catch((resp) => console.error(resp))
