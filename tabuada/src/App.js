import React from 'react';
import './App.css';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores';
import Mensagem from './Mensagem';

let n = prompt("Digite um número", "5");

function App() {
  return (
    <div>
      <Cores />
      <Titulo 
        titulo = "Fatec"
        texto = "Faculdade de Tecnologia de Presidente Prudente"
        link = "https://www.fatecpp.edu.br"
      />
      <Titulo2/>
      <Tabuada numero = {n}/>
      <Mensagem/>
    </div>
  );
}

export default App;
