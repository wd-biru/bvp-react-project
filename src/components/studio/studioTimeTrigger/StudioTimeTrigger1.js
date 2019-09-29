import React from 'react';
import time2 from  './Time-Triggers.png';
import StudioTimeTrigger2 from './StudioTimeTrigger2';

const StudioTimeTrigger1 = () => {
        return (
         <div class="table-responsive two">
			 <div class="Time-Triggers" id="time-click-hide">
			   <img src={time2} />
				<h5>You have not created any time</h5>
     			<h5>triggers yet.</h5>
                 <StudioTimeTrigger2 />
			</div>
		</div>
    );
}

export default StudioTimeTrigger1;
