import React from 'react';
import { Link } from 'react-router-dom';

import './Homepage.css';
import NUSPlannerHeader from './NUSPlannerHeader';

const Homepage = props => {
    return(
        <NUSPlannerHeader>
            <h1 className="NUSPlanner-Homepage__title">
                <Link to='/'>
                    <span className="NUS">NUS</span>
                    <span className="Planner">Planner</span>
                </Link>
            </h1>
        </NUSPlannerHeader>
    );
};

export default Homepage;