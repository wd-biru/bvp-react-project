import React from 'react';

import MainNavbarHeader from './MainNavbarHeader';
import LeftNavbar from './LeftNavbar';
import UploadBreadcrumb from './UploadBreadcrumb';
import UploadPageSection from './UploadPageSection';
import Footer from './Footer';


import './css/MystyleDefault.css';
import './css/me_custom.css';
import './css/me_responsive.css';



const UploadPage = () => {
    return (
        <body className="uploadpage">
	       <MainNavbarHeader />
          <div className="page-content d-flex align-items-stretch"> 
            <LeftNavbar />
                <div className="content-inner upload">
                    <UploadBreadcrumb />
                    <UploadPageSection />
                    <Footer />
                </div>
          </div>
       </body>
    )
}

export default UploadPage;
