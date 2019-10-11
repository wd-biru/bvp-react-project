import React from "react";
import "./css/MystyleDefault.css";
import "./css/me_custom.css";
import "./css/me_responsive.css";
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
      folderName: "",
      showToastMsg: false,
      submitBtnDisable: false
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

  componentDidUpdate(prevProps) {
    const payload = {
      user_id: Number(userId),
      parent_id: this.props.isActiveObject
        ? this.props.isActiveObject.parent_id
        : 0
    };
    if (
      prevProps.folderDetails !== this.props.folderDetails &&
      this.props.folderDetails.status === 200
    ) {
      toast.success("Folder created successfully");
      this.setState({
        showToastMsg: true,
        submitBtnDisable: false
      });
      this.closeModal();
      this.handleResetFields();
      this.props.getUserFolderData(payload);
    } else if (
      prevProps.folderDetails !== this.props.folderDetails &&
      this.props.folderDetails.status !== 200
    ) {
      toast.error("Folder name already exists!");
      this.setState({
        showToastMsg: true,
        submitBtnDisable: false
      });
      this.handleResetFields();
    }
  }

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  handleCreateFolder = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  createFolder = () => {
    const payLoad = {
      folder_name: this.state.folderName,
      user_id: Number(userId),
      parent_id: this.props.isActiveObject ? this.props.isActiveObject.id : 0,
      action: "create",
      folder_id: this.props.isActiveObject ? this.props.isActiveObject.id : 0
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

  render() {
    return (
      <>
        {/* Sidebar Header*/}
        <div className="nav-sidebar-main">
        <div className="sidebar-header d-flex align-items-center">
          <div className="title">
            <h1 className="h4">
              My Folder <img src={Myfolder} onClick={this.handleCreateFolder} />
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
        />
         </ul>
         </nav>
        {this.state.showModal && (
          <Modal
            modalIsOpen={this.state.showModal}
            closeModal={this.closeModal}
            customStyles={customStyles}
            contentLabel={"Create Folder"}
          >
            <div className="modal-header text-center">
              <h4 className="modal-title"> Enter Folder Name</h4>
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
              <input
                type="text"
                name="folderName"
                className="form-control"
                placeholder="Project Name"
                value={this.state.folderName}
                onChange={this.handleInputChange}
              />
              <br />

              <button
                id="createFolder"
                name="createName"
                className="btn btn-info btn-md modal-btn text-center form-group"
                onClick={this.createFolder}
                disabled={this.handleBtnDisable()}
              >
                Create
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
