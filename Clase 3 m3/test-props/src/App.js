// import atomo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Card from './components/card/Card';

function App() {
  const getApi = async () => {
    const resp = await fetch('https://rickandmortyapi.com/api/character')
    const data = await resp.json();
    return data.results;
  };
  let personajes ;

  getApi().then(data => personajes = data)

  return (
    <>
      <NavBar />
      <div className='d-flex'>
        {
          personajes 
          ?
          <Card data={personajes}/>
          :
          <h1>No hay data</h1>
        }
      </div>
      
      {/* <div className="App">
        <header className="App-header">
          <img src={atomo} className="App-logo" alt="logo" />
          <img src={atomo} className="App-logo" alt="logo" />
          <p>
            {
              typeCom === 'i' ? txt : txt2
            }
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <h1>Hola vengo a estorbar</h1> */}
    </>
  );
}

export default App;
