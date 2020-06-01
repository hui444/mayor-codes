import React from "react";

import "./BookmarkTable.css";

const BookmarkTable = () => {
  return (
    <table className="table-design" id="myBookmarks">
      <thead>
        <tr>
          <th>Timetable Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="column1-table">
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Timetable 1
            </a>
          </td>
          <td className="column2-table">This link is for Google</td>
        </tr>
        <tr>
          <td className="column1-table">
            <a
              href="https://sg.yahoo.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              Timetable 2
            </a>
          </td>
          <td className="column2-table">This link is for Yahoo</td>
        </tr>
        <tr>
          <td className="column1-table">
            <a
              href="https://www.bing.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              Timetable 3
            </a>
          </td>
          <td className="column2-table">This link is for Bing</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BookmarkTable;
