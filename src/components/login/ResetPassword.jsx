import React, { Component } from "react";
import LogoImg from "./bvp-logo.png";
import util from "../../apiAction/axios/utility";
import { createUserPwd } from "../../apiAction/apiType/login/loginActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnfNewPwd: "",
      userPwd: "",
      showToast: false,
      showGoLoginMsg: false
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.createPwd !== this.props.createPwd && this.props.createPwd) {
      toast.success(this.props.createPwd.message);
      this.setState({
        showToast: true
      });
    }
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    const params = new URL(document.location).searchParams;
    const payload = {
      password: this.state.userPwd,
      password_confirmation: this.state.cnfNewPwd,
      token: params.get("token"),
      email: params.get("email")
    };
    const actionType = {
      action: "reset"
    };
    this.props.createUserPwd(payload, actionType);
  };

  goToLogin = () => {
    return this.props.history.push("/");
  };

  render() {
    return (
      <div className="loginpage" id="loginid2">
        <div id="login" className="text-center">
          <div id="login">
            <div className="container">
              <div
                id="login-row"
                className="row justify-content-center align-items-center"
              >
                <div id="login-column" className="col-md-6">
                  <div id="login-box" className="col-md-12 pass">
                    {this.state.showGoLoginMsg ? (
                      <form
                        id="login-form"
                        className="form"
                        action=""
                        method="post"
                      >
                        <h2 className="forgot-head">Reset Password</h2>
                        <img src={LogoImg} className="login-logo" alt="BVP" />
                        <div className="form-group">
                          <input
                            type="password"
                            name="userPwd"
                            id="username"
                            className="form-control passformcont"
                            placeholder="New Password"
                            value={this.state.userPwd}
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="cnfNewPwd"
                            id="userCnfPwd"
                            className="form-control passformcont"
                            placeholder="Confirm New Password"
                            value={this.state.cnfNewPwd}
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div className="form-group password_div">
                          <input
                            type="button"
                            name="submit"
                            className="btn btn-info btn-md"
                            value="Submit"
                            onClick={() => this.handleClick()}
                            disabled={
                              this.state.userPwd === this.state.cnfNewPwd
                                ? false
                                : true
                            }
                          />
                        </div>
                      </form>
                    ) : (
                      <div className="goLoginMsg">
                        <p>
                          Your password has been updated sucessfully. Click on
                          Login Button to continue.
                        </p>
                        <input
                          type="button"
                          name="submit"
                          className="btn btn-info btn-md"
                          value="Login"
                          onClick={() => this.goToLogin()}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.showToast && <ToastContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  createPwd: state.userDataResponse.createPwd
});

export default util.storeConnect(ResetPassword, mapStateToProps, {
  createUserPwd
});
