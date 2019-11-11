import React from 'react';

import detail from './img/Details.png';
import library from './img/Library.png';
import hotspots from './img/Hotspots.png';
import timetrigger from './img/TimeTriggers.png';
import subtitles from './img/Subtitle.png';
import publish from './img/Publish.png';
import metrics from './img/Metrics.png';

import Studiolinkdetails from './linkComponents/StudioLinkDetails';
import Studiolinklibary from './linkComponents/StudioLinkLibary';
import Studiolinkhotsports from './linkComponents/StudioLinkHotSports';
import StudioLinkTimeTrigger from './linkComponents/StudioLinkTimeTrigger';
import StudioLinkSubtiles from './linkComponents/StudioLinkSubtiles';
import StudioLinkPublish from './linkComponents/StudioLinkPublish';
import StudioLinkMetrics from './linkComponents/StudioLinkMetrics';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const StudioVideoSectionRight = () => {
    return (
		<Router>
        <div class="col-sm-5 Studioed-three">
				<ul class="nav nav-pills">
				  <li class="nav-item">
				  <Link to="/studio" class="nav-link2 " data-toggle="pill" href="#menu1">
				    	<img src={detail} /><br /> Details</Link>
				  </li>
				  <li class="nav-item active">
				  <Link to="/library" class="nav-link2" data-toggle="pill" href="#menu6">
				    	<img src={library} /><br /> Library</Link>
				  </li>
				  <li class="nav-item active ">
				  <Link to="/hotspots" class="nav-link2 " data-toggle="pill" href="#menu2">
				    <img src={hotspots} /><br /> Hot spots</Link>
				  </li>
				  <li class="nav-item active">
				  <Link to="/timetrigger" class="nav-link2" data-toggle="pill" href="#menu3">
				    <img src={timetrigger} /><br /> Time Triggers</Link>
				  </li>
				  <li class="nav-item active">
				  <Link to="/subtitle" class="nav-link2" data-toggle="pill" href="#menu4">
				    	<img src={subtitles} /><br /> Subtitle</Link>
				  </li>
				  <li class="nav-item active">
				  <Link to="/publish" class="nav-link2" data-toggle="pill" href="#menu5">
				    	<img src={publish} /><br /> Publish</Link>
				  </li>
				  <li class="nav-item active">
				  <Link to="/metrics" class="nav-link2" data-toggle="pill" href="#menu7">
				    	<img src={metrics} /><br /> Metrics </Link>
				  </li>
				</ul>
                <div class="tab-content1">
				     <Route exact path="/studio" component={Studiolinkdetails} />
					 <Route exact path="/library" component={Studiolinklibary} />
					 <Route exact path="/hotspots" component={Studiolinkhotsports} />
					 <Route exact path="/timetrigger" component={StudioLinkTimeTrigger} />
					 <Route exact path="/subtitle" component={StudioLinkSubtiles} />
					 <Route exact path="/publish" component={StudioLinkPublish} />
					 <Route exact path="/metrics" component={StudioLinkMetrics} />					 
                </div>
        </div>
		</Router>
    )
}

export default StudioVideoSectionRight;
