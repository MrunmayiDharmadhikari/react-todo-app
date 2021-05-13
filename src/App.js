import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [tasklist, setTaskList] = useState([]);

  const inputRef = useRef();

  const keyPressHandler = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const addTask = () => {
    const newTask = inputRef.current.value;
    tasklist.push(newTask);
    inputRef.current.value ='';
    setTaskList([...tasklist]);
  };

  const listMapper = (list) => {
    return(
      <li> {list} </li>
    )
  }

  return (
    <div className="container">
      <div className="card">
        <div className="task-input">
          <input placeholder="enter the task" ref={inputRef} onKeyPress={keyPressHandler} />
          <button onClick={addTask}> Add a task</button>
        </div>

        <div className="task-list">
          <ol>
            {tasklist.map(listMapper)}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
