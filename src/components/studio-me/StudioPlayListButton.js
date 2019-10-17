import React from 'react';

import backward from '../../assets/img/me/fa-backward.png';
import play from '../../assets/img/me/fa-play.png';
import faplay from '../../assets/img/me/fa-play.png';
import forward from '../../assets/img/me/fa-step-forward.png';
import forward2 from '../../assets/img/me/fa-forward.png';
import volume from '../../assets/img/me/fa-volume-down.png';



const StudioPlayListButton = () => {
    return (
        <div className="container-fluid">
		<div className="row">
			<div className="col-sm-7">
				<div className="Studioed-section2-1">
	    			<ul className="margin-b-7">
	    				<li><a href="#"><img src={backward} /></a></li>    			
	    				<li><a href="#"><img src={play} /></a></li>
	    				<li><a href="#"><img src={faplay} /></a></li>
	    				<li><a href="#"><img src={forward} /></a></li> 
	    				<li><a href="#"><img src={forward2} /></a></li> 
	    				<li><a href="#"><img src={volume} /></a></li>
	    				
	    			</ul>
	    		</div>
			</div>
			<div classNameName="col-sm-5"></div>
		</div>
	</div>
    )
}

export default StudioPlayListButton


