import { useState } from "react";
import "./App.css";
import TaskList from "./TaskList";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems((olditems) => {
      if (!olditems.includes(inputList)) {
        return [...olditems, inputList];
      } else {
        return [...olditems];
      }
    });
    setInputList(""); // IMPORTANT
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> Task List </h1>
          {/* 
          What we are tyoing inside a input tag , it will get stored inside the value property of input tag
          HERE THE VALUE PROPERTY INSIDE INPUT TAG IS IMPORTANT TO SET SETINPUTLIST TO NULL */}
          <input
            type="text"
            placeholder="Add tasks"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>
          <ul style={{ listStyleType: "none" }} className="list">
            {items.map((itemval) => {
              return <TaskList key={itemval} text={itemval} setItems= {setItems}/>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
