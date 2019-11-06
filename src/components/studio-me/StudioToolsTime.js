import React from 'react';
import search_multiple_users from '../../assets/img/me/search_multiple_users.png';
import timeline from '../../assets/img/me/timeline-img.png';

const StudioToolsTime = () => {
    return (
        <div class="tool-time">
			<div class="row toolstimes">
				<div class="col-sm-2">
					<div class="seaech-upload">
                     	<form class="navbar-form navbar-left" action="/action_page.php">
				            <i class="fa fa-search"></i>
                            <input type="text" 
                            class="form-control navseacrh3" 
                            placeholder="Search" name="search" />
				            <img src={search_multiple_users} />
				        </form>
                    </div>
				</div>
				<div class="col-sm-10 timeline-img">
					<img src={timeline} style={{width: "100%"}} />
				</div>
			</div>
		</div>
    )
}

export default StudioToolsTime;
