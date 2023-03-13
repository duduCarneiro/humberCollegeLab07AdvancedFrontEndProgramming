import React, { useState } from 'react';
import './App.css';
import ButtonsContainer from './components/ButtonContainer';
import Todos from './components/Todos';
import TodoCount from './components/TodoCount';
import AddTodos from './components/AddTodos';


function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const myAdditionMethod = () => {
    setCount(count + 1);
  };
  const mySubtractionMethod = () => {
    setCount(count - 1);
  };



  return (
    <div className="App">
      <div className='ArithmeticOperations'>
        <p>The current balance between additions and subtractions is {count}</p>
        <ButtonsContainer sharedMethod={myAdditionMethod} operation={"+1"}/>
        <ButtonsContainer sharedMethod={mySubtractionMethod} operation={"-1"}/>
      </div>

      <div className='ToDoList'>
        <TodoCount todosList={todos} />
        <Todos todosList={todos} />
        <AddTodos todosArray={todos} setTodosFunction={setTodos} />
      </div>
    </div>
  );
}

export default App;

// remember that all your components must be receiving state variables from the main app component.


