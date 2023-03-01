import './App.css';
import Navbar from './components/navBar/Navbar';

function App() {
  const names = ['Ale', 'Jose', 'Maria'];
  return (
    <div className="App">
      <Navbar />
      <div>
        {names.map((name) => {
          return <h1>{name}</h1>
        })}
      </div>
    </div>
  );
}

export default App;
