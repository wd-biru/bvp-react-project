import React from 'react';
import createoverlayside1 from "../../../assets/img/me/createoverlay-side1.png";
import createoverlayside2 from "../../../assets/img/me/createoverlay-side2.png";
import createoverlayside3 from "../../../assets/img/me/createoverlay-side3.png";
import createoverlayside4 from "../../../assets/img/me/createoverlay-side4.png";
import createoverlayside5 from "../../../assets/img/me/createoverlay-side5.png";
import createoverlayside6 from "../../../assets/img/me/createoverlay-side6.png";
import createoverlayside7 from "../../../assets/img/me/createoverlay-side7.png";
import createoverlayside8 from "../../../assets/img/me/createoverlay-side8.png";
import createoverlayside9 from "../../../assets/img/me/createoverlay-side9.png";
import createoverlayside10 from "../../../assets/img/me/createoverlay-side10.png";


function PlayerSettingSection1() {
    return (
        <div className="col-sm-1 createoverlay-one playerSetting-one">
            <ul>
                <li><span href="#" title="Square Shape">
                    <img src={createoverlayside1} /></span></li>
                <li><span href="#" title="Circle">
                    <img src={createoverlayside2} /></span></li>
                <li><span href="#" title="Custom Shape">
                    <img src={createoverlayside9} /></span></li>
                <li><span href="#" title="Text">
                    <img src={createoverlayside3} /></span></li>
                <li><span href="#" title="Image">
                    <img src={createoverlayside4} /></span></li>
                <li><span href="#" title="Arrow Loop">
                    <img src={createoverlayside5} /></span></li>
                <li><span href="#" title="Video">
                    <img src={createoverlayside6} /></span></li>
                <li><span href="#" title="Image / Video slider">
                    <img src={createoverlayside10} /></span></li>
                <li><span href="#" title="Map">
                    <img src={createoverlayside7} /></span></li>
                <li><span href="#" title="Web Programming">
                    <img src={createoverlayside8} /></span></li>
            </ul>
        </div>  
    )
}

export default PlayerSettingSection1

