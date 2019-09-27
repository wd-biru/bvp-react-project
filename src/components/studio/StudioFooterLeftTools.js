import React from 'react';

import StudioFooterTimeToolsBelow from './StudioFooterTimeToolsBelow';

import tooltime1 from './me/tool-time1.png';
import tooltime2 from './me/tool-time2.png';
import tooltime3 from './me/tool-time3.png';
import timeline from './me/timeline-img.png';


const StudioFooterLeftTools = () => {
    return (
        <div className="tool-time">
			<div className="row">
				<div className="col-sm-2">
					<ul>
						<li><a href="#"><img src={tooltime1} /></a></li>
                        <li><a href="#" className="active"><img src={tooltime2} /></a></li>
                        <li><a href="#"><img src={tooltime3} /></a></li>
					</ul>
				</div>
				<div className="col-sm-10 timeline-img">
					<img src={timeline}  />
				</div>
			</div>
             <StudioFooterTimeToolsBelow />
		</div>
        
    )
}

export default StudioFooterLeftTools;
