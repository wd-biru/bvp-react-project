import React, { Component } from "react";
import styled from "styled-components";
import LeftNav from "../components/shared/nav/LeftNav";
import TopPageHeader from "../components/testingCompo/PageTopHeader";
import Breadcromb from "../components/testingCompo/Breadcromb";
import Footer from "../components/shared/footer/Footer";
import util from "../apiAction/axios/utility";
import {
  getUserFolderData,
  createFolderData,
  getUploadFolderFileData,
  getuserFolderMoveData
} from "../apiAction/apiType/userFolder/folderActions";
import FileType from "../components/upload/FileType";
import DataTable from "react-data-table-component";
import Dropdown from "react-bootstrap/Dropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileViewer from "react-file-viewer";
import Modal from "../components/shared/modal/Modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    paddingtop: "0px",
    padding: "0px"
  }
};

const columns = [
  {
    name: "File Name",
    selector: "actual_name",
    sortable: true
  },
  {
    name: "Type",
    selector: "type",
    sortable: true
  },
  ,
  {
    name: "File Size",
    selector: "size",
    sortable: true
  },
  ,
  {
    name: "File Url",
    selector: "url",
    sortable: true,
    cell: row => (
      <img
        height="84px"
        width="56px"
        alt={row.type}
        src={`https://apiv2.bossvideoplayer.com/public/user/${row.url}`}
      />
    )
  }
];

