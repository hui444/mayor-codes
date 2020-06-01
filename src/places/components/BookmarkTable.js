import React from "react";

import "./BookmarkTable.css";

const BookmarkTable = () => {
  return (
    <table className="table-design" id="myBookmarks">
      <thead>
        <tr>
          <th>Timetable Name</th>
          <th>Timetable Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Timetable 1</td>
          <td>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NUSMods link 1
            </a>
          </td>
        </tr>
        <tr>
          <td>Timetable 2</td>
          <td>
            <a
              href="https://sg.yahoo.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              NUSMods link 2
            </a>
          </td>
        </tr>
        <tr>
          <td>Timetable 3</td>
          <td>
            <a
              href="https://www.bing.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              NUSMods link 3
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BookmarkTable;
