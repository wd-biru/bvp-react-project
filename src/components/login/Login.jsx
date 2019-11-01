import React from "react";
import utility from "../../apiAction/axios/utility";
import { fetchUserData } from "../../apiAction/apiType/login/loginActions";
import LogoImg from "./bvp-logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ForgotPass from './ForgotPassword';

import "./Me_custom.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPwd: "",
      loginBtnDisable: false,
      showErrorMsg: false
    };
  }

  componentDidUpdate(prevProps) {
    const errMsg =
      this.props.loginError &&
      `${this.props.loginError.status} ${this.props.loginError.statusText}`;
    if (prevProps.userData !== this.props.userData && this.props.userData) {
      this.props.history.push("/");
    } else if (
      prevProps.loginError !== this.props.loginError &&
      this.props.loginError
    ) {
      this.setState({
        loginBtnDisable: false,
        showErrorMsg: true
      });
      toast.error(errMsg);
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
    this.setState({
      loginBtnDisable: true
    });
    this.props.fetchUserData(payLoad);
  };

  handleBtnDisable = () => {
    let btnDisable = false;
    if (this.state.userEmail === "" && this.state.userPwd === "") {
      btnDisable = true;
    }
    return btnDisable;
  };

  forgot_pass = () => {
  document.getElementById("loginid").style.display = "none";
  document.getElementById("loginid2").style.display = "block";
  }

  render() {
    return (
      <Router>
      <div className="loginpage" id="loginid">
        <div id="login" className="text-center">
          <div id="login">
            <div className="container">
           
              <div
                id="login-row"
                className="row justify-content-center align-items-center"
              >
               
                <div id="login-column" className="col-md-6">
                  <div id="login-box" className="col-md-12">
                    <form
                      id="login-form"
                      className="form"
                      action=""
                      method="post"
                    >
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
                          type="password"
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
                          <Link to="" href="#" className="text-infoss" onClick={this.forgot_pass}>
                              Help, I forgot my password
                            </Link>
                          </span>                          
                        </label>
                        
                        <br />
                        <input
                          type="button"
                          name="submit"
                          className="btn btn-info btn-md"
                          disabled={
                            this.handleBtnDisable() ||
                            this.state.loginBtnDisable
                          }
                          value="LOG IN"
                          onClick={() => this.handleClick()}
                        />
                        <i className="fa fa-long-arrow-right"></i>
                        {this.state.loginBtnDisable && (
                          <label htmlFor="remember-me" className="text-infoss">
                            <span>Please Wait...</span>
                          </label>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
             
             
            </div>
          </div>
        </div>
        {this.state.showErrorMsg && <ToastContainer />}
      </div>
      <Route exact path="" component={ForgotPass} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userDataResponse.userData,
  loginError: state.userDataResponse.error
});

export default utility.storeConnect(Login, mapStateToProps, {
  fetchUserData
});
