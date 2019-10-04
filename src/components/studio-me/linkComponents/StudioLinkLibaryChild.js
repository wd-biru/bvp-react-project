import React from 'react';

import ChildImg from './images.jpg';

const StudioLinkLibaryClild = () => {
    return (
			<div class="col-lg-4 Childimgsec">
			    <div class="card">
			        <div class="card-body">
			            <img src={ChildImg} alt="John" />
			                <div class="cappadd">
			                <h5>John Doe</h5>
			                <p class="title">CEO &amp; Founder, Example</p>
			                <div class="cappadd-bot">
			                <a href="#"><i class="fa fa-gear"></i></a>
			                </div>
			                </div>
			        </div>
			        <div class="card-close">
			            <div class="dropdown">
			                <button type="button" id="closeCard2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-ellipsis-v"></i></button>
			                    <div aria-labelledby="closeCard2" class="dropdown-menu dropdown-menu-right has-shadow">
			                        <a href="#" class="dropdown-item edit"> <i class="fa fa-plus-circle"></i>Open Editor</a>
			                        <a href="#" class="dropdown-item edit"> <i class="fa fa-eye"></i>Preview</a>
			                        <a href="#" class="dropdown-item edit"> <i class="fa fa-files-o"></i>Duplicate File</a>
			                        <a href="#" class="dropdown-item edit"> <i class="fa fa-refresh"></i>Sync To</a>
			                           <hr />
			                        <a href="#" class="dropdown-item edit"> <i class="fa fa-eye"></i>Copy Video ID</a>
			                        <a href="#" class="dropdown-item remove"> <i class="fa fa-times"></i>Close</a>
			                    </div>
			              </div>
			           </div>
			     </div>
			</div>				  		
				                
  )
}
export default StudioLinkLibaryClild;
		  