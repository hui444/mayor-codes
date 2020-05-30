import React from "react";
import { Link } from "react-router-dom";

import "./NavButton.css";

const NavButton = (props) => {
  return (
    <Link to={props.link}>
      <button className="button">{props.text}</button>
    </Link>
  );
};

export default NavButton;
