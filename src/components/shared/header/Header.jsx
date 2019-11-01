import React from "react";
//import HeaderRight from "./HeaderRight";
import logo from "./studio-bvp-logo.png";
import "./css/MystyleDefault.css";
import "./css/me_custom.css";
import "./css/me_responsive.css";

class Header extends React.Component {
  handleLogout = () => {
    localStorage.removeItem("userToken");
  };
  render() {
    return (
      <header className="header">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-holder d-flex align-items-center justify-content-between">
              {/* Navbar Header*/}
              <div className="navbar-header">
                {/* Navbar Brand */}
                <div className="brand-text d-none d-lg-inline-block">
                  <a href="dashboard.html">
                    <img src={logo} alt="BVP" className="logo-menu" />
                  </a>
                  <form
                    className="navbar-form navbar-left"
                    action="/action_page.php"
                  >
                    <i className="fa fa-search"></i>
                    <input
                      type="text"
                      className="form-control navseacrh"
                      placeholder="Search"
                      name="search"
                    />
                  </form>
                </div>

                {/* Toggle Button*/}
                <a id="toggle-btn" href="#" className="menu-btn active">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              {/* Navbar Menu */}
              <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                {/* Search*/}
                <li className="nav-item d-flex align-items-center">
                  <a href="#" className="nav-link">
                    <i className="fa fa-question"></i>
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <a href="#" className="nav-link">
                    <i className="fa fa-sort"></i>
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <a href="#" className="nav-link">
                    <i className="fa fa-bar-chart"></i>
                  </a>
                </li>
                {/* Notifications*/}
                <li className="nav-item dropdown">
                  {" "}
                  <a
                    id="notifications"
                    rel="nofollow"
                    data-target="#"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-link"
                  >
                    <i className="fa fa-bell"></i>
                  </a>
                </li>
                {/* Logout    */}
                <li className="nav-item" onClick={this.handleLogout}>
                  <a href="" className="nav-link logout">
                    {" "}
                    <i className="fa fa-user"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
