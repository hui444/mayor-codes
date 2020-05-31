import React from "react";

import "./ModuleInputBoxes.css";
import InputBox from "../../shared/components/InputBox";

const ModuleInputBoxes = (props) => {
  const number = props.num;

  let content = [];
  for (let i = 1; i <= number; i++) {
    content.push(i);
  }
  return (
    content.length !== 0 &&
    content.map((a) => {
      return (
        <div className="input-container" key={a + 10}>
          <InputBox
            element="input"
            id={"mod" + a}
            type="text"
            placeholder={"Module " + a}
          />
        </div>
      );
    })
  );
};

export default ModuleInputBoxes;
