import React from "react";

import "./CreatePage.css";
import NumSelector from "../components/NumSelector";

const CreatePage = () => {
  return (
    <React.Fragment>
      <div className="left-create">
        <h2 className="module-header">Modules :</h2>
        <div className="selector">
          <NumSelector />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreatePage;
