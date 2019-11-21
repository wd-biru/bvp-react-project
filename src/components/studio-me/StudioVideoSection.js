import React from "react";

import StudioVideoSectionRight from "./StudioVideoSectionRight";
import ReactPlayer from "react-player";
import Video from "../../assets/img/me/video-test.mp4";

import Dropzone from 'react-dropzone';

class StudioVideoSection extends React.Component {
  // handleCeateOverLay = () => {
  //   alert('hihihi');
  // }
  
  constructor(props){
    super(props);
    this.state = {
      video: null
    }
  }
  
  onDrop = (files) => {
    console.log(files)
    console.log(files[0].name)
    
    if(files && files.length > 0 ){
      alert('Successfully Selected' + files[0].name)
      //files[0].name)
      // this.setState({
      // video: files[0].name
      //   })
    }
  };
  render() {
    return (
      <div class="container-fluid Studioed">
        <div class="row">
          <div class="col-sm-7 Studioed-seund">

          {/* ********this is My code ********** */}
            {this.props.selectedMedia &&
            this.props.selectedMedia.video === undefined ? (
              <>
              <Dropzone 
                onDrop={this.onDrop}
                accept="video/*"
              >
                {({getRootProps, getInputProps}) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div className="drop-video">Drag Your Video Here</div>
                    </div>
                  </section>
                )}
               </Dropzone>
              </>
            ) : (
              <ReactPlayer url={Video} playing={false} controls />
            )}
         {/* ******** End My code Here Sir ********** */}

            {/* ******** This is your code Sir**********
            
              {this.props.selectedMedia &&
            this.props.selectedMedia.video === undefined ? (
              <div className="drop-video">Drag Your Video Here</div>
            ) : (
              <ReactPlayer url={Video} playing={false} controls />
            )} 
            
            ******** End your code Here Sir **********

            */}

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
