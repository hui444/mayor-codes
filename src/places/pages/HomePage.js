import React from 'react';

import CreateCard from '../components/CreateCard';
import BookmarkCard from '../components/BookmarkCard';

import './HomePage.css'

const HomeMain = () => {
    return (
        <div className="homeMain">
            <div className="row">
                <div className="left">
                    <CreateCard />
                </div>
                <div className="right">
                    <BookmarkCard />
                </div>
            </div>
        </div>
    );
};

export default HomeMain;