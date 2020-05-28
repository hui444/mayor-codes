import React from 'react';
import { Link } from 'react-router-dom';

import './BookmarkCard.css';

const BookmarkCard = () => {
    return (
        <li className="bookmark-item">
            <div className="bookmark-flipcard">
                <div className="bookmark-flipcard__inner">
                    <div className="bookmark-flipcard__front">
                        <h1 className="bookmark-flipcard__front__title">
                            BOOKMARK
                        </h1>
                    </div>
                    <Link to='/bookmark'>
                        <div className="bookmark-flipcard__back">
                            <p>This is how to BOOKMARK....</p>
                        </div>
                    </Link> 
                </div>
            </div>
        </li>
    );
};

export default BookmarkCard;