import React from 'react';
import { Link } from 'react-router-dom';

import './CreateCard.css';

const CreateCard = () => {
    return (
        <li className="create-item">
            <div className="create-flipcard">
                <div className="create-flipcard__inner">
                    <div className="create-flipcard__front">
                        <h1 className="create-flipcard__front__title">
                            CREATE
                        </h1>
                    </div>
                    <Link to='/create'>
                        <div className="create-flipcard__back">
                            <p>This is how to CREATE....</p>
                        </div>
                    </Link>
                </div>
            </div>
        </li>
    );
};

export default CreateCard;