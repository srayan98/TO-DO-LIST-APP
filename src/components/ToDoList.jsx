import React from 'react';
import ToDoItem from './ToDoItem';

// This component displays the list of all tasks
const ToDoList = ({ todos, onToggle, onDelete, onEdit, onSave }) => {
  return (
    <div className="todo-list">
    {/* Render each task using ToDoItem */}
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id} // Unique key for each item
          todo={todo} // Task details
          onToggle={onToggle}  // Function to toggle complete
          onDelete={onDelete} // Function to delete task
          onEdit={onEdit} // Function to enter edit mode
          onSave={onSave} // Function to save edited task
        />
      ))}
    </div>
  );
};

export default ToDoList;