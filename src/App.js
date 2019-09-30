import React, { Component } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
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


class App extends Component {
  render() {
    return (
      
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
    );
  }
}

export default App;


{/*
  <section>
<Header />
 <div>
   <LeftNav />
   <div>{this.props.children}</div>
 </div>
 <Footer />
</section>
*/}
