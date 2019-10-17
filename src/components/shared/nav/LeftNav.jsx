import React from "react";
import "./css/MystyleDefault.css";
import "./css/me_custom.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../../shared/modal/Modal";
import Myfolder from "./img/myfolder.png";
import NavItems from "./navItem";

const userId = localStorage.getItem("userId");

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

class LeftNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      folderName: this.props.isActiveObject
        ? this.props.isActiveObject.folder_name
        : "",
      showToastMsg: false,
      submitBtnDisable: false,
      editMode: false,
      deleteMode: false,
      inputDefaultText: "Folder Name"
    };
  }

  componentDidMount() {
    const payload = {
      user_id: Number(userId),
      parent_id: 0
    };
    this.props.getUserFolderData(payload);
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleResetFields = () => {
    this.setState({
      folderName: ""
    });
  };

  // handleToastMessage = () => {
  //   let toastMsg = "Created successfully";
  //   if (this.state.editMode) {
  //     toastMsg = "Updated successfully";
  //   }
  //   if (this.state.deleteMode) {
  //     toastMsg = "Deleted successfully";
  //   }
  //   return toastMsg;
  // };

  componentDidUpdate(prevProps) {
    const payload = {
      user_id: Number(userId)
    };
    if (
      prevProps.folderDetails !== this.props.folderDetails &&
      this.props.folderDetails.data.code === 200
    ) {
      toast.success(this.props.folderDetails.data.message);
      this.setState({
        showToastMsg: true,
        submitBtnDisable: false
      });
      this.closeModal();
      this.handleResetFields();
      this.props.getUserFolderData(payload);
    } else if (
      prevProps.folderDetails !== this.props.folderDetails &&
      this.props.folderDetails.data.code !== 200
    ) {
      toast.error(this.props.folderDetails.data.message);
      this.setState({
        showToastMsg: true,
        submitBtnDisable: false
      });
      this.handleResetFields();
    }
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      inputDefaultText: !this.state.inputDefaultText
    });
  };

  handleCreateFolder = () => {
    this.setState({
      showModal: !this.state.showModal,
      editMode: false,
      deleteMode: false
    });
  };

  handleParentId = () => {
    let parentId = 0;
    if (this.props.isActiveObject) {
      parentId = this.props.isActiveObject.id;
    }

    return parentId;
  };

  handleFolderId = () => {
    let folderId = 0;
    if (
      (this.props.isActiveObject && this.state.editMode) ||
      this.state.deleteMode
    ) {
      folderId = this.props.isActiveObject.id;
    }

    return folderId;
  };

  createFolder = actionType => {
    const payLoad = {
      folder_name: this.state.deleteMode
        ? this.props.isActiveObject.folder_name
        : this.state.folderName,
      user_id: Number(userId),
      parent_id: this.handleParentId(),
      action: actionType,
      //folder_id: this.props.isActiveObject ? this.props.isActiveObject.id : 0
      folder_id: this.handleFolderId()
    };
    this.setState({
      submitBtnDisable: true
    });
    this.props.createFolderData(payLoad);
  };

  handleBtnDisable = () => {
    let btnDisable = false;
    if (this.state.folderName === "" || this.state.submitBtnDisable) {
      btnDisable = true;
    }
    return btnDisable;
  };

  handleEdit = item => {
    this.setState({
      showModal: !this.state.showModal,
      editMode: true,
      deleteMode: false,
      inputDefaultText: item && item.folder_name
    });
  };

  handleDelete = item => {
    this.setState({
      showModal: !this.state.showModal,
      deleteMode: true,
      editMode: false
    });
  };

  renderModalHeader = () => {
    let headerText = "Create Folder Name";
    if (this.state.editMode) {
      headerText = "Edit Folder Name";
    } else if (this.state.deleteMode) {
      headerText = "Delete Folder Name";
    }
    return headerText;
  };

  renderModalBtnText = () => {
    let modalBtnText = "Create";
    if (this.state.editMode) {
      modalBtnText = "Update";
    } else if (this.state.deleteMode) {
      modalBtnText = "Delete";
    }
    return modalBtnText;
  };

  render() {
    const actionType = this.renderModalBtnText().toLowerCase();
    return (
      <>
        {/* Sidebar Header*/}
        <div className="nav-sidebar-main">
          <div className="sidebar-header d-flex align-items-center">
            <div className="title">
              <h1 className="h4">
                My Folder{" "}
                <img src={Myfolder} onClick={this.handleCreateFolder} />
              </h1>
            </div>
          </div>
          {/* Sidebar Navidation Menus*/}
          {/* <span className="heading">Main</span> */}

          <ul className="list-unstyled">
            <li className="">
              <span>
                {this.props.userFolderDetails &&
                  this.props.userFolderDetails.folders.length}
              </span>
              <i className="far fa-folder"></i>
              {"Home"}
            </li>
          </ul>
        </div>
        <nav className="side-navbar">
          <ul className="list-unstyled">
            <NavItems
              data={
                this.props.userFolderDetails
                  ? this.props.userFolderDetails.folders
                  : null
              }
              handleFolderData={this.props.handleFolderData}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              isActiveObject={this.props.isActiveObject}
            />
          </ul>
        </nav>
        {this.state.showModal && (
          <Modal
            modalIsOpen={this.state.showModal}
            closeModal={this.closeModal}
            customStyles={customStyles}
            contentLabel={"Create Folder"}
            pauseOnFocusLoss={false}
          >
            <div className="modal-header text-center">
              <h4 className="modal-title">{this.renderModalHeader()}</h4>
              <button
                type="button"
                className="close"
                onClick={this.closeModal}
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>

            <div className="modal-body text-center">
              {!this.state.deleteMode ? (
                <input
                  type="text"
                  name="folderName"
                  key={this.state.inputDefaultText}
                  className="form-control"
                  // placeholder={this.state.inputDefaultText}
                  defaultValue={
                    this.props.isActiveObject
                      ? this.props.isActiveObject.folder_name
                      : this.state.folder_name
                  }
                  //value={this.state.folderName}
                  onChange={this.handleInputChange}
                />
              ) : (
                <span>
                  Are you sure you want to delete folder{" "}
                  {this.props.isActiveObject.folder_name}?
                </span>
              )}
              <br />

              <button
                id="createFolder"
                name="createName"
                className="btn btn-info btn-md modal-btn text-center form-group"
                onClick={() => this.createFolder(actionType)}
                disabled={!this.state.deleteMode && this.handleBtnDisable()}
              >
                {this.renderModalBtnText()}
              </button>
              <br />
              {this.state.submitBtnDisable && <span>Please Wait...</span>}
            </div>
          </Modal>
        )}
        {this.state.showToastMsg && <ToastContainer />}
      </>
    );
  }
}

export default LeftNavbar;
