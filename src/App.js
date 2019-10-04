import React, { Component } from "react";

import util from "./apiAction/axios/utility";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Custom.css";
import "./assets/css/Me_responsive.css";

import Login from "./components/login/Login";

import TopHeader from "./components/shared/header/Header";
import TopPageHeader from "./components/testingCompo/PageTopHeader";
import Breadcromb from "./components/testingCompo/Breadcromb";
import LeftNav from "./components/shared/nav/LeftNav";
import Footer from "./components/shared/footer/Footer";
//import Studio from './components/studio-me/Studio';

class App extends Component {
   render() {
    const userToken = localStorage.getItem("userToken");
    return (
      <>
        {userToken ? (
          <div className="App">
            <body class="dashboardsty">
              <div className="page">
                <TopHeader />
                <div className="page-content d-flex align-items-stretch">
                  <LeftNav />
                  <div className="content-inner">
                    <TopPageHeader />
                    <Breadcromb />
                    <Footer />
                  </div>
                </div>
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
export default util.storeConnect(App);
