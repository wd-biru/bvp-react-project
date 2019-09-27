import React from 'react';
import imagess from './Time-Triggers.png';


const StudioTimeTrigger3 = () => {
    return (
		<div className="container Time-Triggersimg">
		   <div className="row">
			  <div className="col-sm-6">
				<label for="email">in point</label>
			     	<img src={imagess} className="img-w" />
				    	<div className="Time-Triggersimg-pus">
					      	{/* <div className="time-line bg-dark pt-3">
								<div className="progress">
								     <div className="progress-bar">
								            <span className="progress-icon"></span>
								     </div>
								</div>
			    			</div> */}
		       				<ul className="p-0 bg-dark m-auto text-center p-3">
                                <li><a href="#"><i className="fas fa-step-backward"></i></a></li>
                                <li><a href="#"><i className="fas fa-backward"></i></a></li> 
                                <li className="timestart"><a href="#">00:00:00:01</a></li>
                                <li><a href="#"><i className="fas fa-forward"></i></a></li>
                                <li><a href="#"><i className="fas fa-step-forward"></i></a></li> 
				   			</ul>
						</div>
					</div>

                    <div className="col-sm-6">
						<label for="email">out point</label>
				    		<img src={imagess} className="img-w" />
						<div className="Time-Triggersimg-pus">
						{/* <div className="time-line bg-dark pt-3">
							<div className="progress">
					             <div className="progress-bar">
					                <span className="progress-icon"></span>
					             </div>
					        </div>
					   </div> */}
					<ul className="p-0 bg-dark m-auto text-center p-3">
						<li><a href="#"><i className="fas fa-step-backward"></i></a></li>
						<li><a href="#"><i className="fas fa-backward"></i></a></li> 
						<li className="timestart"><a href="#">00:00:00:02</a></li>
		   				<li><a href="#"><i className="fas fa-forward"></i></a></li>
		  				<li><a href="#"><i className="fas fa-step-forward"></i></a></li> 
		   			</ul>
				</div>
			</div>

				</div>
		</div>			
								
    );
}

export default StudioTimeTrigger3 ;
