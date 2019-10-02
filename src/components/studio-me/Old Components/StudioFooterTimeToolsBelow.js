import React from 'react';

import StudioFooterTimeToolsBelow1 from './StudioFooterTimeToolsBelow1';
import StudioFooterTimeToolsBelow2 from './StudioFooterTimeToolsBelow2';
import StudioFooterTimeToolsBelow3 from './StudioFooterTimeToolsBelow3';

import StudioFooterRightTools from './StudioFooterRightTools';




//import img1 from './me/checkered.png';

const StudioFooterTimeToolsBelow = () => {
    return (
       
        <div className="row">
    		<div className="col-sm-2 Studioed-section2-1">
    			<div className="sear-drop Studioed-section2-1 mt-0 border-r-n">
					<div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
					  <div className="card">
					    <div className="card-header" role="tab" id="headingOne1">
					      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
					        aria-controls="collapseOne1">
					        <p className="mb-0">
					        <div className="left-video"><i className="fa fa-video-camera" aria-hidden="true"></i></div>	
					          <div className="text">Video <i className="fas fa-check-square"></i></div> 
					    	</p>					        					        
					      </a>					      
					    </div>

					    
					    <div id="collapseOne1" className="collapse" role="tabpanel" aria-labelledby="headingOne1"
					      data-parent="#accordionEx">
					      <div className="card-body">
					        <a href="#">Demo1</a>
					        <hr className="hr1" />
					        <a href="#">Demo2</a>
					        <hr className="hr1" />
					        <a href="#">Demo3</a>
					      </div>
					    </div>

					  </div>
					  <StudioFooterTimeToolsBelow1 />
                      <StudioFooterTimeToolsBelow2 />
                      <StudioFooterTimeToolsBelow3 />	  
					</div>
    			</div>
    		</div>
    		<StudioFooterRightTools />
            </div>
       
    )
}

export default StudioFooterTimeToolsBelow;
