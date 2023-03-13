import React, { useState } from 'react';

export default function AddTodos(props) {
    const [taskName, setTaskName] = useState([]);
    const [deadline, setDeadline] = useState([]);
    return (
      <div className='Form'>
        <div style={{padding: "5px"}}>
          <label for="task_name">Task: </label>
          <input
            style={{width: "183px"}}
            id="task_name"
            value={taskName}
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
          />
        </div>
        <div style={{padding: "5px"}}>
          <label for="deadline">Due date: </label>
          <input
            style={{width: "149px"}}
            id="deadline"
            value={deadline}
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
          />
        </div>
        <div>


          <button style={{margin: "10px"}}
            onClick={() => {
              props.setTodosFunction([
                ...props.todosArray,
                { taskName: taskName, deadline: deadline }
              ]);
              setTaskName("");
              setDeadline("");
            }}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
  

   // AddTodos should contain a form to add a new todo item
