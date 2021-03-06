import React from "react";

import "../../pages/TimetableInfoPage.css";
import NavButton from "../../../shared/components/NavButton";
import InfoBox from "./InfoBox";

const SixInfoBox = (props) => {
  return (
    <React.Fragment>
      <h2>This is the result!</h2>
      <div className="TimetableInfoPage-row">
        <div>
          <InfoBox
            modulecode={props.module1}
            information={props.information1}
            yellow
          />
        </div>
        <div>
          <InfoBox
            modulecode={props.module2}
            information={props.information2}
            blue
          />
        </div>
        <div>
          <InfoBox
            modulecode={props.module3}
            information={props.information3}
            orange
          />
        </div>
        <div>
          <InfoBox
            modulecode={props.module4}
            information={props.information4}
            green
          />
        </div>
        <div>
          <InfoBox
            modulecode={props.module5}
            information={props.information5}
            grey
          />
        </div>
        <div>
          <InfoBox
            modulecode={props.module6}
            information={props.information6}
            purple
          />
        </div>
      </div>
      <div className="BottomButtons">
        <NavButton href="https://nusmods.com/timetable" target="_blank" cream>
          Finish creating at NUSMods
        </NavButton>
        <NavButton alertBookmark green>
          Bookmark
        </NavButton>
      </div>
    </React.Fragment>
  );
};

export default SixInfoBox;
