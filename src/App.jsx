import { useState } from 'react';

// Importar Componentes
import TodoHeader from './components/TodoHeader.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import TodoEmpty from "./components/TodoEmpty.jsx";

// IMPORTAR EL ARCHIVO SCSS PRINCIPAL
import './styles/App.scss';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (text) => {
    if (!text.trim()) {
      return;
    }
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  
  const toggleTaskCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  return (
    <div className="container">
      {/* El Header es fijo y va primero */}
      <TodoHeader />

      {/* 'content' agrupa el contenido scrolleable */}
      <div className="content">
        <TodoForm addTask={addTask} />
        
        {/* Divisor del diseño */}
        <hr className="divider" /> 

        {tasks.length === 0 ? 
        (<TodoEmpty />) : 
        (<TodoList 
          tasks={tasks} 
          deleteTask={deleteTask} 
          toggleTaskCompleted={toggleTaskCompleted} 
        />)}
      </div>
    </div>
  );
}

export default App;