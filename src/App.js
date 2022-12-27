import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { TaskForm } from './components/TaskForm';
function App() {
  return (
    <div className="app">
      <h1 className="text-center p-5">Not to do list</h1>
      <TaskForm></TaskForm>
    <hr className="hr"></hr>
    </div>
  );
}

export default App;
