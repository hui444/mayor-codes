import React from "react";

import "./InfoBox.css";

const InfoBox = (props) => {
  return (
    <div
      className={`boxColour 
      ${props.yellow && "boxColour--yellow"} 
      ${props.blue && "boxColour--blue"} 
      ${props.orange && "boxColour--orange"}
      ${props.green && "boxColour--green"}
      ${props.grey && "boxColour--grey"}
      ${props.purple && "boxColour--purple"}
      ${props.pink && "boxColour--pink"}
      ${props.brown && "boxColour--brown"}`}
    >
      <div className="modulecode">{props.modulecode}</div>
      <div className="information">
        <b>{props.information.lessonType}</b> : {props.information.classNo}
        <br />
        {/* {props.information.startTime} <br />
        {props.information.endTime}
        <br />
        {props.information.weeks}
        <br />
        {props.information.venue}
        <br />
        {props.information.day}
        <br />
        {props.information.lessonType}
        <br />
        {props.information.size} */}
      </div>
    </div>
  );
};

export default InfoBox;
