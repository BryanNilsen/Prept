import React from "react";

function Button(props) {
  return (
    <button className={props.className} onClick={props.callback}>
      {props.text}
    </button>
  );
}

export default Button;
