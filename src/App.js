import React, { Component } from "react";

import coreUtil from "./core/coreUtility";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Custom.css";
import "./assets/css/Me_custom.css";
import Login from "./components/login/Login";
//import "./assets/css/MystyleDefault.css";

import TopHeader from "./components/shared/header/Header";
import TopPageHeader from "./components/testingCompo/PageTopHeader";
import TopPage from "./components/testingCompo/PageSection";
import Breadcromb from "./components/testingCompo/Breadcromb";
//import LoginPage from './components/testingCompo/LoginPage';

class App extends Component {
  render() {
    const userToken = localStorage.getItem("userToken");
    return (
      <>
        {userToken ? (
          <div className="App">
            <div class="dashboardsty">
              <div className="page">
                <TopHeader />
                <div className="page-content d-flex align-items-stretch">
                  {/* <LeftNav /> */}
                  <div className="content-inner">
                    <TopPageHeader />
                    <div className="breadcrumb-holder container-fluid">
                      <Breadcromb />
                      <TopPage />

                      {/* <Footer /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Login />
        )}
      </>
    );
  }
}
export default coreUtil.connectToStore(App);
