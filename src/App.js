import React, {useRef, useState } from "react";
import "./App.css";

function App() {
  
  const [tasklist, setTaskList] = useState([]);
  
  const inputRef = useRef();

  const keyPressHandler = (event) => {
      if(event.key==="Enter") {
        addTask();
      } 
  }

  const addTask = () => {
    const newTask = inputRef.current.value;
    tasklist.push(newTask);
    inputRef.current.value = '';
    setTaskList([...tasklist]);
  }

  

  //create a state for list of array,array of strings,
  //get input from the input box and display on page;
  //when add task is clicked add input created above.
  //inside ol, run a for loop to print the list.
  

  const taskMapper = (value) =>{
    return <li>{value} </li>
  }

  return ( 
    
    
    <div className="container">
      <div className="card">
        <div className="task-input">
          <input placeholder="enter task" ref = {inputRef} onKeyPress = {keyPressHandler} />
          <button onClick={addTask}> Add task </button>
        </div>

        <div className="task-list">
          <ol>
            {tasklist.map(taskMapper)}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
