
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
    const interval = setInterval(() => {
        return element;
    }, 200);
  }
  return (
    <div>{ () => clearInterval(interval) }</div>
  );
    //useEffect(() => {
      //const interval = setInterval(() => {
        //console.log('This will run every second!');
      //}, 1000);
      //return () => clearInterval(interval);
    //}, []);
}

export default App;
