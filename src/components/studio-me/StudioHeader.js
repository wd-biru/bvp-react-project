import React from "react";

import logo from "./img/studio-bvp-logo.png";
import ques from "./img/questions-circular.png";
import alarm from "./img/alarm.png";
import user from "./img/user.png";

class StudioHeader extends React.Component {
  
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
          <span className="navbar-brand">
            <img src={logo} alt="BVP" className="studio logo-menu2" onClick={this.handleGoHome} />
          </span>
          <button
            class="btn btn-primary BackBtn"
            onClick={this.props.handleBackBtn}
          >
            <i class="fa fa-angle-double-left"></i>
            Back
          </button>
          <div className="">
            <ul className="navbar-nav my-2 my-lg-0">
              <li className="nav-item d-flex align-items-center">
                <span href="#" className="nav-link2">
                  <img src={ques} />
                </span>
              </li>

              <li className="nav-item dropdown">
                <span
                  id="notifications"
                  rel="nofollow"
                  data-target="#"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link2"
                >
                  <img src={alarm} />
                </span>
              </li>

              <li className="nav-item">
                <span href="login.html" className="nav-link2" onClick={this.handleLogout} >
                  <img src={user}  />
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default StudioHeader;
