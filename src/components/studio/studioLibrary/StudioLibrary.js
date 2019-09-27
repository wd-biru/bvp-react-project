import React from 'react';
import StudioLibrary1 from './StudioLibrary1';

const StudioLibrary = () => {
    return (         
		 <div class="container fade2 myself" id="menu6">
				  		<div class="Library-sec myself_libary">
				  			<div class="table-responsive two myselft_table_resp">
				  			  <div class="container-fluid">
							    <div className="row">
							     <div className="col-sm-7" >
				  			
								</div>
							
							 <div className="col-sm-5 studiolibrary">
							 <form class="navbar-form navbar-left mb-2" action="/action_page.php">
									  <br /><br />
				                    <input type="text" class="form-control navseacrh" placeholder="Search For anything" name="search" />
								</form>
								<StudioLibrary1 />
							 </div>
							 </div>  {/* Close First Row */}
			          </div>
					</div>
			</div>				
		</div>

    );
}

export default StudioLibrary;
