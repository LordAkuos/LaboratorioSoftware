
import './App.css';

function App() {
  let texto = "Venha estudar na Fatec!";
  let espaco = '';
  let i = 0;
  function tick(){
      const element = (
          <h1>{espaco = espaco + texto[i]}</h1>
      );
      i++;
      if (i <= texto.length) {
          return element;
      }
  }
    return (
      <div>{ setInterval(tick, 1000)}</div>
    );
    //useEffect(() => {
      //const interval = setInterval(() => {
        //console.log('This will run every second!');
      //}, 1000);
      //return () => clearInterval(interval);
    //}, []);
}

export default App;
