import React from 'react';
import Video from "../../../assets/img/me/video-test.mp4";


function PlayerSettingSection2() {
    return (
    <div className="col-sm-9 createoverlay-two playerSetting-two">
        <video width="100%" controls>
            <source src={Video} type="video/mp4" />
        </video>
        
    </div>  
    )
}

export default PlayerSettingSection2

