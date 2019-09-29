import React from 'react';
import { BrowserRouter as Router ,Link } from 'react-router-dom';

  function Breadcromb(){
      return(       
           <div>
            <ul className="nav nav-pills">
              <Router>
              <li className="nav-item">
                <Link className="nav-link active" data-toggle="pill" to="/home">Projects </Link>
              </li>
              </Router>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu1">Everything</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu2">Videos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu3">Images</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu4">Documents</a>
              </li>
              
            </ul>
            <div className="secund-menu-listview">
              <a href=""><i className="fa fa-sort"></i> Date Added</a>
              <a href=""><i className="fa fa-clock-o" aria-hidden="true"></i> All Time</a>
              <a href=""><i className="fa fa-bars"></i> List View</a>
            </div>
          </div>
          );
        }
  export default Breadcromb;