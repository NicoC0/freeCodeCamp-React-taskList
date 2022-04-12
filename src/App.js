import './App.css';
import logo from './imagenes/freecodecamp-logo.png'
import ListaTareas from "./components/ListaTareas"

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={logo} alt="" className="freecodecamp-logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1> 
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
