import React from 'react';

import StudioLinkHotSportsChild from './StudioLinkHotSportsChild';

const StudioLinkHotSports = () => {
    return (
            <div className="tab-pane container fade active fademy" id="menu21">
				  		<div class="table-responsive">
							<table class="table table-hover">
							    <tbody>
							      <tr>
							        <td><i class="fas fa-search">Search</i></td>
							        <td>Group Name</td>
							        <td><i class="far fa-edit">Edit</i></td>
								    <td>Action</td>
							        <td>Last Updated</td>
							      </tr>
							    </tbody>
							</table>
						</div>
						<StudioLinkHotSportsChild />
						<StudioLinkHotSportsChild />
						<StudioLinkHotSportsChild />
						<StudioLinkHotSportsChild />
						<StudioLinkHotSportsChild />
		</div>
				  		
    )
}

export default StudioLinkHotSports;
