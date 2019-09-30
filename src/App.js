import React, { Component } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import "./assets/css/custom.css";
//import "./assets/css/fontastic.css";
import "./assets/css/Me_responsive.css";



//********** DashBoard Import File  *************/
import DashBoard from './components/dashboardtest/DashboardTest';

//********** ErrorPage Import File  *************/
//import Errorpage from './components/error/ErrorPage';



//********** Login Import File  *************/
//import LoginPage from './components/login/LoginPage';

//********** Update Page Import File  *************/
//import Uploads from './components/upload/UploadPage';
=======
import "./assets/css/Custom.css";
import "./assets/css/Me_custom.css";
import Login from "./components/login/Login";
//import "./assets/css/MystyleDefault.css";

import { BroserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
>>>>>>> 99cc524bb21b3f21c242033378fe7a6161e4802b

import TopHeader from "./components/shared/header/Header";
import TopPageHeader from "./components/testingCompo/PageTopHeader";
import TopPage from "./components/testingCompo/PageSection";
import Breadcromb from "./components/testingCompo/Breadcromb";
//import LoginPage from './components/testingCompo/LoginPage';

class App extends Component {
  render() {
    const userToken = localStorage.getItem("userToken");
    return (
<<<<<<< HEAD
      
        <div className="App">
             {/* *************** LogIn Page ***************** 
                <LoginPage /> 
            ******************* Close Log In page *********** */}
         {/* 
         *************  DashBoard Page   *************** */}
          <DashBoard />
       {/* ********************Close DashbBoard Page ***************
       */}
       {/* 
           ************  Upload Page  ***************
           <Uploads />
          <Errorpage />
       */}
      </div>
=======
      <>
        {userToken ? (
          <div className="App">
            <div class="dashboardsty">
              <div className="page">
                <TopHeader />
                <div className="page-content d-flex align-items-stretch">
                  <LeftNav />
                  <div className="content-inner">
                    <TopPageHeader />
                    <div className="breadcrumb-holder container-fluid">
                      <Breadcromb />
                      <TopPage />

                      <Footer />
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
>>>>>>> 99cc524bb21b3f21c242033378fe7a6161e4802b
    );
  }
}
export default App;
