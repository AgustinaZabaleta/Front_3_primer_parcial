import './styles/App.css'
import Formulario from "./Components/Formulario";

function App() {
  return (
    <div className="App" id='root'>
      <h1>Seleccione su locación deseada</h1>
      <Formulario/>
      <button onClick={() => window.location.reload()}>Limpiar</button>
    </div>
  );
}

export default App;




