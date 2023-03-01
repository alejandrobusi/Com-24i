// const motos = [
//   {
//     id: 1,
//     marca: 'Honda',
//   },
//   {
//     id: 2,
//     marca: 'Yamaha',
//   },
//   {
//     id: 3,
//     marca: 'Motomel',
//   },
//   {
//     id: 4,
//     marca: 'Zanella',
//   },
//   {
//     id: 5,
//     marca: 'Bajaj',
//   },
// ];

// const getById = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const findMoto = motos.find((moto) => moto.id === id)
//       if (findMoto) {
//         resolve(findMoto);
//       } else {
//         reject('No se encontro coincidencia');
//       }
//     }, 3000);
//   })
// };

// getById(1)
// .then((x) => {
//   console.log(x)}
// )
// .catch((resp) => {
//   console.error(resp)
// })


const getUsers = () => {
  fetch('http://localhost:3000/users?deleted_ne=true', {
  method: 'GET'
})
.then((resp) => resp.json())
.then((resp) => console.log(resp))
.catch((error) => console.error(error))
};

const createUser = (name, lastName) => {
  fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify({
      name,
      lastName,
      deleted: false
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then((resp) => resp.json())
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error))
}

const deleteUser = (id) => {
  fetch(`http://localhost:3000/users/${id}`,{
    method: 'DELETE'
  })
  .then((resp) => resp.json())
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error))
}
const userAle = {
  name: 'Alejandro 2',
  lastName: 'Vexler v1.1',
  deleted: false
}

const editWithPut = (user, id) => {
  fetch(`http://localhost:3000/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then((resp) => resp.json())
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error))
}

const editWithPatch = () => {
  fetch('http://localhost:3000/users/1', {
    method: 'PATCH',
    body: JSON.stringify({
      deleted: true
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then((resp) => resp.json())
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error))
}
