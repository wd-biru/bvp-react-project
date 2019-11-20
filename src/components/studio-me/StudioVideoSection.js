import React from "react";

import StudioVideoSectionRight from "./StudioVideoSectionRight";
import ReactPlayer from "react-player";
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
            {this.props.selectedMedia &&
            this.props.selectedMedia.video === undefined ? (
              <div className="drop-video">Drag Your Video Here</div>
            ) : (
              <ReactPlayer url={Video} playing={false} controls />
            )}
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
