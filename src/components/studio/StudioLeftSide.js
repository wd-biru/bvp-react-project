import React from 'react'
import StudioRightSideUl from './StudioRightSideUl';
import StudioFooterPart1 from './StudioFooterPart1';
import backward from './me/fa-backward.png';
import stepbackward from './me/fa-step-backward.png';
import faplay from './me/fa-play.png';
import fastepforward from './me/fa-step-forward.png';
import faforward from './me/fa-forward.png';
import favolumedown from './me/fa-volume-down.png';



function StudioLeftSide() {
    return (
            <div className="container-fluid Studioed">
  		      <div className="row">
				<div className="col-sm-7 Studioed-seund">
                    <video width="100%" controls>
                    <source  src="" />
                    </video>
                    <div className="Studioed-section2-1">
                        <ul className="margin-b-7">
                            <li><a href="#"><img src={backward} /></a></li>    			
                            <li><a href="#"><img src={stepbackward} /></a></li>
                            <li><a href="#"><img src={faplay} /></a></li>
                            <li><a href="#"><img src={fastepforward} /></a></li> 
                            <li><a href="#"><img src={faforward} /></a></li> 
                            <li><a href="#"><img src={favolumedown} /></a></li>
                            <li className="timestart"><a href="#">00:00:00:01</a></li>
                        </ul>
                    </div>
			    </div>
			
            <StudioRightSideUl />
            </div>
            <StudioFooterPart1 />
           </div>
    )
}

export default StudioLeftSide;

