import React from 'react';

import Model from './Model';
import ModelPop from './ModelPopup';
import MainNavbarHeader from './MainNavbarHeader';
import LeftNavbar from './LeftNavbar';
import PageHeader from './DashPageHeader';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';


import './css/MystyleDefault.css';
import './css/me_custom.css';
//import './css/me_responsive.css';



const DashboardTest = () => {
    return (
        <div>
            <Model />
            <ModelPop />
            <body className="dashboardsty">
              <div className="page">
                 <MainNavbarHeader />
                 <div className="page-content d-flex align-items-stretch"> 
                  <LeftNavbar />
                  <div className="content-inner">
                  <PageHeader />
                  <Breadcrumb />
                  <Footer />
                </div>
               </div>
              </div>
           </body>
        </div>
    )
}

export default DashboardTest;
