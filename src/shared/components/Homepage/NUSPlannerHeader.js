import React from 'react';

import './NUSPlannerHeader.css';

const NUSPlannerHeader = props => {
    return (
        <header className="NUSPlanner-header">
            {props.children}
        </header>
    );
};

export default NUSPlannerHeader;