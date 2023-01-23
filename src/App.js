import logo from './logo.svg';
import './App.css';
import Greeting from './Components/pure/greeting'
import Greetingf from './Components/pure/greetingF'
import TaskListComponent from './Components/container/task_list';
import ComponenteA from './Components/container/ComponenteA';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente porpio Greeting.jsx */}
        {/* <Greeting name="Julio"></Greeting> */}
        {/* <Greetingf name="Julio"></Greetingf> */}
        {/* Componente de Listado de Tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ComponenteA></ComponenteA> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre="Julio">
         {/* Todo lo que hay aquí, es tratado como props.children */}
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
