import './App.css';
import NavBar from './components/navBar/NavBar';
import Card from './components/card/Card';

function App() {

  const cardData = {
    img: 'https://rickandmortyapi.com/api/character/avatar/712.jpeg',
    title: 'soy un titulo',
    subTitle: 'soy el subtitulo',
  };

  const logData = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <NavBar />
      <Card data={cardData} mostrarData={logData}/>
    </div>
  );
}

export default App;
