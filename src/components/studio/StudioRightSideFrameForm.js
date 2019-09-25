import React from 'react'

function StudioRightSideFrameForm() {
    return (
       
            <div className="col-sm-7 rightframeform">
										<form action="">
										  <div className="form-group">
										    <label for="email">Video ID</label>
										    <input type="text" className="form-control" id="text" placeholder="Video ID" />
										  </div>
										  <div className="form-group">
										    <label for="pwd">Password</label>
										    <input type="password" className="pwd-w form-control" id="pwd" placeholder="Password Disabled" />
										    <a href="" className="iconsss"><i className="fa fa-toggle-off"></i></a>
										  </div>
										  <div className="form-group">
										    <label for="email">Locking</label>
										    <select className="form-control" id="sel1">
										    	<option>by country</option>
											    <option>1</option>
											    <option>2</option>
											    <option>3</option>
											    <option>4</option>
											 </select>
										  </div>
										  <div className="form-group">
										    <input type="text" className="form-control" id="text" value="by domain" />
										  </div>	
										  <div className="form-group">
										    <input type="text" className="form-control" id="text" value="Quiz Mod" />										  </div>
										  <div className="form-group">
										    <input type="text" className="form-control" id="text" value="Quiz Mod2"/>
										  </div>						  
										</form>
								
        </div>
    )
}

export default StudioRightSideFrameForm;
