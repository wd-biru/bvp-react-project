import React from 'react'

const StudioLinkPublish = () => {
    return (
            <div class="tab-pane container fade" id="menu1">
				  		<div class="table-responsive two">
				  			<form action="/action_page.php">
							  <div class="form-group">
							    <label for="email">Project Name</label>
							    <input type="text" class="form-control" id="text" placeholder="Project Name" />
							  </div>
							  <div class="form-group">
							    <label for="email">Description</label>
							    <textarea class="form-control" rows="5" id="comment" placeholder="Please Enter Description"></textarea>
							  </div>							  
							</form>
							<div class="container">
								<div class="row">
									<div class="col-sm-6 p-0">
										<label for="email">Thumbnail</label>
										<img src="img/me/images.jpg" class="img-w" />
										<div class="posterframe-btn-sec">
											<input type="button" value="UPLOAD NEW" class="UPNEW" />
											<input type="button" value="CURRENT FRAME" class="CRFR" />
										</div>
									</div>
									<div class="col-sm-6">
										<form action="/action_page.php">
										  <div class="form-group">
										    <a href="playerSettings.html"><input type="button" name="" value="Player Settings" class="Player-Settings createnew-top" /></a>
										  </div>						  
										</form>
									</div>
								</div>
							</div>
				  		</div>
				  	</div>
    )
}

export default StudioLinkPublish;
