import React from 'react';

import backward from '../../assets/img/me/fa-backward.png';
import play from '../../assets/img/me/fa-step-backward.png';
import faplay from '../../assets/img/me/fa-play.png';
import forward from '../../assets/img/me/fa-step-forward.png';
import forward2 from '../../assets/img/me/fa-forward.png';
import volumedown from '../../assets/img/me/fa-volume-down.png';



const StudioPlayListButton = () => {
    return (
        <div className="container-fluid">
		<div className="row">
			<div className="col-sm-7">
				<div className="Studioed-section2-1">
	    			<ul className="margin-b-7">
					<li><span><img src={backward} /></span></li>    			
	    				<li><span><img src={play}/></span></li>
	    				<li><span><img src={faplay} /></span></li>
	    				
	    				<li><span><img src={forward} /></span></li> 
	    				<li><span><img src={forward2}/></span></li> 
	    				<li><span><img src={volumedown} /></span></li>
	    				
	    			</ul>
	    		</div>
			</div>
			<div className="col-sm-5"></div>
		</div>
	</div>
    )
}

export default StudioPlayListButton


