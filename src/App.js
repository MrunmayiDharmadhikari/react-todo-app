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
    tasklist.unshift({ id: Date.now(), text: newTask });
    inputRef.current.value = "";
    setTaskList([...tasklist]);
  };

  const listMapper = (element) => {
    return <li onClick={() => deleteTask(element)}> {element.text} </li>;
  };

  const deleteTask = (element) => {
    const index = tasklist.indexOf(element);
    tasklist.splice(index, 1);
    setTaskList([...tasklist]);
  };

  return (
    <div className="container">
    <h1>To-Do List App</h1>
      <div className="card">
        <div className="task-input">
          <input
            placeholder="enter the task"
            ref={inputRef}
            onKeyPress={keyPressHandler}
          />
          <button onClick={addTask}> Add </button>
        </div>

        <div className="task-list">
          <ul>{tasklist.map(listMapper)}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
