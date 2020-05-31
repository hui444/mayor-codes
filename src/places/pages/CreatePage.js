import React from "react";

import "./CreatePage.css";
import PreferencesQ from "../components/PreferencesQ";
import NavButton from "../../shared/components/NavButton";
import NumSelector from "../components/NumSelector";

const CreatePage = () => {
  return (
    <React.Fragment>
      <form>
        <div className="left">
          <h2 className="module-header">Modules :</h2>
          <div className="selector">
            <NumSelector />
          </div>
        </div>
        <div className="right">
          <div className="top">
            <PreferencesQ />
          </div>
          <div className="bottom">
            <NavButton type="submit">CREATE</NavButton>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CreatePage;
