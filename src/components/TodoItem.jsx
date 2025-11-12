function TodoItem({ id, text, completed, deleteTask, toggleTaskCompleted }) {
  return (
    <li className={`task-item ${completed ? "completed" : ""}`}>
      
      <label className="task-label">
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={() => toggleTaskCompleted(id)}
        />
        <span>{text}</span>
      </label>

      {/* Aplicamos las clases del botón de ícono */}
      <button 
        className="delete-button icon-button" 
        onClick={()=> deleteTask(id)}>
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;