import React from 'react';
import './App.css';

let n = parseInt(prompt("informe um número", "8"));

class Titulo extends React.Component{
  render(){
    return <h1>Cáculo de Tabuada</h1>
  }
}

function Titulo2(){
  return <h2>Calcule a tabuada de um número!</h2>
}

function App() {
  return (
    <div>
      <Titulo/>
      <Titulo2/>
      <h1>Tabuada do {n}</h1>
      <br/>
      <h3>1 x {n} = {1*n}</h3>
      <h3>2 x {n} = {2*n}</h3>
      <h3>3 x {n} = {3*n}</h3>
      <h3>4 x {n} = {4*n}</h3>
      <h3>5 x {n} = {5*n}</h3>
      <h3>6 x {n} = {6*n}</h3>
      <h3>7 x {n} = {7*n}</h3>
      <h3>8 x {n} = {8*n}</h3>
      <h3>9 x {n} = {9*n}</h3>
      <h3>10 x {n} = {10*n}</h3>
    </div>
  );
}

export default App;
