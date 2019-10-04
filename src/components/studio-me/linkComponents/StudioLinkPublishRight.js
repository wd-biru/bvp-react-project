    import React from 'react';


const StudioLinkPublishRight = () => {
    return (
                     <div class="col-sm-6">
					  						<form action="/action_page.php">
											  <div class="form-group mb-0">
											    <label>Embed Code</label>
											    <a href="" class="copy"> Copy Code</a>
											    <textarea class="form-control" rows="5" id="comment" placeholder=""><iframe src="http://bvpstudio.s3-website-us-west-1.amazonaws.com/" height="200" width="300"></iframe></textarea>
											  </div>							  
											</form>
											<div class="loop-li">
												<ul>
													<a href="" class="createnew">PREVIEW VIDEO</a>
												  	<li class="mt-2">Loop Continuousty <a href=""><i class="fa fa-toggle-off"></i></a></li>
												</ul>
											</div>
					  					</div>
                                          );
}

export default StudioLinkPublishRight;
