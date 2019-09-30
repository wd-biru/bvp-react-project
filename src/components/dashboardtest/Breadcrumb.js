import React from 'react';

import DashSection from './DashboardSection';
import DashboardSectionAllDoc from './DashboardSectionAllDoc';
import DashboardSectionDoc from './DashboardSectionDocu';
import DashboardSectionVideo from './DashboardSectionVideos';
import DashboardSectionImg from './DashboardSectionImages';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Breadcrumb = () => {
    return (
        <Router>
            <div>
        <div className="breadcrumb-holder container-fluid">
           
            <ul className="nav nav-pills">
              <li className="nav-item">
              <Link to="/" className="nav-link active" data-toggle="pill" > Projects </Link>
              </li>              
              <li className="nav-item">
              <Link to="/video" className="nav-link" data-toggle="pill"  > Videos </Link>
              </li>
              <li className="nav-item">
              <Link to="/images" className="nav-link" data-toggle="pill" > Images</Link>
              </li>
              <li className="nav-item">
               <Link to="/document" className="nav-link" data-toggle="pill" > Documents</Link>
              </li>
              <li className="nav-item">
               <Link to="/all" className="nav-link" data-toggle="pill" > All </Link>
              </li>
            </ul>
            <div className="secund-menu-listview">
              <a href=""><i className="fa fa-sort"></i> Date Added</a>
              <a href=""><i className="fa fa-clock-o" aria-hidden="true"></i> All Time</a>
              <a href=""><i className="fa fa-bars"></i> List View</a>
            </div>
      </div>
      <Route exact path="/" component={DashSection} />
            <Route exact path="/video" component={DashboardSectionVideo} />
            <Route exact path="/images" component={DashboardSectionImg} />
            <Route exact path="/document" component={DashboardSectionDoc} />
            <Route exact path="/all" component={DashboardSectionAllDoc} />
            </div>
      </Router>
    );
}

export default Breadcrumb;
