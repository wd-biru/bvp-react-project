import React from 'react';
import StudioToolsRight from './StudioToolsRight';

import search_users from '../../assets/img/me/search_multiple_users.png';


function StudioTools() {
    return (
        
			<div className="row">
				<div className="col-sm-2">
				<div className="seaech-upload">
				    <form className="navbar-form navbar-left" >
						<i className="fa fa-search"></i>
						<input type="text" className="form-control navseacrh1" placeholder="Search" name="search"></input>
						<img src={search_users} className="search_usersbb" />
					</form>
				</div>
				</div>
			
						{/* Card Body */}
				<StudioToolsRight />
		    </div>
		
    )
}

export default StudioTools