const userId = localStorage.getItem("userId");

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveObject: null,
      activeIndex: 4,
      projectActiveIndex: null,
      userFileData: null,
      activeProject: null,
      handleListViewItem: false,
      breadcombItemType: "all",
      homeActive: true,
      dataSortBy: true,
      projectMove: false,
      showMediaDelete: false,
      selectedMedia: null,
      showToast: false,
      showMediaDuplicate: false,
      actionBtnDisable: false,
      showPreview: false
    };
  }
  handleFolderData = selectedFolder => {
    const payload = {
      user_id: Number(userId),
      folder_id: selectedFolder.id,
      file_type: this.state.breadcombItemType
    };
    this.setState({
      isActiveObject: selectedFolder,
      activeIndex: this.state.activeIndex,
      handleListViewItem: false,
      userFileData: selectedFolder.children,
      homeActive: false
    });
    this.props.getUploadFolderFileData(payload);
  };

  componentDidMount() {
    const payload = {
      user_id: Number(userId),
      folder_id: this.state.isActiveObject ? this.state.isActiveObject.id : 0,
      file_type: "all"
    };
    this.setState({
      activeIndex: 4
    });
    const getFolderpayload = {
      user_id: Number(userId)
    };
    this.props.getUserFolderData(getFolderpayload);
    // this.props.getUserFolderData(payload);
    this.props.getUploadFolderFileData(payload);
  }

  componentDidUpdate(prevProps) {
    const userId = localStorage.getItem("userId");
    const payload = {
      user_id: Number(userId)
    };
    const mediaPayload = {
      user_id: Number(userId),
      folder_id: this.state.isActiveObject ? this.state.isActiveObject.id : 0,
      file_type: this.state.breadcombItemType
    };
    const foldChildren =
      this.props.folderDetails && this.state.isActiveObject
        ? this.props.folderDetails.data.data.filter(folderData => {
            if (folderData.id === this.state.isActiveObject.id) {
              return folderData.children;
            }
          })
        : [];
    if (
      prevProps.folderDetails !== this.props.folderDetails &&
      this.props.folderDetails.data.code === 200
    ) {
      this.props.getUserFolderData(payload);
      this.setState({
        activeIndex: 0,
        userFileData: foldChildren.length > 0 && foldChildren[0].children
      });
    }
    // Move code success
    if (
      prevProps.userMoveData !== this.props.userMoveData &&
      this.props.userMoveData.code
    ) {
      this.setState({
        projectMove: false,
        showMediaDuplicate: false,
        showMediaDelete: false,
        showToast: true,
        actionBtnDisable: false
      });
      this.props.getUserFolderData(payload);
      this.props.getUploadFolderFileData(mediaPayload);
      this.props.userMoveData.code === 200
        ? toast.success(this.props.userMoveData.message)
        : toast.error(this.props.userMoveData.message);
    }
  }

  filterUserData = (itemType, activeItem, index) => {
    if (itemType !== "project") {
      const userId = localStorage.getItem("userId");
      const payload = {
        user_id: Number(userId),
        folder_id: this.state.isActiveObject ? this.state.isActiveObject.id : 0,
        file_type: itemType
      };
      this.props.getUploadFolderFileData(payload);
    }
    this.setState({
      activeIndex: index,
      handleListViewItem: false,
      userFileData:
        this.state.activeIndex === 0 ? this.state.userFileData : null,
      breadcombItemType: itemType
    });
  };

  // handleHomeToggle = () => {
  //   this.setState({
  //     renderHomeChild: !this.state.renderHomeChild
  //     // isActiveObject: null,
  //     // activeIndex: 0
  //   });
  // };

  handleHomeToggle = () => {
    this.setState({
      homeActive: !this.state.homeActive
    });
  };

  handleActiveProject = (data, index) => {
    this.setState({
      activeProject: data,
      projectActiveIndex: index
    });
  };

  handleListView = () => {
    const userId = localStorage.getItem("userId");
    const payload = {
      user_id: Number(userId),
      folder_id: this.state.isActiveObject ? this.state.isActiveObject.id : 0,
      file_type: "all"
    };
    this.props.getUploadFolderFileData(payload);

    this.setState({
      handleListViewItem: !this.state.handleListViewItem
    });
  };

  toogleDateTimeView = () => {
    this.setState({
      dataSortBy: !this.state.dataSortBy
    });
  };

  prepareFileData = () => {
    let data =
      this.props.userFileData && this.props.userFileData.data.length !== 0
        ? [...this.props.userFileData.data.files]
        : [];
    if (this.state.dataSortBy) {
      data = data.reverse();
    }
    return data;
  };

  handleProjectMove = selectedMedia => {
    this.setState({
      projectMove: true,
      selectedMedia: selectedMedia ? selectedMedia.actual_name : null
    });
  };

  handleDefaultHomeActive = isHomeActive => {
    this.setState({
      isActiveObject: isHomeActive
    });
  };

  closeMediaModal = () => {
    this.setState({
      projectMove: false,
      showMediaDelete: false,
      showMediaDuplicate: false,
      showPreview: false
    });
  };

  handleMediaDelete = selectedMedia => {
    this.setState({
      showMediaDelete: true,
      selectedMedia: selectedMedia ? selectedMedia : null
    });
  };

  moveFolder = moveTo => {
    const userId = Number(localStorage.getItem("userId"));
    const movePayload = {
      actual_name: this.state.selectedMedia,
      user_id: userId,
      folder_from: this.state.isActiveObject ? this.state.isActiveObject.id : 0,
      folder_to: moveTo ? moveTo.value : 0
    };
    const actionType = {
      action: "move"
    };
    this.props.getuserFolderMoveData(movePayload, actionType);
    this.setState({
      actionBtnDisable: true
    });
  };

  handleMediaDuplicate = selectedMedia => {
    this.setState({
      showMediaDuplicate: true,
      selectedMedia: selectedMedia ? selectedMedia : null
    });
  };

  duplicateFolder = () => {
    const userId = Number(localStorage.getItem("userId"));
    const movePayload = {
      actual_name: this.state.selectedMedia.actual_name,
      user_id: userId,
      folder_id: this.state.isActiveObject ? this.state.isActiveObject.id : 0,
      action: this.state.showMediaDelete ? "delete" : "duplicate",
      id: this.state.selectedMedia.id
    };
    const actionType = {
      action: "duplicate"
    };
    this.props.getuserFolderMoveData(movePayload, actionType);
    this.setState({
      actionBtnDisable: true
    });
  };

  handlePreview = selectedMedia => {
    this.setState({
      showPreview: true,
      selectedMedia: selectedMedia ? selectedMedia : null
    });
    selectedMedia && this.renderPreview();
  };

  renderPreview = () => {
    const fileType =
      this.state.selectedMedia && this.state.selectedMedia.type !== "youtube"
        ? this.state.selectedMedia.url.split(".").pop()
        : "mp4";
    const filePath =
      this.state.selectedMedia && this.state.selectedMedia.type !== "youtube"
        ? `https://apiv2.bossvideoplayer.com/public/user/${this.state.selectedMedia.url}`
        : this.state.selectedMedia && this.state.selectedMedia.url;
    return (
      this.state.selectedMedia && (
        <Modal
          modalIsOpen={this.state.showPreview}
          closeModal={this.closeMediaModal}
          customStyles={customStyles}
          contentLabel={"Preview"}
          pauseOnFocusLoss={false}
        >
          <div className="modal-header text-center">
            <h4 className="modal-title">Preview</h4>
            <button
              type="button"
              className="close"
              onClick={this.closeMediaModal}
              data-dismiss="modal"
            >
              &times;
            </button>
          </div>
          <FileViewer fileType={fileType} filePath={filePath} />
        </Modal>
      )
    );
  };

  render() {
    const fileData = this.prepareFileData();
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
          homeActive={this.state.homeActive}
          handleDefaultHomeActive={this.handleDefaultHomeActive}
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
            toogleDateTimeView={this.toogleDateTimeView}
            dataSortBy={this.state.dataSortBy}
            handleListViewItem={this.state.handleListViewItem}
          />
          {!this.state.handleListViewItem ? (
            <section className="tables list-view">
              <div className="container-fluid">
                <div className="tab-content">
                  <div
                    className="tab-pane container active col-lg-12"
                    id="home2"
                  >
                    <div className="row">
                      {this.props.userFileData &&
                      this.state.activeIndex !== 0 &&
                      this.props.userFileData.data.length !== 0
                        ? fileData.map((data, index) => {
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
                                userFileData={this.props.userFileData.data}
                                breadcombItemType={this.state.breadcombItemType}
                                handleProjectMove={this.handleProjectMove}
                                projectMove={this.state.projectMove}
                                userFolderDetails={this.props.userFolderDetails}
                                closeMediaModal={this.closeMediaModal}
                                handleMediaDelete={this.handleMediaDelete}
                                showMediaDelete={this.state.showMediaDelete}
                                moveFolder={this.moveFolder}
                                userMoveData={this.props.userMoveData}
                                showMediaDuplicate={
                                  this.state.showMediaDuplicate
                                }
                                handleMediaDuplicate={this.handleMediaDuplicate}
                                duplicateFolder={this.duplicateFolder}
                                actionBtnDisable={this.state.actionBtnDisable}
                                handlePreview={this.handlePreview}
                              />
                            );
                          })
                        : null}
                    </div>
                    <div className="row">
                      {this.state.activeIndex === 0 && this.state.userFileData
                        ? this.state.userFileData.map((data, index) => {
                            return (
                              <FileType
                                data={data}
                                projectActiveIndex={
                                  this.state.projectActiveIndex
                                }
                                index={index}
                                activeClass={
                                  this.state.projectActiveIndex === index
                                    ? true
                                    : false
                                }
                                isActiveObject={this.state.isActiveObject}
                                activeIndex={this.state.activeIndex}
                                handleActiveProject={this.handleActiveProject}
                                breadcombItemType={this.state.breadcombItemType}
                                handleProjectMove={this.handleProjectMove}
                                projectMove={this.state.projectMove}
                                userFolderDetails={this.props.userFolderDetails}
                                closeMediaModal={this.closeMediaModal}
                                handleMediaDelete={this.handleMediaDelete}
                                showMediaDelete={this.state.showMediaDelete}
                                moveFolder={this.moveFolder}
                                showMediaDuplicate={
                                  this.state.showMediaDuplicate
                                }
                                handleMediaDuplicate={this.handleMediaDuplicate}
                                duplicateFolder={this.duplicateFolder}
                                actionBtnDisable={this.state.actionBtnDisable}
                                handlePreview={this.handlePreview}
                              />
                            );
                          })
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <DataTable
              columns={columns}
              data={
                this.props.userFileData !== null &&
                this.props.userFileData.data.files
              }
            />
          )}
          {this.state.showToast && <ToastContainer />}
          {this.state.showPreview && this.renderPreview()}
          <Footer />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userFolderDetails: state.folderData.userFolderData,
  folderDetails: state.folderData.folderData,
  uploadFolderData: state.folderData && state.folderData.uploadFolderData,
  userFileData: state.folderData && state.folderData.userFileData,
  userMoveData: state.folderData && state.folderData.userMoveData
});

export default util.storeConnect(Dashboard, mapStateToProps, {
  getUserFolderData,
  createFolderData,
  getUploadFolderFileData,
  getuserFolderMoveData
});
