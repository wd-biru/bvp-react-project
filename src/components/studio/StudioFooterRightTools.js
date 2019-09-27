import React from 'react';

import cutimg from './me/cutimg.jpg';

function StudioFooterRightTools() {
    return (
        <div>
            <div className="col-sm-10 Studioed-section2-2">
    			
    			{/*<div className="time-line-vert">
    				 <div className="progress">
		                 <div className="progress-bar">
		                    <span className="progress-icon"></span>
		                </div> 
		            </div> 
    			</div>
    			 <hr />*/}
    			<div className="cutimages-border-bot">
	    			<div className="cutimages-sec">
	    				<img src={cutimg} />
	    			</div>
    			</div>
                <hr />
    			<div className="cutimages-bot4"></div>
                <hr />
    			<div className="cutimages-bot4"></div>
                <hr />
    			<div className="cutimages-bot4"></div>
                <hr />
    		</div>
    	</div>
    );
}

export default StudioFooterRightTools;