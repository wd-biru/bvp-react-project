import React from 'react';

import cutimg from '../../assets/img/me/cutimg.jpg';

const StudioPageFooterSectionRight = () => {
    return (
        <div class="col-sm-10 Studioed-section2-2">
    			<div class="time-line-vert">
    				<div class="progress">
		                <div class="progress-bar">
		                    <span class="progress-icon"></span>
		                </div>
		            </div>
    			</div>
    			<div class="cutimages-border-bot">
	    			<div class="cutimages-sec">
	    				<img src={cutimg} />
	    			</div>
    			</div>
    			<div class="cutimages-bot4"></div>
    			<div class="cutimages-bot4"></div>
    			<div class="cutimages-bot4"></div>
    			<div class="cutimages-bot4"></div>
    			<div class="cutimages-bot4"></div>
    		</div>
    )
}

export default StudioPageFooterSectionRight;
