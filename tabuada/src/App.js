import React from 'react';
import './App.css';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';

//let n = prompt("Digite um número", "5");

function App() {
  return (
    <div>
      <Titulo 
        titulo = "Fatec"
        texto = "Faculdade de Tecnologia de Presidente Prudente"
        link = "https://www.fatecpp.edu.br"
      />
      <Titulo2/>
      <Tabuada numero = {5}/>
    </div>
  );
}

export default App;
