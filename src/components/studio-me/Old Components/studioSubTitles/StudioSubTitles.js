import React from 'react';
import StudioSubTitlesB from './StudioSubTitlesB';
import StudioSubTitlesC from './StudioSubTitlesC';

const StudioTime = () => {
    return (         
         <div class="container fade2 myself" id="menu4">
				  		<div class="Library-sec myself_libary">
				  			<div class="table-responsive two myselft_table_resp">
				  			  <div class="container-fluid">
							    <div className="row">
							     <div className="col-sm-7" >
				  			       <h1>this is col-sm-07</h1>
								</div>
						<div className="col-sm-5 ">
							
						<div class="Subtitle-sec">
				  			<div class="a">
				  				<select class="form-control" id="sel1">
									   	<option>English</option>
									    <option>Pause Point</option>
									    <option>Custom</option>
									    <option>Open Overlay</option>
								</select>
								<a class="createnew">UPLOAD</a>
				  			</div>
						</div>
						
						<StudioSubTitlesB />
						<StudioSubTitlesC />                         
                     </div>
		     		</div>  {/* Close First Row */}
		         </div>
				</div>
			</div>				
		</div>
    );
}

export default StudioTime;
