// // accediendo por id
// console.log(document.getElementById('title'));
// // accediendo por tag
// console.log(document.getElementsByTagName('h1'));
// // accediendo por clases
// console.log(document.getElementsByClassName('contenedor'))
// // accediendo por querySelector
// console.log(document.querySelector('div'));
// console.log(document.querySelector('.contenedor'));
// console.log(document.querySelectorAll('h1'));

// // Creando nodos

// Crear elementos
// let miDiv1 = document.createElement('div');
// let card = `<div class="card" style="width: 18rem;">
// <img src="https://media-exp1.licdn.com/dms/image/C4E22AQHmAYoKSEreOQ/feedshare-shrink_800/0/1671028771276?e=1674086400&v=beta&t=22XMog3sIYnRD4QLOeXhoFxc3Do98CicG7WG70jq6Zk" class="card-img-top" alt="...">
// <div class="card-body">
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// </div>
// </div>`;
// // añadiendo contenido a miP
// miDiv1.innerHTML = card;
// // añadiendo una clase a miP
// // miP.className = 'parrafo'
// // Insertando miP en el documento
// document.body.appendChild(miDiv1)

// // Clonar elementos

// let miDiv2 = document.getElementsByClassName('contenedor')[0];
// document.body.appendChild(miDiv2.cloneNode(true));

// // insertar nodo en un lugar especifico

// document.body.insertBefore(
//   document.createTextNode('boo!'),
//   document.body.lastChild
// );

// // Eliminar un nodo

// let h2 = document.getElementById('remover');
// // let elementoEliminado = document.body.removeChild(h2);
// let reemplazando = document.body.replaceChild(h2, document.getElementById('title'))
// console.log(elementoEliminado);

// testeando el potencial de dom y bom!
const getDara = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  data.results.map((personaje) => {
    let contenedor = document.createElement("div");
    contenedor.className = 'card my-2 mx-2 col-3';
    const card = `<img src="${personaje.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${personaje.name}</h5>
      </div>`;
    contenedor.innerHTML = card;
    document.getElementById("container2").appendChild(contenedor);
  });
};
getDara();

// Eventos modelo tradicional

const btnOnClick = (x) => {
  alert(`Hola ${x.value}`);
  console.log(x.value);
};
