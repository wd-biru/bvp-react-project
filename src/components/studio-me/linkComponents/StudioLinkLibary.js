import React from 'react'

import StudioLinkLibaryChild from './StudioLinkLibaryChild';

const StudioLinkLibary = () => {
    return (
            <div class="tab-pane container fade active" id="menu61">
				  		<div class="Library-sec">
				  			<div class="table-responsive two">
				  				<ul class="nav nav-pills">         
					              <li class="nav-item">
					                <a class="nav-link studio-nav-link" data-toggle="pill" href="#Videos">Videos</a>
					              </li>
					              <li class="nav-item">
					                <a class="nav-link studio-nav-link" data-toggle="pill" href="#Images">Images</a>
					              </li>
					              <li class="nav-item">
					                <a class="nav-link studio-nav-link" data-toggle="pill" href="#Documents">Documents</a>
					              </li>
					            </ul>
								<div>
								<form class="navbar-form navbar-left mb-2" action="/action_page.php">
				                    <input type="text" class="form-control navsearch2" placeholder="Search " name="search" />
				                </form>
							</div>
                        </div>
			    	</div>
				<div className="tab-content1">
					<StudioLinkLibaryChild />
				</div>
            </div>
    )
}

export default StudioLinkLibary;
