import React from 'react';
import StudioTimeToolsRight from './StudioTimeToolsRight';

import tool1 from '../../assets/img/me/tool-1.png';
import tool2 from '../../assets/img/me/tool-2.png';
import tool3 from '../../assets/img/me/tool-3.png';
import tool4 from '../../assets/img/me/tool-4.png';
import tool5 from '../../assets/img/me/tool-5.png';
import tool6 from '../../assets/img/me/tool-6.png';
import tool7 from '../../assets/img/me/tool-7.png';
import tool8 from '../../assets/img/me/tool-8.png';
import tool9 from '../../assets/img/me/tool-9.png';
import tool10 from '../../assets/img/me/tool-10.png';
import tool11 from '../../assets/img/me/tool-11.png';
import tool12 from '../../assets/img/me/tool-12.png';
import tool13 from '../../assets/img/me/tool-13.png';
import tool14 from '../../assets/img/me/tool-14.png';

import addhotspot from '../../assets/img/me/addhotspot.png';
import hotspotdesign from '../../assets/img/me/hotspotdesign.png';
import preview from '../../assets/img/me/preview.png';


const StudioTimeTools = () => {
    return (
        <div className="container-fluid Studioed-section2">
		<div className="tool">
			<div className="row">
				<div className="col-sm-7 paddin-rigth-0">					
					<ul className="small-view">
						<li><a href="#" title="Storyboard View"><img src={tool1} /></a></li>
						<li><a href="#" title="Timeline View" className="active"><img src={tool2} /></a></li>
						<li><a href="#" title="Customize Toolbar"><img src={tool3} /></a></li>
						<li><a href="#" title="Undo"><img src={tool4} /></a></li>
						<li><a href="#" title="Redo"><img src={tool5} /></a></li>
						<li><a href="#" title="Record/Capture Option"><img src={tool6} /></a></li>
						<li><a href="#" title="Sound Mixer"><img src={tool7} /></a></li>
						<li><a href="#" title="Track Motion"><img src={tool8} /></a></li>
						<li><a href="#" title="Subtitle Editor"><img src={tool9} /></a></li>
						<li><a href="#" title="Multi-Camera Editor"><img src={tool10} /></a></li>
						<li><a href="#" title="Time Remapping"><img src={tool11} /></a></li>
						<li><a href="#" title="Mask Creator"><img src={tool12} /></a></li>
						<li><a href="#" title="Pan and Zoom"><img src={tool13} /></a></li>
						<li><a href="#" title="Split Screen Template Creator"><img src={tool14} /></a></li>						
					</ul>
					<ul className="add-pop-show">
						<li><a title="Add Hotspots" onclick="displayHotspot()"><img src={addhotspot} className="icon" /></a></li>
						<li><a href="#" data-toggle="modal" data-target="#myModalHotspots"  title="Hotspots Designer"><img src={hotspotdesign} className="icon" /></a></li>
						<li><a href="#" data-toggle="modal" data-target="#myModal" title="Preview"><img src={preview} className="icon" /></a></li>
					</ul>
					
				</div>
			     <StudioTimeToolsRight />
			</div>
		</div>
        </div>
    )
}

export default StudioTimeTools
