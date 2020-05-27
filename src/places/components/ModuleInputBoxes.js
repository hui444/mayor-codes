import React from 'react';

import './ModuleInputBoxes.css';

const ModuleInputBoxes = () => {
    return (
        <React.Fragment>
            <h2 className="module-header">Modules :</h2>
            <div className="input-container">
                <input 
                    className="input-module"
                    type="text"
                    placeholder="Module 1"
                    name="Mod1"
                />
            </div>
            <div className="input-container">
                <input 
                    className="input-module"
                    type="text"
                    placeholder="Module 2"
                    name="Mod2"
                />
            </div>
            <div className="input-container">
                <input 
                    className="input-module"
                    type="text"
                    placeholder="Module 3"
                    name="Mod3"
                />
            </div>
            <div className="input-container">
                <input 
                    className="input-module"
                    type="text"
                    placeholder="Module 4"
                    name="Mod4"
                />
            </div>
            <div className="input-container">
                <input 
                    className="input-module"
                    type="text"
                    placeholder="Module 5"
                    name="Mod5"
                />
            </div>
            <div className="input-container">
                <input 
                    className="input-module"
                    type="text"
                    placeholder="Module 6"
                    name="Mod6"
                />
            </div>
            <div className="input-container">
                <input 
                    className="input-module"
                    type="text"
                    placeholder="Module 7"
                    name="Mod7"
                />
            </div>            
        </React.Fragment>
    );
};

export default ModuleInputBoxes;