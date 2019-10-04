import React from 'react';
import timetrigger from '../img/Time-Triggers.png';

import StudioLinkTimeTriggerLinkCompo from './StudioLinkTimeTriggerLinkCompo';

const StudioLinkTimeTriggerLink = () => {
    return (
        <div className="table-responsive two">
		  <div className="Time-Triggers" id="time-click-hide">
			  <img src={timetrigger} />
			  <h5>You have not created any time</h5>
			  <h5>triggers yet.</h5>
		  </div>
		  <StudioLinkTimeTriggerLinkCompo />
	</div>
    )
}

export default StudioLinkTimeTriggerLink
