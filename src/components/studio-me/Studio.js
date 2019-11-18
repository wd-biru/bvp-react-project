import React from "react";

import StudioHeader from "./StudioHeader";
import StudioPreviewModel from "./StudioPreviewModel";
import StudioVideoSection from "./StudioVideoSection";
import StudioPlayButton from "./StudioPlayListButton";
import StudioToolsCompo from "./StudioToolsCompo";
import StudioToolsTime from "./StudioToolsTime";
import StudioPageFooterSection from "./StudioPageFooterSection";
import util from "../../apiAction/axios/utility";

import PlayerSetting from './playerSetting/PlayerSetting';

import "./css/me_studio.css";
//import "./css/me_responsive.css";

class Studio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlayerSetting: false,
    }
  }

  handlePlayerSetting = () => {
    this.setState({
      showPlayerSetting: true,
    });
  };
  // cancelPlayerSetting = () => {
  //   this.setState({
  //     showPlayerSetting: false,
  //   });
  // };

  render() {
      return !this.state.showPlayerSetting ? (
      <>
        <body className="studio_page">
          <StudioHeader />
          <StudioPreviewModel />
          <StudioVideoSection
            isActiveObject={this.props.isActiveObject}
            selectedMedia={this.props.selectedMedia}
            handlePlayerSetting={this.handlePlayerSetting}            
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
          <PlayerSetting />
        </>
    );
  }
}

export default util.storeConnect(Studio);
