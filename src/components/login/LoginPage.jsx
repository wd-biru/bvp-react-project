import React, { Component } from "react";
import logo from "./bvp-logo.png";

import './Me_custom.css';

class LoginPage extends Component {
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
              <div id="login-column" class="col-md-6">
                <div id="login-box" class="col-md-12">
                      <form
                        id="login-form"
                        className="form"
                        action=""
                        method="post"
                      >
                        <img src={logo} class="login-logo" alt="BVP" />
                        <div class="form-group">
                          <input
                            type="text"
                            name="username"
                            id="username"
                            class="form-control"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            name="password"
                            id="password"
                            class="form-control"
                            placeholder="password"
                          />
                        </div>
                        <div class="form-group">
                          <label for="remember-me" class="text-infoss">
                            <span>
                              <a href="#" class="text-infoss">
                                Help, I forgot my password
                              </a>
                            </span>
                          </label>
                          <br />
                          <a href="dashboard.html">
                            <input
                              type="button"
                              name="submit"
                              class="btn btn-info btn-md"
                              value="LOG IN"
                            />
                            <i class="fa fa-long-arrow-right"></i>
                          </a>
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

export default LoginPage;
