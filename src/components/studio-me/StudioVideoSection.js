import React from "react";
import Dropzone from "react-dropzone";
import StudioVideoSectionRight from "./StudioVideoSectionRight";
import ReactPlayer from "react-player";
import Video from "../../assets/img/me/video-test.mp4";

class StudioVideoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragFiles: localStorage.getItem("dragFile")
        ? JSON.parse(localStorage.getItem("dragFile"))
        : null
    };
  }
  handleDrag = (event, dragFile) => {
    let draggedData = {
      selectedMedia: this.props.selectedMedia.id,
      draggedFile: dragFile
    };
    const storedData = localStorage.setItem("dragFile", [
      JSON.stringify(draggedData)
    ]);
    this.setState({
      dragFiles: draggedData
    });
  };
  handleFilePath = () => {
    const draggedPath = JSON.parse(localStorage.getItem("dragFile"));
    let filePath = null;
    if (
      draggedPath !== null &&
      this.props.selectedMedia.id === draggedPath.selectedMedia
    ) {
      filePath = draggedPath.draggedFile.file;
    }

    return filePath;
  };
  render() {
    const mediaUrl = this.handleFilePath();
    const filePath =
      this.state.dragFiles &&
      `https://apiv2.bossvideoplayer.com/public/user/${mediaUrl}`;

    return (
      <div class="container-fluid Studioed">
        <div class="row">
          <div class="col-sm-7 Studioed-seund">
            {this.state.dragFiles && mediaUrl !== null ? (
              <ReactPlayer url={filePath} playing={false} controls />
            ) : (
              <div className="drop-video">
                Please drag a video from the library into the timeline.
              </div>
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
            handleDrag={this.handleDrag}
          />
        </div>
      </div>
    );
  }
}

export default StudioVideoSection;
