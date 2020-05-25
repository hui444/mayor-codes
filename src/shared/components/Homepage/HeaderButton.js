import React from 'react';
import { NavLink } from 'react-router-dom';

import './HeaderButton.css';

const HeaderButton = props => {
    return (
        <u1 className="nav-link">
            <li>
                <NavLink to="/" exact>HOME</NavLink>
            </li>
        </u1>
    );
};

export default HeaderButton;