import React, { Component } from "react";
import util from "./apiAction/axios/utility";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Custom.css";
import "./assets/css/Me_responsive.css";
import Login from "./components/login/Login";

import Header from "./components/shared/header/Header";

class App extends Component {


  logout= ()=> { 
    localStorage.removeItem("userToken");
    }


  render() {
    const userToken = localStorage.getItem("userToken");
    return (
      <>
        {userToken ? (
          <div className="App">
            <body className="dashboardsty">
              <div className="page">
              <Header Clickhandle={this.logout} />
                {this.props.children}
              </div>
            </body>
          </div>
        ) : (
          <Login />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userDataResponse.userData
});
export default util.storeConnect(App, mapStateToProps);

