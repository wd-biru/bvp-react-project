import React from 'react';
//import '../css/me_studio.css';
import PlayerSettingHeader from './PlayerSettingHeader';
import PlayerSettingSection3 from './PlayerSettingSection3';
import PlayerSettingSection2 from './PlayerSettingSection2';
import PlayerSettingSection1 from './PlayerSettingSection1';

function PlayerSetting() {
    return (
        <div>
            <body className="studio_page createoverlay_page">
                <PlayerSettingHeader />
                <div className="container-fluid createoverlay-section mt-0">
                    <div className="row">
                       <PlayerSettingSection3 />
                       <PlayerSettingSection2 />
                       <PlayerSettingSection1 />
                    </div>
                </div>
            </body>
        </div>
    )
}

export default PlayerSetting;
