import logo from './logo.svg';
import './App.css';
import Greeting from './Components/pure/greeting'
import Greetingf from './Components/pure/greetingF'
import TaskListComponent from './Components/container/task_list';
import ComponenteA from './Components/container/ComponenteA';

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
        { <ComponenteA></ComponenteA> }
      </header>
    </div>
  );
}

export default App;
