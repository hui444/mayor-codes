import React from 'react';

import CreateCard from '../components/Create';
import BookmarkCard from '../components/Bookmark';
import './HomeMain.css'

const HomeMain = () => {
    return (
    <div className="homeMain">
        <div className="row">
            <div className="column">
                <CreateCard />
            </div>
            <div className="column">
                <BookmarkCard />
            </div>
        </div>
    </div>
    );
};

export default HomeMain;