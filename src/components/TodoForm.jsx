import { useState } from "react";

function TodoForm({addTask}) {
    const [text, setText] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTask(text);
        setText("");
    };

    return (
    <form className="add-task-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Escribe una tarea..."
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <button type ="submit" className="add-button icon-button">
            ✓
        </button>
    </form>
    );
}

export default TodoForm;