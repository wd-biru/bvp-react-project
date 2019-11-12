import React from "react";

import StudioVideoSectionRight from "./StudioVideoSectionRight";
import Video from "../../assets/img/me/video-test.mp4";

class StudioVideoSection extends React.Component {
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
            folderProjectData={this.props.folderProjectData}
            selectedMedia={this.props.selectedMedia}
          />
        </div>
      </div>
    );
  }
}

export default StudioVideoSection;
