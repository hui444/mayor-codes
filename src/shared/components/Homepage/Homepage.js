import React from 'react';
import { Link } from 'react-router-dom';

import HeaderButton from './HeaderButton';
import NUSPlannerHeader from './NUSPlannerHeader';
import './Homepage.css';

const Homepage = props => {
    return(
        <NUSPlannerHeader>
            <h1 className="NUSPlanner-Homepage__title">
                <Link to='/'>
                    <span className="NUS">NUS</span>
                    <span className="Planner">Planner</span>
                </Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <HeaderButton />
            </nav>
        </NUSPlannerHeader>
    );
};

export default Homepage;