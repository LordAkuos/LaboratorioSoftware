import React from 'react';
import './App.css';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores';
import Mensagem from './Mensagem';
import Header from './Header';
import Aleatorio from './Aleatorio';
import Texto from './Texto';

let n = prompt("Digite um número", "5");

function App() {
  return (
    <div>
      <Header favcol="Amarelo"/>
      <Texto/>
      <Cores />
      <Titulo 
        titulo = "Fatec"
        texto = "Faculdade de Tecnologia de Presidente Prudente"
        link = "https://www.fatecpp.edu.br"
      />
      <Titulo2/>
      <Tabuada numero = {n}/>
      <Mensagem/>
      <Aleatorio/>
    </div>
  );
}

export default App;
