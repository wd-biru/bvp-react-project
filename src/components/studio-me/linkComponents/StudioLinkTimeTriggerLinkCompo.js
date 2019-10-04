import React from 'react';
import timetrigger from '../img/images.jpg';

function StudioLinkTimeTriggerLinkCompo() {
    return (
<div class="Time-Triggers2" id="time-click-show1">
			  <div class="alert alert-success alert-dismissible fade show">
				  <button type="button" class="close" onClick="timeTriggerShow()">&times;</button>
				  <select class="form-control" id="sel1">
						 <option>Trigger1</option>
					  <option>1</option>
					  <option>2</option>
					  <option>3</option>
					  <option>4</option>
				  </select>
				  <select class="form-control" id="sel1">
						 <option>Jump Point</option>
					  <option>Pause Point</option>
					  <option>Custom</option>
					  <option>Open Overlay</option>
				  </select>
				  <a href="#" class="timestart">00:00:00:01</a>
				  <a href="#" class="timeend">00:00:00:02</a>	
				  <a href=""><i class="far fa-check-circle"></i></a>
			   
				   <div class="container Time-Triggersimg">
					  <div class="row">
						  <div class="col-sm-6">
							  <label for="email">in point</label>
							  <img src={timetrigger} class="img-w" />
							  <div class="Time-Triggersimg-pus">
								  <div class="time-line bg-dark pt-3">
									  <div class="progress">
										  <div class="progress-bar">
											  <span class="progress-icon"></span>
										  </div>
									  </div>
								  </div>
								  <ul class="p-0 bg-dark m-auto text-center p-3">
									  <li><a href="#"><i class="fas fa-step-backward"></i></a></li>
									  <li><a href="#"><i class="fas fa-backward"></i></a></li> 
									  <li class="timestart"><a href="#">00:00:00:01</a></li>
									  <li><a href="#"><i class="fas fa-forward"></i></a></li>
									  <li><a href="#"><i class="fas fa-step-forward"></i></a></li> 
								  </ul>
							  </div>
						  </div>
						  <div class="col-sm-6">
							  <label for="email">out point</label>
							  <img src={timetrigger} class="img-w" />
							  <div class="Time-Triggersimg-pus">
								  <div class="time-line bg-dark pt-3">
									  <div class="progress">
										  <div class="progress-bar">
											  <span class="progress-icon"></span>
										  </div>
									  </div>
								  </div>
								  <ul class="p-0 bg-dark m-auto text-center p-3">
									  <li><a href="#"><i class="fas fa-step-backward"></i></a></li>
									  <li><a href="#"><i class="fas fa-backward"></i></a></li> 
									  <li class="timestart"><a href="#">00:00:00:02</a></li>
									  <li><a href="#"><i class="fas fa-forward"></i></a></li>
									  <li><a href="#"><i class="fas fa-step-forward"></i></a></li> 
								  </ul>
							  </div>
						  </div>
					  </div>	
				  </div>
			  </div>
		  </div>
	 
      );
}

export default StudioLinkTimeTriggerLinkCompo;
