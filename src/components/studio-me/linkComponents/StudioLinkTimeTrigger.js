import React from 'react'
import StudioLinkTimeTriggerLink from './StudioLinkTimeTriggerLink';
const StudioLinkTimeTrigger = () => {
    return (
<div className="tab-pane container fade active" id="menu31">
		<div className="table-responsive">
		  <table className="table table-hover">
			  <tbody>
				<tr>
				  <td><i className="fas fa-search">Search</i></td>
				  <td>Label</td>
				  <td>Type</td>
				  <td>In Point</td>
				  <td>Out Point</td>
				  <td><a onClick="displayTimeTrigger()" id="creatbtn" className="createnew">CREATE NEW</a></td>
				</tr>
			  </tbody>
		  </table>
	  </div>
	  <StudioLinkTimeTriggerLink />
	</div>
    )
}

export default StudioLinkTimeTrigger;
