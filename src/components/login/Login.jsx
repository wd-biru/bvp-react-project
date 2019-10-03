import React from "react";
import utility from "../../apiAction/axios/utility";
import { fetchUserData } from "../../apiAction/apiType/login/loginActions";
//import LogoImg from "../../assets/img/me/bvp-logo.png";
import LogoImg from "./bvp-logo.png";

import './Me_custom.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPwd: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userData !== this.props.userData && this.props.userData) {
      this.props.history.push("/");
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    const payLoad = {
      email: this.state.userEmail,
      password: this.state.userPwd
    };
    this.props.fetchUserData(payLoad);
  };

  render() {
    return (
      <body class="loginpage">
      <div id="login" className="text-center">
      <div id="login">
        <div class="container">
          <div
            id="login-row"
            class="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" action="" method="post">
                  <img src={LogoImg} className="login-logo" alt="BVP" />
                  <div className="form-group">
                    <input
                      type="text"
                      name="userEmail"
                      id="username"
                      className="form-control"
                      placeholder="Email"
                      value={this.state.userEmail}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="userPwd"
                      id="password"
                      className="form-control"
                      placeholder="password"
                      value={this.state.userPwd}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="remember-me" className="text-infoss">
                      <span>
                        <a href="#" className="text-infoss">
                          Help, I forgot my password
                        </a>
                      </span>
                    </label>
                    <br />
                    <input
                      type="button"
                      name="submit"
                      className="btn btn-info btn-md"
                      value="LOG IN"
                      onClick={() => this.handleClick()}
                    />{" "}
                    <i className="fa fa-long-arrow-right"></i>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </body>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userDataResponse.userData
});

export default utility.storeConnect(Login, mapStateToProps, {
  fetchUserData
});
