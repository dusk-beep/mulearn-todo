import React from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([]);

  const [newTodo, setNewTodo] = React.useState('');

  function handleInputChange(event) {
    setNewTodo(event.target.value);
  }

  function handleTOdos(event) {
    event.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  }

  function handleRemoveTodo(index) {
    setTodos(todos.filter((_, ind) => ind != index));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleTOdos}>
        <input
          type='text'
          value={newTodo}
          onChange={handleInputChange}
          placeholder='Add a new Todo'
        />
        <button type='submit'>Add Todo</button>
      </form>

      <ul>
        {todos.map((elem, index) => {
          return (
            <li key={index}>
              <input type='checkbox' id={`todo-${index}`} />
              {elem}
              <button
                onClick={() => {
                  handleRemoveTodo(index);
                }}
              >
                Remove Todo
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
