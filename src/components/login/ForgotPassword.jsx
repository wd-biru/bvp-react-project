import React, { Component } from "react";
import LogoImg from "./bvp-logo.png";
import util from "../../apiAction/axios/utility";
import { createUserPwd } from "../../apiAction/apiType/login/loginActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPass: "",
      showToast: false
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
    const payload = {
      email: this.state.userEmail,
      resetLink: `${window.location.origin}/password`
    };
    const actionType = {
      action: "create"
    };
    this.props.createUserPwd(payload, actionType);
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
                    <form
                      id="login-form"
                      className="form"
                      action=""
                      method="post"
                    >
                      <h2 className="forgot-head">Forgot Password</h2>
                      <img src={LogoImg} className="login-logo" alt="BVP" />
                      <div className="form-group">
                        <input
                          type="text"
                          name="userEmail"
                          id="username"
                          className="form-control passformcont"
                          placeholder="Email"
                          value={this.state.userEmail}
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
                        />
                        <input
                          type="button"
                          name="submit"
                          className="btn btn-info btn-md passcancel"
                          value="Cancel"
                          onClick={this.props.cancelForgetPwd}
                        />
                      </div>
                    </form>
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

export default util.storeConnect(Password, mapStateToProps, {
  createUserPwd
});
