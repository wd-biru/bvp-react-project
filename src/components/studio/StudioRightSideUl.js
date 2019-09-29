import React from 'react'

import StudioRightSideForm from './StudioRightSideForm';
import StudioRightSideFrame from './StudioRightSideFrame';

import Datails from './me/Details.png';
import Library from './me/Library.png';
import Hotspots from './me/Hotspots.png';
import TimeTriggers from './me/TimeTriggers.png';
import Subtitle from './me/Subtitle.png';
import Publish from './me/Publish.png';
import Metrics from './me/Metrics.png';

function StudioRightSideUl() {
    return (
            <div className="col-sm-5 Studioed-three">
				<ul className="nav nav-pills">
				  <li className="nav-item">
				    <a className="nav-link" data-toggle="pill" href="#menu1">
				    	<img src={Datails} /><br/> Details</a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link" data-toggle="pill" href="#menu6">
				    	<img src={Library} /><br/> Library</a>
				  </li>
				  <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#menu6">
				    <img src={Hotspots}/><br/> Hot spots</a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link" data-toggle="pill" href="#menu3">
				    <img src={TimeTriggers}/><br/> Time Triggers</a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link" data-toggle="pill" href="#menu4">
				    	<img src={Subtitle}/><br/> Subtitle</a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link" data-toggle="pill" href="#menu5">
				    	<img src={Publish}/><br/> Publish</a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link" data-toggle="pill" href="#menu7">
				    	<img src={Metrics} />
                            <br /> Metrics</a>
				  </li>
				</ul>
                <StudioRightSideForm />
				<StudioRightSideFrame />
            </div>
           
    )
}

export default StudioRightSideUl

