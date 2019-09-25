import React from 'react';
import HeaderRight from './HeaderRight';
import logo from './studio-bvp-logo.png';

  function Header(){
    return(
       <header className="header">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-holder d-flex align-items-center justify-content-between">
              <div className="navbar-header left">
                  <div className="brand-text d-none d-lg-inline-block">
                    <a href="dashboard.html">
                      <img src={logo} alt="BVP" className="logo-menu logo2"  />
                    </a>
                    <form className="navbar-form navbar-left" action="">
                      <i className="fa fa-search"></i>
                    <input type="text" className="form-control navseacrh myBtnb" placeholder="Search For anything" name="search" />
                  </form>
                  </div>
                <a id="toggle-btn" href="#" className="menu-btn active">
                <span></span><span></span><span></span></a> 
              </div>
              <HeaderRight />
            </div>
          </div>
        </nav>
      </header>
      )
  }
  export default Header;