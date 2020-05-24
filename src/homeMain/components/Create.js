import React from 'react';
import { Link } from 'react-router-dom';

import './Create.css';

const Create = () => {
    return (
        <Link to='/create'>
            <li className="create-item">
                <div className="create-flipcard">
                    <div className="create-flipcard__inner">
                        <div className="create-flipcard__front">
                            <h1 className="create-flipcard__front__title">
                                CREATE
                            </h1>
                        </div>
                        <div className="create-flipcard__back">
                            <p>This is how to CREATE....</p>
                        </div>
                    </div>
                </div>
            </li>
        </Link>
    );
};

export default Create;