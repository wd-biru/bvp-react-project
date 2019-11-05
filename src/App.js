import React, { Component } from "react";

import util from "./apiAction/axios/utility";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Custom.css";
import "./assets/css/Me_responsive.css";

import Login from "./components/login/Login";
import TopHeader from "./components/shared/header/Header";
import LeftNav from "./components/shared/nav/LeftNav";
import Footer from "./components/shared/footer/Footer";
//import Studio from './components/studio-me/Studio';

class App extends Component {
  render() {
    const userToken = localStorage.getItem("userToken");
    console.log(this.props.history);
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
