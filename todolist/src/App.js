import React from 'react';
import './App.css';
import TodoList from './TodoList'; 

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itens: [],
      text: ''
    }
  }
  render(){
    return(
      <div>
        <h1>Tarefas</h1>
        <TodoList itens={this.state.itens}/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
          <button>Inserir</button>
        </form>
      </div>
    );
  }
  handleChange = (e) => {
    this.setState({text: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault(); //interrompe o processo de recarregar a página.
    // IMpede que o usuário insira itens vazios
    if(!this.state.text.length){
      return;
    }
    //Cria o item com o conteúdo digitado pelo usuário:
    const item = {
      id: Date.now(),
      text: this.state.text
    }
    //Muda o estado do App concatenando o item com items
    //e limpando o text
    this.setState(state=>({
      itens:state.itens.concat(item),
      text:''
    }))
  }
}

export default App;
