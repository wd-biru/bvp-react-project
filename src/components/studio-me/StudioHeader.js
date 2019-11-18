import React from "react";

import logo from "./img/studio-bvp-logo.png";
import ques from "./img/questions-circular.png";
import alarm from "./img/alarm.png";
import user from "./img/user.png";

class StudioHeader extends React.Component {
  handleGoHome = () => {
    alert('Hello');
    return this.props.history.push("/");
  };
  
  goBackBtn = () => {
    window.history.go('/');
  }
  
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
          <span className="navbar-brand" href="" onClick={this.handleGoHome}>
            <img src={logo} alt="BVP" className="studio logo-menu2" />{" "}
          </span>
               <button class="btn btn-primary BackBtn"
                onClick={this.goBackBtn}
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
                {" "}
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
                  <img src={alarm} />{" "}
                </span>
              </li>

              <li className="nav-item">
                <span href="login.html" className="nav-link2 logout">
                  {" "}
                  <img src={user} />
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
