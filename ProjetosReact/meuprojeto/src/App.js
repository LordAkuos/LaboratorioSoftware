import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fatec-PP</h1>
        <h2>Venha fazer o vestibular para a Fatec-PP!</h2>
        <p>
          A Fatec de Presidente Prudente abre as incrições para o vestibular do ano de 2023.
        </p>
        <p>
          Inscreva-se para os cursos disponíveis para os períodos matutino, vespertino e noturno.
        </p>
        <a
          className="App-link"
          href="https://www.vestibularfatec.com.br/home/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Faça sua inscrição aqui!
        </a>
      </header>
      <footer className='App'>
        <p>Fatec de Presidente Prudente.</p>
        <p>Rua Terezina, 75 - Vila Paulo Roberto</p>
      </footer>
    </div>
  );
}

export default App;
