import React from 'react'
import facebook from './facebook-icon.png';
import twitter from './twitter-icon.png';

const StudioPublish = () => {
    return (
		<div class="container fade2 myself" id="menu5">
		<div class="Library-sec2 myself_libary">
			<div class="table-responsive two myselft_table_resp">
			  <div class="container-fluid">
			  <div className="row">
			   <div className="col-sm-7" >
				   <h1>this is col-sm-07</h1>
			  </div>
	  <div className="col-sm-5 ">
		  {/* jihihihihihiok */}
	  
		  <div className="tab-pane container fade2" id="menu5">
				  		<div className="Embed-sec pt-4">
						  <div className="table-responsive two">
					  			
					  				<div className="row">
					  					<div className="col-sm-6">
					  						<form action="/action_page.php">
											  <div className="form-group">
											    <label>Embed URL</label>
											    <a href="" className="copy"> Copy URL</a>
											    <input type="text" className="form-control" id="text" placeholder="http://bvpstudio.s3-website-us-west-1.amazonaws.com/" />
											  </div>
											  <div className="loop-li">
											  	<ul>
											  		<li>Loop Continuousty <a href=""><i className="fa fa-toggle-off"></i></a></li>
											  		<li>Disabla Auto-Play <a href=""><i className="fa fa-toggle-off"></i></a></li>
											  		<li>Hide Share Buttons <a href=""><i className="fa fa-toggle-off"></i></a></li>
											  		<li>Hide Video Controls <a href=""><i className="fa fa-toggle-off"></i></a></li>
											  		<li>Fixed Dimensions <a href=""><i className="fa fa-toggle-off"></i></a></li>
											  		<li>YouTube Hosted <a href=""><i className="fa fa-toggle-off"></i></a></li>
											  		<li>Show Subtitles <a href=""><i className="fa fa-toggle-off"></i></a></li>
											  	</ul>
											  	<div className="puntosoc">
											  		<label>Publish to Social</label><br/>
											  		<a href=""><img src={facebook} /></a>
											  		<a href=""><img src={twitter} /></a>
											  	</div>
											  </div>							  
											</form>
					  					</div>

										  <div className="col-sm-6">
					  						<form action="/action_page.php">
											  <div className="form-group mb-0">
											    <label>Embed Code</label>
											    <a href="" className="copy"> Copy Code</a>
											    <textarea className="form-control bvp_text_area" rows="5" id="comment" placeholder="" >
													<iframe src="http://bvpstudio.s3-website-us-west-1.amazonaws.com/" > </iframe>
												</textarea>
											  </div>							  
											</form>
											<div className="loop-li">
												<ul>
													<a href="" className="createnew2">PREVIEW VIDEO</a>
												  	<li className="mt-2">Loop Continuousty <a href=""><i className="fa fa-toggle-off"></i></a></li>
												</ul>
								</div>

										</div>
									</div>
								</div>
								
					  		</div>
				  		</div>
			
	  
	  {/* <StudioSubTitlesB />
	  <StudioSubTitlesC />                          */}
   </div>
   </div>  {/* Close First Row */}
</div>
</div>
</div>				
</div>
		
    )
}

export default StudioPublish;
