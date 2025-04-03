import { React, useState } from "react";

function Form() {
  // Create a state of an ampty array
  const [inputText, setInputText] = useState("");
  const [arrayItem, setArrayItem] = useState([]);
  function handleInputText(event) {
    const newValue = event.target.value;
    setInputText((preValue) => {
      return (preValue += newValue);
    });
  }
  function handleArray(event) {
    setArrayItem([...arrayItem, inputText]);
    setInputText("");
    event.preventDefault();
  }
  return (
    <div className='form'>
      <form onSubmit={handleArray}>
        <input
          type='text'
          name='item'
          onChange={handleInputText}
          value={inputText}
        />
        <button>
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}
export default Form;
