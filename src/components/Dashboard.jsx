import React, { Component } from "react";
import styled from "styled-components";
import LeftNav from "../components/shared/nav/LeftNav";
import TopPageHeader from "../components/dashboard/PageTopHeader";
import Breadcromb from "../components/dashboard/Breadcromb";
import Footer from "../components/shared/footer/Footer";
import util from "../apiAction/axios/utility";
import {
  getUserFolderData,
  createFolderData,
  getUploadFolderFileData,
  getuserFolderMoveData,
  clearUploadStatus
} from "../apiAction/apiType/userFolder/folderActions";
import FileType from "../components/upload/FileType";
import DataTable from "react-data-table-component";
import Dropdown from "react-bootstrap/Dropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileViewer from "react-file-viewer";
import Modal from "../components/shared/modal/Modal";
import Studio from "../components/studio-me/Studio";
import MediaModal from "../components/upload/MediaModal";
import Select from "react-select";

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
const customStyles22 = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "550px",
    height: "350px",
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
        height="auto"
        width="60px"
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
      showPreview: false,
      selectedOption: null,
      isToggle: true,
      showEditor: false,
      isToggleNew: false,
      libraryFolderData: null,
      showStudioAlert: false,
      showStudioPreview: false
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
    this.state.breadcombItemType !== "project" &&
      this.props.getUploadFolderFileData(payload);
    localStorage.setItem("selectedMedia", JSON.stringify(selectedFolder));
  };

  componentDidMount() {
    const stateFolderData = JSON.parse(localStorage.getItem("selectedMedia"));
    const payload = {
      user_id: Number(userId),
      folder_id: stateFolderData ? stateFolderData.id : 0,
      file_type: "all"
    };
    this.setState({
      activeIndex: 4,
      isActiveObject: stateFolderData
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

    if (
      prevProps.folderDetails !== this.props.folderDetails &&
      this.props.folderDetails.data.code === 200 &&
      !this.state.showEditor
    ) {
      const foldChildren =
        this.props.folderDetails &&
        this.state.isActiveObject &&
        !this.state.showEditor
          ? this.props.folderDetails.data.data.filter(folderData => {
              if (folderData.id === this.state.isActiveObject.id) {
                return folderData.children;
              }
            })
          : [];
      this.props.getUserFolderData(payload);
      this.setState({
        activeIndex: 0,
        userFileData: foldChildren.length > 0 && foldChildren[0].children
      });
    }
    if (
      prevProps.userFolderDetails !== this.props.userFolderDetails &&
      this.props.folderDetails &&
      this.state.showEditor
    ) {
      const check = this.props.userFolderDetails.folders.filter(data => {
        if (data.id === this.state.isActiveObject.id) {
          return data.children;
        }
      });
      this.setState({
        activeIndex: 0,
        userFileData: check[0].children
      });
      localStorage.setItem("selectedMedia", JSON.stringify(check[0]));
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

  componentWillUnmount() {
    localStorage.removeItem("selectedMedia");
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
        this.state.activeIndex === 0
          ? this.state.userFileData
          : this.state.isActiveObject.children,
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
      this.props.userFileData &&
      this.props.userFileData.data &&
      this.props.userFileData.data.length !== 0
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
      showPreview: false,
      showModel: false,
      showStudioPreview: false
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
      actual_name:
        this.state.selectedMedia.actual_name ||
        this.state.selectedMedia.folder_name,
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

  studioPreview = selectedMedia => {
    this.setState({
      showEditor: true,
      showStudioPreview: true,
      selectedMedia: selectedMedia ? selectedMedia : null
    });
  };

  renderPreview = () => {
    // const fileType =
    //   this.state.selectedMedia && this.state.selectedMedia.type !== "youtube"
    //     ? this.state.selectedMedia.url.split(".").pop()
    //     : "mp4";
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
          <div className="modal-header text-center preview">
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
          {this.state.selectedMedia.type === "image" && (
            <img className="previewImg" src={filePath} />
          )}
          {this.state.selectedMedia.type === "video" && (
            <video width="100%" controls>
              <source src={filePath} type="video/mp4" />
            </video>
          )}
        </Modal>
      )
    );
  };

  handleEditor = editordata => {


    sessionStorage.setItem('projectId',editordata.id)
    this.setState({
      showEditor: true,
      selectedMedia: editordata,
      showStudioAlert: false
    });
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  allFolderData() {
    const filterFolder =
      this.props.userFolderDetails && this.state.isActiveObject
        ? this.props.userFolderDetails.folders.filter(
            element => element.id !== this.state.isActiveObject.id
          )
        : [];
    const options = filterFolder.map(element => ({
      label: element.folder_name,
      value: element.id
    }));
    return options;
  }

  handleClick = () => {
    this.setState({
      isToggle: !this.state.isToggle
    });
  };
  handleClickToggle = () => {
    this.setState({
      isToggleNew: !this.state.isToggleNew
    });
  };

  handleBackBtn = () => {
    const userId = localStorage.getItem("userId");
    const payload = {
      user_id: Number(userId)
    };
    this.setState({
      showEditor: true,
      showStudioAlert: true
    });
  };

  handleFolderchange = selectedId => {
    const activeId = selectedId ? selectedId : this.state.isActiveObject.id;
    const selectedFolder =
      selectedId &&
      this.props.userFolderDetails.folders.filter(folderData => {
        if (folderData.id === selectedId) {
          return folderData;
        }
      });
    this.setState({
      libraryFolderData: selectedFolder
    });
  };

  closeStudioModal = () => {
    this.setState({
      showStudioAlert: false,
      showEditor: true
    });
  };

  openStudio = () => {
    this.setState({
      showEditor: false,
      showStudioAlert: false
    });
    localStorage.removeItem("dragFile");
  };

  render() {
    const fileData = this.prepareFileData();
    const dragFileLocalFile = JSON.parse(localStorage.getItem("draggedFile"));
    return !this.state.showEditor ? (
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
          handleClick={this.handleClick}
          handleClickToggle={this.handleClickToggle}
          isToggleNew={this.state.isToggleNew}
        />

        <div
          className={`content-inner ${this.state.isToggleNew ? "active" : ""}`}
        >
          <TopPageHeader
            userData={this.props.userData}
            createFolderData={this.props.createFolderData}
            folderDetails={this.props.folderDetails}
            getUserFolderData={this.props.getUserFolderData}
            activeProject={this.state.activeProject}
            isActiveObject={this.state.isActiveObject}
            uploadFolderData={this.props.uploadFolderData}
            getUploadFolderFileData={this.props.getUploadFolderFileData}
            breadcombItemType={this.state.breadcombItemType}
            clearUploadStatus={this.props.clearUploadStatus}
            isToggleNew={this.state.isToggleNew}
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
                      this.props.userFileData.data &&
                      this.props.userFileData.data.length !== 0
                        ? fileData.map((data, index) => {
                            return (
                              <FileType
                                data={data}
                                index={index}
                                key={{index}}
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
                                selectedMedia={this.state.selectedMedia}
                                showEditor={false}
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
                                key={index}
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
                                handlePreview={this.studioPreview}
                                showEditor={true}
                                handleEditor={this.handleEditor}
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
          {this.state.showToast && <ToastContainer autoClose={1500} />}
          {this.state.showPreview && this.renderPreview()}
          {this.state.showMediaDuplicate || this.state.showMediaDelete ? (
            <MediaModal
              modalIsOpen={
                this.state.showMediaDuplicate || this.state.showMediaDelete
              }
              closeMediaModal={this.closeMediaModal}
              btnText={this.state.showMediaDuplicate ? "Clone" : "Delete"}
              consfirmMsg={
                this.state.showMediaDuplicate
                  ? `Are you sure you want to make duplicate of ${this.state.selectedMedia.actual_name}?`
                  : `Are you sure you want to delete ${this.state.selectedMedia
                      .actual_name || this.state.selectedMedia.folder_name}?`
              }
              handleClick={this.duplicateFolder}
              actionBtnDisable={this.state.actionBtnDisable}
            />
          ) : null}
          {this.state.projectMove && (
            <Modal
              modalIsOpen={this.state.projectMove}
              closeModal={this.closeMediaModal}
              customStyles={customStyles22}
              contentLabel={"Create Folder"}
              pauseOnFocusLoss={false}
            >
              <div className="modal-header text-center">
                <h4 className="modal-title">Project Move</h4>
                <button
                  type="button"
                  className="close"
                  onClick={this.closeMediaModal}
                  data-dismiss="modal"
                >
                  &times;
                </button>
              </div>

              <div className="modal-body text-center">
                <div className="select-box">
                  <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={this.allFolderData()}
                    className="select-box2"
                  />
                </div>
                <br />

                <button
                  id="createFolder"
                  name="createName"
                  className="btn btn-info btn-md modal-btn text-center form-group"
                  onClick={() => this.moveFolder(this.state.selectedOption)}
                  disabled={this.state.actionBtnDisable}
                >
                  Move
                </button>
                <br />
                {this.state.actionBtnDisable && (
                  <span>Please Wait while your project is moving...</span>
                )}
                <br />
              </div>
            </Modal>
          )}

          <Footer />
        </div>
      </>
    ) : (
      <>
        <Studio
          isActiveObject={this.state.isActiveObject}
          selectedMedia={this.state.selectedMedia}
          handleBackBtn={this.handleBackBtn}
          createFolderData={this.props.createFolderData}
          folderDetails={this.props.folderDetails}
          getUserFolderData={this.props.getUserFolderData}
          history={this.props.history}
          userFolderDetails={this.props.userFolderDetails}
          handleFolderchange={this.handleFolderchange}
          libraryFolderData={this.state.libraryFolderData}
          createOverLayModel={this.createOverLayModel}
          showStudioAlert={this.state.showStudioAlert}
          closeStudioModal={this.closeStudioModal}
          openStudio={this.openStudio}
          showStudioPreview={this.state.showStudioPreview}
          closeMediaModal={this.closeMediaModal}
        />
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
  getuserFolderMoveData,
  clearUploadStatus
});
