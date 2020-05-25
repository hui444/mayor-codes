import React from 'react';

import './BookmarkTable.css'

const BookmarkTable = () => {
    return (
        <React.Fragment>
            <h2>This is the BookmarkTable and it works!</h2>
            <table className="table-design">
                <tr>
                    <th>Timetable Name</th>
                    <th>Timetable Link</th>
                </tr>
                <tr>
                    <td>Timetable 1</td>
                    <td>NUSMods link 1</td>
                </tr>
                <tr>
                    <td>Timetable 2</td>
                    <td>NUSMods link 2</td>
                </tr>
                <tr>
                    <td>Timetable 3</td>
                    <td>NUSMods link 3</td>
                </tr>
            </table>
        </React.Fragment>
    );
};

export default BookmarkTable;