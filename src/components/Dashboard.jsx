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
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Id",
    selector: "id",
    sortable: true
  },
  {
    name: "Project Name",
    selector: "folder_name",
    sortable: true
  }
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveObject: null,
      activeIndex: 0,
      projectActiveIndex: null,
      userFileData: this.props.isActiveObject
        ? this.props.isActiveObject.files
        : null,
      renderHomeChild: true,
      activeProject: null,
      handleListView: false
    };
  }
  handleFolderData = selectedFolder => {
    this.setState({
      isActiveObject: selectedFolder,
      activeIndex: 0,
      handleListView: false,
      userFileData:
        this.state.activeIndex === 0
          ? selectedFolder.children
          : selectedFolder.files
    });
  };

  componentDidUpdate(prevProps) {
    const userId = localStorage.getItem("userId");
    const payload = {
      user_id: Number(userId)
    };
    const foldChildren =
      this.props.folderDetails && this.state.isActiveObject
        ? this.props.folderDetails.data.data.filter(folderData => {
            if (folderData.id === this.state.isActiveObject.id) {
              return folderData.children;
            }
          })
        : null;
    if (
      prevProps.folderDetails !== this.props.folderDetails &&
      this.props.folderDetails.data.code === 200
    ) {
      this.props.getUserFolderData(payload);
      this.setState({
        activeIndex: 0,
        userFileData: foldChildren && foldChildren[0].children
      });
    }
  }

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
    if (itemType === "project") {
      this.setState({
        userFileData: activeItem.children
      });
    }
    this.setState({
      activeIndex: index,
      handleListView: false
    });
  };

  handleHomeToggle = () => {
    this.setState({
      renderHomeChild: !this.state.renderHomeChild
      // isActiveObject: null,
      // activeIndex: 0
    });
  };

  handleActiveProject = (data, index) => {
    console.log(data);
    this.setState({
      activeProject: data,
      projectActiveIndex: index
    });
  };

  handleListView = () => {
    this.setState({
      handleListView: !this.state.handleListView
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
          handleHomeToggle={this.handleHomeToggle}
          renderHomeChild={this.state.renderHomeChild}
        />
        <div className="content-inner">
          <TopPageHeader
            userData={this.props.userData}
            createFolderData={this.props.createFolderData}
            folderDetails={this.props.folderDetails}
            getUserFolderData={this.props.getUserFolderData}
            activeProject={this.state.activeProject}
            isActiveObject={this.state.isActiveObject}
            uploadFolderData={this.props.uploadFolderData}
          />
          <Breadcromb
            filterUserData={this.filterUserData}
            isActiveObject={this.state.isActiveObject}
            activeIndex={this.state.activeIndex}
            handleListView={this.handleListView}
          />
          {!this.state.handleListView ? (
            <section className="tables list-view">
              <div className="container-fluid">
                <div className="tab-content">
                  <div
                    className="tab-pane container active col-lg-12"
                    id="home2"
                  >
                    <div className="row">
                      {this.state.isActiveObject && this.state.userFileData
                        ? this.state.userFileData.map((data, index) => {
                            return (
                              <FileType
                                data={data}
                                index={index}
                                activeClass={
                                  this.state.projectActiveIndex === index
                                    ? true
                                    : false
                                }
                                isActiveObject={this.state.isActiveObject}
                                activeIndex={this.state.activeIndex}
                                handleActiveProject={this.handleActiveProject}
                              />
                            );
                          })
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <DataTable
              columns={columns}
              data={this.state.isActiveObject.children}
            />
          )}
          <Footer />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userFolderDetails: state.folderData.userFolderData,
  folderDetails: state.folderData.folderData,
  uploadFolderData: state.folderData && state.folderData.uploadFolderData
});

export default util.storeConnect(Dashboard, mapStateToProps, {
  getUserFolderData,
  createFolderData
});
