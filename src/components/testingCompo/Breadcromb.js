import React from 'react';

  function Breadcromb(){
      return(       
           <div>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="pill" href="#home">Projects</a>
              </li>
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