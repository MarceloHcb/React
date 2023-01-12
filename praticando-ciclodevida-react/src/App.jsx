import { useState } from 'react';
import './App.css';
import Carro from './components/Carro';

function App() {
  const [carro, setCarro] = useState(true);
  const mostrarOcultarCarro = () => {
    setCarro(!carro)
  }
  return (
    <div className="App">
      <h1> Ciclo de vida React</h1>
      {carro ? <Carro fator={10} /> : ''
      }
      <button onClick={() => mostrarOcultarCarro()} >{carro ? 'Ocultar' : 'Criar'}</button>
    </div>
  );
}

export default App;
