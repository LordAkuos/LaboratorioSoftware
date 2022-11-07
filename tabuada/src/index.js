import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import TodoList from './TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Item1 = {
  id: Date.now(),
  text: "Item 1"
}
const Item2 = {
  id: Date.now(),
  text: "Item 2"
}
var itens = [Item1, Item2];
root.render(
  <React.StrictMode>
    <App />
    <TodoList itens={itens}/>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
