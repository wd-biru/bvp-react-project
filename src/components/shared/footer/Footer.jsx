import React from 'react';
import './css/MystyleDefault.css';
import './css/me_custom.css';
import './css/me_responsive.css';


const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <p>BVP &copy; 2019</p>
                </div>
                <div className="col-sm-6 text-right">
                  <p>Design by <a href="#" className="external">BVP</a></p>
                </div>
              </div>
            </div>
          </footer>
    )
}

export default Footer;
