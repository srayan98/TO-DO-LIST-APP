import React, { useState } from 'react'; //Import useState for state management
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css'; 

const App = () => {
  const [todos, setTodos] = useState([]);//Storing all the to-do items in the state
  const [input, setInput] = useState("");//Storing the input values by the users

  // Add new todo item
  const handleAdd = () => {
    if (input.trim() === "") return; // Avoid adding any empty item
    const newTodo = {
      id: Date.now(),//A unique identifier that returns a number in milliseconds to keep track of the chronological state of the to-do items
      text: input,
      completed: false,// Task is not done yet
      editing: false//Task is not in edit mode
    };
    setTodos([...todos, newTodo]);// Add new task to the list
    setInput(""); // Clear the input box
  };

  // Toggle the task between done and not done
  const handleToggle = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a task from the list
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Set a task to be in editing mode
  const handleEdit = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, editing: true } : todo
      )
    );
  };

  // Save the new edited text of the task
  const handleSave = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText, editing: false } : todo
      )
    );
  };

  return (
    <div className="app">
      <Header />

      <div className="input-section">
        <input
          type="text"
          placeholder="Add new task"
          value={input}
          onChange={(e) => setInput(e.target.value)} //Update the input state on change
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    {/* List of all To-Do items */}
      <ToDoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onSave={handleSave}
      />
    </div>
  );
};

export default App;
