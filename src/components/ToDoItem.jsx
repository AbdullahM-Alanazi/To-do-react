import React from "react";

function Item(props) {
  return (
    <div onClick={() => props.onCheked(props.index)}>
      <li>{props.text}</li>
    </div>
  );
}
export default Item;
