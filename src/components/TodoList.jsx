import TodoItem from './TodoItem.jsx';

function TodoList({tasks, deleteTask, toggleTaskCompleted}) {
    return (
    <ul className="task-list">
        {tasks.map((task) => (
            <TodoItem 
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            deleteTask={deleteTask}
            toggleTaskCompleted={toggleTaskCompleted}
            />
        ))}
    </ul>
    );
}

export default TodoList;