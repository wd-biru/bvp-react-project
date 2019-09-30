import React, { Component } from "react";
import logo from "./bvp-logo.png";

class LoginPage extends Component {
  render() {
    return (
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
                    <img src="" class="login-logo" alt="BVP" />
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
    </div>
</div>
        );
    }
=======
      </div>
    );
  }
>>>>>>> 99cc524bb21b3f21c242033378fe7a6161e4802b
}

export default LoginPage;
