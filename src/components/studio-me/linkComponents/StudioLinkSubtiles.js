import React from 'react';
import StudioLinkSubtilesCard from './StudioLinkSubtilesCard';

const StudioLinkSubtiles = () => {
    return (
            <div className="tab-pane container fade active" id="menu41"> 
				  		<div className="Subtitle-sec">
				  			<div className="a">
				  				<select className="form-control" id="sel1">
									   	<option>English</option>
									    <option>Pause Point</option>
									    <option>Custom</option>
									    <option>Open Overlay</option>
								</select>
								<a className="createnew">UPLOAD</a>
				  			</div>
				  			<div className="b">
				  				<span><a href="#">Subtitle</a></span>
				  				<span><a href="#">In Point</a></span>
				  				<span><a href="#">Out Point</a></span>
				  				<span><a href="#">Subtitle Text</a></span>
				  				<span><a href="#">Edit</a></span>
				  			</div>
				  			<div className="table-responsive two c">
				  				<div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									<StudioLinkSubtilesCard />
									
								
				  			</div>
				  		</div>
				  	</div>
			</div>
    )
}

export default StudioLinkSubtiles;
