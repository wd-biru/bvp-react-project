import React from 'react'

function loginActions() {
    return (
      <div classNameName="login">
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" action="" method="post">
                                <img src="img/me/bvp-logo.png" className="login-logo" alt="BVP" />
                                <div className="form-group">
                                    <input type="text" name="username" id="username" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="password" id="password" className="form-control" placeholder="password" />
                                </div>
                                <div className="form-group">
                                    <label for="remember-me" className="text-infoss"><span><a href="#" className="text-infoss">Help, I forgot my password</a></span></label></br>
                                    <a href="dashboard.html"><input type="button" name="submit" className="btn btn-info btn-md" value="LOG IN" /> <i className="fa fa-long-arrow-right"></i></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default loginActions;
