import React from "react";

import Modal from "../../components/shared/modal/Modal";
import StudioHeader from "./StudioHeader";
import StudioPreviewModel from "./StudioPreviewModel";
import StudioVideoSection from "./StudioVideoSection";
import StudioPlayButton from "./StudioPlayListButton";
import StudioToolsCompo from "./StudioToolsCompo";
import StudioToolsTime from "./StudioToolsTime";
import StudioPageFooterSection from "./StudioPageFooterSection";
import util from "../../apiAction/axios/utility";

import PlayerSetting from "./playerSetting/PlayerSetting";
import CreateOverLay from "./createoverlay/CreateOverLay";

import "./css/me_studio.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    paddingtop: "0px",
    padding: "0px"
  }
};

class Studio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlayerSetting: false,
      showOverLay: false
    };
  }

  handlePlayerSetting = () => {
    this.setState({
      showPlayerSetting: true
    });
  };

  cancelPlayerSetting = () => {
    this.setState({
      showPlayerSetting: false,
      showOverLay: false
    });
  };
  handleCeateOverLay = () => {
    this.setState({
      showPlayerSetting: true,
      showOverLay: true
    });
  };

  renderPreview = () => {
    // const fileType =
    //   this.state.selectedMedia && this.state.selectedMedia.type !== "youtube"
    //     ? this.state.selectedMedia.url.split(".").pop()
    //     : "mp4";
    const filePath =
      this.props.selectedMedia &&
      `https://apiv2.bossvideoplayer.com/public/user/${this.props.selectedMedia.url}`;
    return (
      <Modal
        modalIsOpen={this.props.showStudioPreview}
        closeModal={this.props.closeMediaModal}
        customStyles={customStyles}
        contentLabel={"Preview"}
        pauseOnFocusLoss={false}
      >
        <div className="modal-header text-center preview">
          <h4 className="modal-title">Preview</h4>
          <button
            type="button"
            className="close"
            onClick={this.props.closeMediaModal}
            data-dismiss="modal"
          >
            &times;
          </button>
        </div>
        <video width="100%" controls>
          <source src={filePath} type="video/mp4" />
        </video>
      </Modal>
    );
  };

  render() {
    return (
      <>
        {!this.state.showPlayerSetting ? (
          <body className="studio_page">
            <StudioHeader
              handleBackBtn={this.props.handleBackBtn}
              history={this.props.history}
              showStudioAlert={this.props.showStudioAlert}
              closeStudioModal={this.props.closeStudioModal}
              openStudio={this.props.openStudio}
            />

            <StudioPreviewModel />
            <StudioVideoSection
              isActiveObject={this.props.isActiveObject}
              selectedMedia={this.props.selectedMedia}
              folderDetails={this.props.folderDetails}
              createFolderData={this.props.createFolderData}
              getUserFolderData={this.props.getUserFolderData}
              handlePlayerSetting={this.handlePlayerSetting}
              handleCeateOverLay={this.handleCeateOverLay}
              userFolderDetails={this.props.userFolderDetails}
              handleFolderchange={this.props.handleFolderchange}
              libraryFolderData={this.props.libraryFolderData}
              dragFileLocalFile={this.props.dragFileLocalFile}
            />
            <StudioPlayButton />

            <div className="container-fluid Studioed-section2">
              <StudioToolsCompo />
              <StudioToolsTime />
              <StudioPageFooterSection />
            </div>
          </body>
        ) : (
          <PlayerSetting cancelPlayerSetting={this.cancelPlayerSetting} />
        )}

        {this.props.showStudioPreview && this.renderPreview()}

        {this.state.showOverLay ? (
          <>
            <CreateOverLay
              cancelPlayerSetting={this.cancelPlayerSetting}
              createOverLayModel={this.createOverLayModel}
            />
          </>
        ) : null}
      </>
    );
  }
}

export default util.storeConnect(Studio);
