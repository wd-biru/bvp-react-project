import React from 'react';

import tool15 from '../../assets/img/me/tool-15.png';
import tool16 from '../../assets/img/me/tool-16.png';
import tool17 from '../../assets/img/me/tool-17.png';
import tool18 from '../../assets/img/me/tool-18.png';
import tool19 from '../../assets/img/me/tool-19.png';

const StudioTimeToolsRight = () => {
    return (
             <div className="col-sm-5">    
					<ul className="my-2 my-lg-0">
			            <li><a href="#" title="Zoom Out"><img src={tool15} /></a></li>
			            <li> <a href="#"><img src={tool16} /></a></li>
			            <li> <a href="#" title="Zoom In"><img src={tool17} /></a></li>
			            <li><a href="#" title="Fit Project in Timeline Window"><img src={tool18} /></a></li>  
			            <li><a href="#" title="Project Duration"><img src={tool19} /></a></li> 
			            <li><a href="#" title="Project Duration">00:00:00:01</a></li> 
				    </ul>
				</div>
    )
}

export default StudioTimeToolsRight;
