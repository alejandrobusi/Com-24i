import React, { useState, useEffect } from 'react';

const Contador = () => {
  const [ count, setCount ] = useState(0);
  const [ texto, setTexto ] = useState('Nulo');
  const [personajes, setPersonajes] = useState()

  useEffect(() => {
    const getData = async () => {
      const resp =  await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await resp.json()
      setPersonajes(results);
    }
    getData();
  }, [])
  
  let contador = 0;
  console.log('soy el contador');
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => {
        contador = contador + 1;
        console.log(contador);
      }}>Aumentar</button>
      <h1>Contador useState: {count}</h1>
      <button onClick={() => {
        setCount( count + 1 );
        console.log(personajes);
      }}>Amentar useState</button>
      <button onClick={() => reset()}>Reiniciar</button>
      <h1>Texto: {texto}</h1>
      <input type="text" onChange={(e) => {
        setTexto(e.target.value);
      }} placeholder='Ingresa tu texto' />
      <h1>{personajes[0].name}</h1>
    </div>
  )
}

export default Contador;
