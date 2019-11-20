import React from "react";

import StudioVideoSectionRight from "./StudioVideoSectionRight";
import Video from "../../assets/img/me/video-test.mp4";

class StudioVideoSection extends React.Component {
  // handleCeateOverLay = () => {
  //   alert('hihihi');
  // }
  render() {
    return (
      <div class="container-fluid Studioed">
        <div class="row">
          <div class="col-sm-7 Studioed-seund">
            <video width="100%" controls>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
          {/* this is video part col-sm-05 section */}
          <StudioVideoSectionRight
            isActiveObject={this.props.isActiveObject}
            selectedMedia={this.props.selectedMedia}
            createFolderData={this.props.createFolderData}
            folderDetails={this.props.folderDetails}
            getUserFolderData={this.props.getUserFolderData}
            handlePlayerSetting={this.props.handlePlayerSetting}
            handleCeateOverLay={this.props.handleCeateOverLay}
            userFolderDetails={this.props.userFolderDetails}
            handleFolderchange={this.props.handleFolderchange}
            libraryFolderData={this.props.libraryFolderData}
          />
        </div>
      </div>
    );
  }
}

export default StudioVideoSection;
