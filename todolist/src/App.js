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

      </div>
    );
  }
}

export default App;
