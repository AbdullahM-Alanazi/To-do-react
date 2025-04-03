import React, { useState } from "react";
import Heading from "./Heading";
import InputArea from "./InputAreaa";
import ToDoItem from "./ToDoItem";
function App() {
  // Create a state of an ampty array

  const [arrayItem, setArrayItem] = useState([]);

  function handleArray(inputText) {
    setArrayItem([...arrayItem, inputText]);
  }

  function deleteItem(index) {
    setArrayItem((prevItems) => {
      return prevItems.filter((currentValue, currentIndex) => {
        return currentIndex !== index;
      });
    }); // prevItems is an array
  }

  return (
    <div className="container">
      <Heading text="To-do list" />
      <InputArea onSubmit={handleArray} />
      {
        // Map to the array of item
        arrayItem.map((item, i) => {
          return (
            <ToDoItem text={item} key={i} onCheked={deleteItem} index={i} />
          );
        })
      }
    </div>
  );
}

export default App;
