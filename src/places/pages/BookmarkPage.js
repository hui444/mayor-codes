import React from "react";

import BookmarkTable from "../components/BookmarkTable";
import "./BookmarkPage.css";
import Form from "../components/Form";
import ContentEditable from "../components/ContentEditable";

const BookmarkPage = () => {
  const FormPopup = () => {
    document.getElementById("myForm").style.display = "block";
  };

  return (
    <React.Fragment className="bookmark-page">
      <h2>Your Timetables</h2>
      <BookmarkTable /> <br /> <Form />
      <button className="add-button" onClick={FormPopup}>
        ADD
      </button>
      <div className="divider" />
      <button onClick={ContentEditable}>EDIT</button>
    </React.Fragment>
  );
};

export default BookmarkPage;
