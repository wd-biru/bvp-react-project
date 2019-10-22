import React from "react";

import MainNavbarHeader from "./MainNavbarHeader";
import UploadBreadcrumb from "./UploadBreadcrumb";
import UploadPageSection from "./UploadPageSection";
import Footer from "./Footer";

import "./css/MystyleDefault.css";
import "./css/me_custom.css";
import "./css/me_responsive.css";

class UploadPage extends React.Component {
  render() {
    return (
      <body className="uploadpage">
        <MainNavbarHeader />
        <div className="page-content d-flex align-items-stretch">
          <div className="content-inner upload">
            <UploadBreadcrumb
              handleUploadClose={this.props.handleUploadClose}
            />
            <UploadPageSection
              getUploadFolderData={this.props.getUploadFolderData}
              activeProject={this.props.activeProject}
              uploadFolderData={this.props.uploadFolderData}
              handleUploadClose={this.props.handleUploadClose}
            />
            <Footer />
          </div>
        </div>
      </body>
    );
  }
}

export default UploadPage;
