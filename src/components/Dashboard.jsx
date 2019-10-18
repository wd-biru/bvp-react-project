import React, { Component } from "react";
import styled from "styled-components";
import LeftNav from "../components/shared/nav/LeftNav";
import TopPageHeader from "../components/testingCompo/PageTopHeader";
import Breadcromb from "../components/testingCompo/Breadcromb";
import Footer from "../components/shared/footer/Footer";
import util from "../apiAction/axios/utility";
import {
  getUserFolderData,
  createFolderData
} from "../apiAction/apiType/userFolder/folderActions";
import FileType from "../components/upload/FileType";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveObject: null,
      activeIndex: null,
      userFileData: this.props.isActiveObject
        ? this.props.isActiveObject.files
        : null
    };
  }
  handleFolderData = selectedFolder => {
    this.setState({
      isActiveObject: selectedFolder,
      userFileData: selectedFolder.files
    });
  };

  filterUserData = (itemType, activeItem, index) => {
    let activeObjectFileData = activeItem.files;
    activeObjectFileData = activeObjectFileData.filter(
      data => data.type === itemType
    );
    this.setState({
      userFileData: activeObjectFileData
    });
    if (itemType === "all") {
      this.setState({
        userFileData: activeItem.files
      });
    }
    this.setState({
      activeIndex: index
    });
  };

  render() {
    return (
      <>
        <LeftNav
          handleFolderData={this.handleFolderData}
          isActiveObject={this.state.isActiveObject}
          userFolderDetails={this.props.userFolderDetails}
          folderDetails={this.props.folderDetails}
          getUserFolderData={this.props.getUserFolderData}
          createFolderData={this.props.createFolderData}
        />
        <div className="content-inner">
          <TopPageHeader
            userData={this.props.userData}
            createFolderData={this.props.createFolderData}
            folderDetails={this.props.folderDetails}
            getUserFolderData={this.props.getUserFolderData}
            isActiveObject={this.state.isActiveObject}
          />
          <Breadcromb
            filterUserData={this.filterUserData}
            isActiveObject={this.state.isActiveObject}
            activeIndex={this.state.activeIndex}
          />
          <section className="tables">
            <div className="container-fluid">
              <div className="tab-content">
                <div className="tab-pane container active col-lg-12" id="home2">
                  <div className="row">
                   
                    {this.state.isActiveObject &&
                      this.state.userFileData.map(data => {
                        
                        return (
                         
                          <FileType
                            data={data}
                            isActiveObject={this.state.isActiveObject}
                          />
                          
                        );
                        
                      })}
                     
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userFolderDetails: state.folderData.userFolderData,
  folderDetails: state.folderData.folderData
});

export default util.storeConnect(Dashboard, mapStateToProps, {
  getUserFolderData,
  createFolderData
});
