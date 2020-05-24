import React from 'react';
import { Link } from 'react-router-dom';

import './Bookmark.css';

const Bookmark = () => {
    return (
        <Link to='/bookmark'>
            <li className="bookmark-item">
                <div className="bookmark-flipcard">
                    <div className="bookmark-flipcard__inner">
                        <div className="bookmark-flipcard__front">
                            <h1 className="bookmark-flipcard__front__title">
                                BOOKMARK
                            </h1>
                        </div>
                        <div className="bookmark-flipcard__back">
                            <p>This is how to BOOKMARK....</p>
                        </div>
                    </div>
                </div>
            </li>
        </Link> 
    );
};

export default Bookmark;