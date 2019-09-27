import React from 'react';

import StudioHotspots1 from './StudioHotspots1';

function StudioHotspots() {
    return (
        <div class="container fade2 myself" id="menu2">
				  		<div class="Library-sec myself_libary">
				  			<div class="table-responsive two myselft_table_resp">
				  			  <div class="container-fluid">
							    <div className="row">
							     <div className="col-sm-7" >
				  			
								</div>
						<div className="col-sm-5 ">
							<table className="table table-hover">
							    <tbody>
							      <tr>
							        <td><i className="fas fa-search">Search</i></td>
							        <td>Group Name</td>
							        <td><i className="far fa-edit">Edit</i></td>
							        <td>Action</td>
							        <td>Last Updated</td>
							      </tr>
							    </tbody>
							</table>
                         <StudioHotspots1 />
						 <StudioHotspots1 />
						 <StudioHotspots1 />
						 <StudioHotspots1 />
						 <StudioHotspots1 />
						 <StudioHotspots1 />
						 <StudioHotspots1 />
						 <StudioHotspots1 />
						 <StudioHotspots1 />
						 
                             </div>
							</div>  {/* Close First Row */}
			          </div>
					</div>
			</div>				
		</div>
    )
}

export default StudioHotspots;
