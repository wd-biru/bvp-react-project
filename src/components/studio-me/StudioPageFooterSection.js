import React from 'react';
import StudioPageFooterSectionRight from './StudioPageFooterSectionRight';

const StudioPageFooterSection = () => {
    return (
        <div className="row">
    	  <div className="col-sm-2 Studioed-section2-1">
            <div className="sear-drop Studioed-section2-1 mt-0 border-r-n">
					<div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
					  <div className="card">
					    <div className="card-header accordion2" role="tab" id="headingOne5">
					      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne5" aria-expanded="false" aria-controls="collapseOne5" className="collapsed">
					        <p className="mb-0">
					          </p><div className="text">Active Hotspots </div> 
					    	<p></p>					        					        
					      </a>					    
					    </div>
					     {/* Card body */}
					      </div>
                        <div className="card">
					    <div className="card-header accordion2" role="tab" id="headingOne5">
					      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne5" aria-expanded="false" aria-controls="collapseOne5" className="collapsed">
					        <p className="mb-0">
					          </p><div className="text">Inactive Hotspots </div> 
					    	<p></p>					        					        
					      </a>					    
					    </div>
					    </div>
					  </div>		  
					</div>
    			</div>
				<StudioPageFooterSectionRight />
    		</div>
    )
}

export default StudioPageFooterSection
