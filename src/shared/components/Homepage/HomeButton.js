import React from 'react';
import { Link } from 'react-router-dom';

import './HomeButton.css';

const HomeButton = props => {
    return (
        <Link to='/'>
            <button className="button">HOME</button>
        </Link>
    );
};

export default HomeButton;