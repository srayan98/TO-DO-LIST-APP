import React, { useState } from 'react';

const ToDoItem = ({ todo, onToggle, onDelete, onEdit, onSave }) => { // Component made for one task
  const [editText, setEditText] = useState(todo.text); // Keep track of edited text locally

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {todo.editing ? ( // If in edit mode, show input and Save button
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)} // Update local edit text
          />
          <button onClick={() => onSave(todo.id, editText)}>Save</button>
        </>
      ) : ( // If not in edit mode, show normal view
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span>{todo.text}</span>
          <button onClick={() => onEdit(todo.id)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ToDoItem;
