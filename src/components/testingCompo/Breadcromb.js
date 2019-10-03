import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import ImgCompo from './linkComponents/PageSection2';

import DashDocu from './linkComponents/DashboardSectionDocu';
import DashImages from './linkComponents/DashboardSectionImages';
import DashVideo from './linkComponents/DashboardSectionVideos';
import DashAllDocu from './linkComponents/DashboardSectionAllDoc';
import DashboardProject from './linkComponents/DashboardSectionProject';


function Breadcromb() {
  return (
    <Router>
      <div>
      <div className="breadcrumb-holder container-fluid">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link active" data-toggle="pill">
              Projects{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/video" className="nav-link" data-toggle="pill">
              Videos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/images" className="nav-link" data-toggle="pill">
              {" "}
              Images{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/documents" className="nav-link" data-toggle="pill">
              {" "}
              Documents{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/all" className="nav-link" data-toggle="pill">
              All{" "}
            </Link>
          </li>
        </ul>
        <div className="secund-menu-listview">
          <a href="">
            <i className="fa fa-sort"></i> Date Added
          </a>
          <a href="">
            <i className="fa fa-clock-o" aria-hidden="true"></i> All Time
          </a>
          <a href="">
            <i className="fa fa-bars"></i> List View
          </a>
        </div>
       
          {/*  <Route exact path="/all" component={DashProject} /> */}
      </div>
      <Route exact path="/Documents" component={DashDocu} />
       <Route exact path="/" component={DashboardProject} />
       <Route exact path="/video" component={DashVideo} />
       <Route exact path="/images" component={DashImages} />
       <Route exact path="/all" component={DashAllDocu} />

       
      </div>
    </Router>
  );
}
export default Breadcromb;
