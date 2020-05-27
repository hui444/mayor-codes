import React from 'react';

import './CreatePage.css';
import ModuleInputBoxes from '../components/ModuleInputBoxes';
import PreferencesQ from '../components/PreferencesQ';
import CreateButton from '../components/CreateButton';

const CreatePage = () => {
    return (
        <React.Fragment>
            <form action="/">
                <div className="left">
                    <ModuleInputBoxes />
                </div>
                <div className="right">
                    <div className="top">
                        <PreferencesQ />
                    </div>
                    <div className="bottom">
                        <CreateButton />
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
};

export default CreatePage;