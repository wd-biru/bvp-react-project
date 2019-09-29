import React from 'react';
import StudioTimeTrigger1 from './StudioTimeTrigger1';


function StudioTimeTrigger() {
    return (
<div className="table1">
     <div className="table-responsive">
		<div className="wrapper center-block">
			  <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
				<div className="panel panel-default">
					  <div className="panel-heading active" role="tab" id="headingOne103">
						  <table className="table table-hover">						    
							  <tbody>
							      <tr>
							        <td><i className="fas fa-search"></i></td>
							        <td>Label</td>
							        <td>Type</td>
							        <td>In Point</td>
							        <td>Out Point</td>
							        <td><a href="" onClick="displayTimeTrigger()" id="creatbtn" className="createnew">CREATE NEW</a></td>
							      </tr>
							    </tbody>
							</table>
						</div>
				 </div>
			</div>
       </div>
  </div>
 <StudioTimeTrigger1 />
  </div>
					
				);
		}
export default StudioTimeTrigger;
