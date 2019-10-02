import React from 'react';
import StudioTimeTrigger3 from './StudioTimeTrigger3';

const StudioTimeTrigger2 = () => {
    return (
                        
							<div className="Time-Triggers2" id="time-click-show">
								<div className="alert alert-success alert-dismissible fade show">
								    <button type="button" className="close" onClick="timeTriggerShow()">&times;</button>
								    <select className="form-control" id="sel1">
									   	<option>Trigger1</option>
									    <option>1</option>
									    <option>2</option>
									    <option>3</option>
									    <option>4</option>
									</select>
									<select className="form-control" id="sel1">
									   	<option>Jump Point</option>
									    <option>Pause Point</option>
									    <option>Custom</option>
									    <option>Open Overlay</option>
									</select>
									<a href="#" className="timestart">00:00:00:01</a>
									<a href="#" className="timeend">00:00:00:02</a>	
									<a href=""><i className="far fa-check-circle"></i></a>
								 </div>
								 <StudioTimeTrigger3 />
							</div>
	);
}

export default StudioTimeTrigger2;
