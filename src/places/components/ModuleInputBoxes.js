import React from "react";

import "./ModuleInputBoxes.css";

const ModuleInputBoxes = () => {
  return (
    <React.Fragment>
      <h2 className="module-header">Modules :</h2>
      <div className="input-container">
        <input
          className="input-module"
          type="text"
          placeholder="Module 1"
          name="Mod1"
        />

        <input
          className="input-module"
          type="text"
          placeholder="Module 2"
          name="Mod2"
        />

        <input
          className="input-module"
          type="text"
          placeholder="Module 3"
          name="Mod3"
        />

        <input
          className="input-module"
          type="text"
          placeholder="Module 4"
          name="Mod4"
        />

        <input
          className="input-module"
          type="text"
          placeholder="Module 5"
          name="Mod5"
        />

        <input
          className="input-module"
          type="text"
          placeholder="Module 6"
          name="Mod6"
        />
      </div>
    </React.Fragment>
  );
};

export default ModuleInputBoxes;
