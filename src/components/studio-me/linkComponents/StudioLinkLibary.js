import React from 'react'

import StudioLinkLibaryChild from './StudioLinkLibaryChild';

const StudioLinkLibary = () => {
    return (
            <div class="tab-pane container fade active" id="menu61">
				  		<div class="table-responsive two">
						  <div class="Library-sec">
				  			<div class="table-responsive two">
				  			<div class="container-fluid library">
				  				<form class="navbar-form navbar-left mb-2" action="/action_page.php">
				                    <input type="text" class="form-control navseacrh" placeholder="Search " name="search" />
				                </form>
								</div>
								<div class="row Childimgsec">
									<StudioLinkLibaryChild />
									<StudioLinkLibaryChild />
									<StudioLinkLibaryChild />
									<StudioLinkLibaryChild />
									<StudioLinkLibaryChild />
									<StudioLinkLibaryChild />
									<StudioLinkLibaryChild />
									<StudioLinkLibaryChild />
								</div>
							</div>
						</div>
					</div>
            </div>
    )
}

export default StudioLinkLibary;
