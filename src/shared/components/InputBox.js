import React from "react";

import "./InputBox.css";

const InputBox = (props) => {
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        // onChange={changeHandler}
        // onBlur={touchHandler}
        // value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        // onChange={changeHandler}
        // onBlur={touchHandler}
        // value={inputState.value}
      />
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default InputBox;
