import React from "react";
import "./App.css";
import { TiDelete } from "react-icons/ti";

const TaskList = ({ text, arr, setItems }) => {
  const deleteItem = () => {

    // const data = arr.filter((item) => item !== text);
    setItems((olditems)=>olditems.filter((item)=>item !== text));
    // FOR REFLECTING ANYTHINNG IN UI , YOU SHOULD CHANGE STATE

  };
  return (
    <li>
      <TiDelete onClick={deleteItem} /> {text}
    </li>
  );
};

export default TaskList;
