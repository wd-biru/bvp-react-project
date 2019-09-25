import React, { Component } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Custom.css";
import "./assets/css/Me_custom.css";
//import "./assets/css/MystyleDefault.css";

//********** DashBoard Import File  *************/
// import Header from "./components/shared/header/Header";
 //import Footer from "./components/shared/footer/Footer";
 //import LeftNav from "./components/shared/nav/LeftNav";
//import TopHeader from './components/shared/header/Header';
// import TopPageHeader from './components/testingCompo/PageTopHeader';
//import TopPage from './components/testingCompo/PageSection';
//import Breadcromb from './components/testingCompo/Breadcromb';

//********** Login Import File  *************/
//import LoginPage from './components/testingCompo/LoginPage';

//********** Update Page Import File  *************/
// import Uploadheader from './components/shared/UploadComman/Header';
// import UploadLeftNav from "./components/shared/UploadComman/LeftNav";
// import UploadTopPage from './components/shared/UploadComman/UploadTopPage';
// import UploadSection from './components/shared/UploadComman/UploadSection';
// import UploadFooter from './components/shared/UploadComman/Footer'

class App extends Component {
  render() {
    return (
        <div className="App">
          <h2>THis is app dots js</h2>
           
           
           
           
           
           {/* 
           ************  Upload Page  ***************
           
           <div class="dashboardsty">
             <div className="page">
             <Uploadheader />
              <div className="page-content d-flex align-items-stretch">
                <UploadLeftNav />
                 <div className="content-inner">
            
                 <UploadTopPage />
                 <UploadSection />
                 <UploadFooter />
                </div>
               </div>
              </div>
            </div> 
            **************  Closing Upload Page *************
            */}


            

        {/*
        *************** LogIn Page ****************
        <h1 className="text-center" ><strong>This is Login Page</strong></h1>
        <LoginPage /> 
        ******************* Close Log In page ***********
        */}


                 
         {/* 
         *************  DashBoard Page   ***************
         
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
       ********************Close DashbBoard Page ***************
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
