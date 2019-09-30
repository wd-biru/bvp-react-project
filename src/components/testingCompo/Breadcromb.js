import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';

  function Breadcromb(){
      return(       
        <Router>
           <div>
            <ul className="nav nav-pills">
              
              <li className="nav-item">
                <Link to="/" className="nav-link active" data-toggle="pill">Projects </Link>
              </li>
              
              <li className="nav-item">
              <Link to="/all" className="nav-link" data-toggle="pill">Everything </Link>
              </li>
              <li className="nav-item">
              <Link to="/video" className="nav-link" data-toggle="pill" >Videos</Link>
              </li>
              <li className="nav-item">
              <Link to="/images" className="nav-link" data-toggle="pill" > Images </Link>
              </li>
              <li className="nav-item">
              <Link to="/documents" className="nav-link" data-toggle="pill" > Documents </Link>
              </li>
              
            </ul>
            <div className="secund-menu-listview">
              <a href=""><i className="fa fa-sort"></i> Date Added</a>
              <a href=""><i className="fa fa-clock-o" aria-hidden="true"></i> All Time</a>
              <a href=""><i className="fa fa-bars"></i> List View</a>
            </div>
            <Route exact path="/" component={Home} />
            <Route exact path="/all" component={Home2} />
            
            
          </div>
          
          </Router>
          );
        }
  export default Breadcromb;