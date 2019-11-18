import React from "react";

import StudioHeader from "./StudioHeader";
import StudioPreviewModel from "./StudioPreviewModel";
import StudioVideoSection from "./StudioVideoSection";
import StudioPlayButton from "./StudioPlayListButton";
import StudioToolsCompo from "./StudioToolsCompo";
import StudioToolsTime from "./StudioToolsTime";
import StudioPageFooterSection from "./StudioPageFooterSection";
import util from "../../apiAction/axios/utility";

import "./css/me_studio.css";
//import "./css/me_responsive.css";

class Studio extends React.Component {
  render() {
    return (
      <div>
        <body className="studio_page">
          <StudioHeader
            handleBackBtn={this.props.handleBackBtn}
            history={this.props.history}
          />
          <StudioPreviewModel />
          <StudioVideoSection
            isActiveObject={this.props.isActiveObject}
            selectedMedia={this.props.selectedMedia}
            folderDetails={this.props.folderDetails}
            createFolderData={this.props.createFolderData}
            getUserFolderData={this.props.getUserFolderData}
          />
          <StudioPlayButton />

          <div className="container-fluid Studioed-section2">
            <StudioToolsCompo />
            <StudioToolsTime />
            <StudioPageFooterSection />
          </div>
        </body>
      </div>
    );
  }
}

export default util.storeConnect(Studio);
