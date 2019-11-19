import React from "react";

import StudioHeader from "./StudioHeader";
import StudioPreviewModel from "./StudioPreviewModel";
import StudioVideoSection from "./StudioVideoSection";
import StudioPlayButton from "./StudioPlayListButton";
import StudioToolsCompo from "./StudioToolsCompo";
import StudioToolsTime from "./StudioToolsTime";
import StudioPageFooterSection from "./StudioPageFooterSection";
import util from "../../apiAction/axios/utility";

import PlayerSetting from "./playerSetting/PlayerSetting";
//import CreateOverLay from './createoverlay/CreateOverLay';

import "./css/me_studio.css";
//import "./css/me_responsive.css";

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
    //alert('hihi')
    this.setState({
      showPlayerSetting: false
    });
}
// handleCeateOverLay = () => {
//   console.log('hihihi')
//   this.setState({
//     showOverLay: true
//   });
// };

  render() {
    return !this.state.showPlayerSetting ? (
       <>
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
            handlePlayerSetting={this.handlePlayerSetting}
            handleCeateOverLay={this.handleCeateOverLay}
          />
          <StudioPlayButton />

          <div className="container-fluid Studioed-section2">
            <StudioToolsCompo />
            <StudioToolsTime />
            <StudioPageFooterSection />
          </div>
        </body>
        </>
       ) : ( 
      <>
      <PlayerSetting 
      cancelPlayerSetting={this.cancelPlayerSetting}
     />
     </>
    )        
  }
}

export default util.storeConnect(Studio);
