import React from 'react';
import './App.css';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';

//let n = prompt("Digite um número", "5");

function App() {
  return (
    <div>
      <Titulo texto="Calcule a tabuada"/>
      <Titulo2/>
      <Tabuada numero = {5}/>
    </div>
  );
}

export default App;
