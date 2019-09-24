import React, { Component } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Custom.css";
import "./assets/css/Me_custom.css";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import LeftNav from "./components/shared/nav/LeftNav";
import TopHeader from './components/shared/header/Header';
import TopPageHeader from './components/testingCompo/PageTopHeader';
import TopPage from './components/testingCompo/PageSection';
import Breadcromb from './components/testingCompo/Breadcromb';
//import LoginPage from './components/testingCompo/LoginPage';

class App extends Component {
  render() {
    return (
        <div className="App">
        {/* <h1 className="text-center" ><strong>This is Login Page</strong></h1>
        <LoginPage /> */}
                 
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
