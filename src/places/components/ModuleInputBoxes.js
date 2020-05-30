import React from "react";

import "./ModuleInputBoxes.css";

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
          <input
            className="input-module"
            type="text"
            placeholder={"Module " + a}
            name={"Mod" + a}
            key={a}
          />
        </div>
      );
    })
  );
};

export default ModuleInputBoxes;
