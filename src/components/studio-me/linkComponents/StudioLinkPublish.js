import React from 'react';
import facebook from '../img/facebook-icon.png';
import twitter from '../img/twitter-icon.png';
import StudioLinkPublishRight from './StudioLinkPublishRight';

const StudioLinkPublish = () => {
    return (
            <div class="tab-pane container fade active" id="menu51">
				  		<div class="Embed-sec pt-4">
					  		<div class="table-responsive two">
					  			<div class="container-fluid">
					  				<div class="row">
					  					<div class="col-sm-6">
					  						<form action="/action_page.php">
											  <div class="form-group">
											    <label>Embed URL</label>
											    <a href="" class="copy"> Copy URL</a>
											    <input type="text" class="form-control" id="text" placeholder="http://bvpstudio.s3-website-us-west-1.amazonaws.com/" />
											  </div>
											  <div class="loop-li">
											  	<ul>
											  		<li>Loop Continuousty <a href=""><i class="fa fa-toggle-off"></i></a></li>
											  		<li>Disabla Auto-Play <a href=""><i class="fa fa-toggle-off"></i></a></li>
											  		<li>Hide Share Buttons <a href=""><i class="fa fa-toggle-off"></i></a></li>
											  		<li>Hide Video Controls <a href=""><i class="fa fa-toggle-off"></i></a></li>
											  		<li>Fixed Dimensions <a href=""><i class="fa fa-toggle-off"></i></a></li>
											  		<li>YouTube Hosted <a href=""><i class="fa fa-toggle-off"></i></a></li>
											  		<li>Show Subtitles <a href=""><i class="fa fa-toggle-off"></i></a></li>
											  	</ul>
											  	<div class="puntosoc">
											  		<label>Publish to Social</label><br />
											  		<a href=""><img src={facebook} /></a>
											  		<a href=""><img src={twitter} /></a>
											  	</div>
											  </div>							  
											</form>
					  					</div>
										  <StudioLinkPublishRight />
					  				</div>
					  			</div>
					  		</div>
				  		</div>
				  	</div>
				  
    );
}

export default StudioLinkPublish;
