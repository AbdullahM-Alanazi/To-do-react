import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleInputText(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  return (
    <div className="form">
      <form
        onSubmit={(event) => {
          props.onSubmit(inputText);
          setInputText("");
          event.preventDefault();
        }}
      >
        <input
          type="text"
          name="item"
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

export default InputArea;
