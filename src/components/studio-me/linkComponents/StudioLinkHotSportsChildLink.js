import React from 'react'

const StudioLinkHotSportsChildLink = () => {
    return (
        <div id="collapseOne102" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne102">
	     <div className="panel-body">
             <div className="container-fluid">
			  	<div className="row">
			  		<div className="col-sm-5">
			  			<form action="/action_page.php">
			    			<div className="form-group">
			      			<label for="sel1">Hotspot action</label>
			      			<select className="form-control" id="sel1">
			     			   	<option>open overlay</option>
				     		    <option>go to link</option>
							    <option>jump to point in video</option>
					    	</select>
					</div>
					<div className="form-group">
						<label for="sel1">Hotspot Type</label>
	        			<select className="form-control" id="sel1">
						   	<option>center</option>
						    <option>left</option>
						    <option>right</option>
						    <option>bottom</option>
						</select>
					</div>
					<div className="form-group">
					    <label for="email">Custom reference</label>
					    <input type="text" className="form-control" id="text" placeholder="Video ID" />
					</div>
						<a href="#"><input type="button" name="" value="CUSTOM NOTSPOT DESIGN" className="createnew" /></a>
				</form>
	     		</div>
	       		<div className="col-sm-4">
	   			<a href="createoverlay.html"><input type="button" name="" value="CREATE OVERLAY" className="createnew createnew-top" /></a>
	       		</div>
	       		<div className="col-sm-3">
	   			<div className="PAUSE-VIDEO createnew-top">
	   				<a href="">
	 					PAUSE VIDEO <i className="fa fa-toggle-off"></i>
    				</a>
			</div> 
     		</div>
        	</div>
        </div>
     </div>
	    </div>
		  	
    );
}

export default StudioLinkHotSportsChildLink;
