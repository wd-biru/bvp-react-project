import React,{Component} from "react";
import LogoImg from "./bvp-logo.png";
class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "", userPass: "",checkUser: false
    }; 
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    alert('hi');
    // const payLoad = {
    //   email: this.state.userEmail
    // };
    // this.props.fetchUserData(payLoad);
  };
  forgot_pass2 = () => {
    document.getElementById("loginid2").style.display = "none";
    document.getElementById("loginid").style.display = "block";
    }
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
                        {this.state.checkUser == false ?
                          <input
                            type="text"
                            name="userEmail"
                            id="username"
                            className="form-control passformcont"
                            placeholder="Email"
                            value={this.state.userEmail}
                            onChange={this.handleInputChange}
                          /> 
                          :
                          <input
                            type="password"
                            name="userPass"
                            id="username"
                            className="form-control passformcont"
                            placeholder="Password"
                            value={this.state.userPass}
                            onChange={this.handleInputChange}
                          />
                        }
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
                          onClick={this.forgot_pass2}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Password;