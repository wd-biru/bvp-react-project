import React, { Component } from "react";

import util from "./apiAction/axios/utility";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Custom.css";
import "./assets/css/Me_responsive.css";

import Login from "./components/login/Login";
import ResetPassword from "./components/login/ResetPassword";
import TopHeader from "./components/shared/header/Header";
//import PlayerSetting from './components/studio-me/playerSetting/PlayerSetting';

class App extends Component {
  componentDidMount() {
    // localStorage.removeItem("selectedMedia");
  }
  render() {
    const userToken = localStorage.getItem("userToken");
    return (
      <>
        {userToken ? (
          <div className="App">
            <body className="dashboardsty">
              <div className="page">
                {this.props.history &&
                this.props.history.location.pathname !== "/password" ? (
                  <TopHeader />
                ) : null}
                {this.props.children}
              </div>
            </body>
          </div>
        ) : null}
        {!userToken &&
        this.props.history &&
        this.props.history.location.pathname === "/" ? (
          <Login />
        ) : null}
        {this.props.history &&
          this.props.history.location.pathname === "/password" && (
            <ResetPassword />
          )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userDataResponse.userData
});

export default util.storeConnect(App, mapStateToProps);
