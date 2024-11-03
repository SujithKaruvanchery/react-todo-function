import React from "react";
import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState(["Go to Shop", "Buy Apple"]);

  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    let tempTasks = [...tasks];
    tempTasks.push(taskInput);
    setTasks(tempTasks);
  };

  const inputChanged = (event) => {
    setTaskInput(event.target.value);
  };

  const deleteTask = (index) => {
    let tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  };
  return (
    <div>
      <h1>TODO APPLICATION</h1>
      <input type="text" onChange={inputChanged} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              {task} <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
