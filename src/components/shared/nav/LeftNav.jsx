import React from "react";
import "./css/MystyleDefault.css";
import "./css/me_custom.css";
import "./css/me_responsive.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../../shared/modal/Modal";
import ModalDel from "../../shared/modal/ModalDel";
import ModalEdit from "../../shared/modal/ModalEdit";
import Myfolder from "./img/myfolder.png";
import Dropdown from "react-bootstrap/Dropdown";
import Accodion from '../../accordion/Accordion';

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
      showModal1: false,
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

  handleDeleteFolder = () => {
    this.setState({
      showModal1: !this.state.showModal1
    });
  };
  closeModal1 = () => {
    this.setState({
      showModal1: false
    });
  };

  handleEditFolder = () => {
    this.setState({
      showModal2: !this.state.showModal2
    });
  };
  closeModal2 = () => {
    this.setState({
      showModal2: false
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

  renderChilData = folderData => {
    return (
      folderData.children &&
      folderData.children.map((data, index) => {
        return (
          <li
            className="active"
            className={this.props.activeIndex === index ? "active" : ""}
            key={data.id}
            onClick={() => this.props.handleFolderData(index, data)}
          >
            <span>{data.children ? data.children.length : 0}</span>
            <i className="far fa-folder"></i>
            {data.folder_name}
                          <Dropdown className="dropnavbar card-close nav-card-close">
                            <Dropdown.Toggle
                              variant="success2"
                              id="dropdown-basic"
                            >
                              <i class="fa fa-ellipsis-v">...</i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item
                                href="#/edit"
                                class="dropdown-item edit"
                              >
                                <span onClick={this.handleEditFolder}  >
                                {" "}
                                <i class="fa fa-edit" ></i>Edit Folder </span>
                              </Dropdown.Item>
                              <Dropdown.Item
                                 href="#/delete"
                                class="dropdown-item remove"
                                
                              >
                                <span onClick={this.handleDeleteFolder}  >
                                {" "}
                                <i class="fa fa-trash"></i>Delete Folder </span>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
          </li>
        );
      })
    );
  };

  render() {
    return (
      <>
        <nav className="side-navbar">
          {/* Sidebar Header*/}
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
            {this.props.userFolderDetails
              ? this.props.userFolderDetails.folders.map(
                  (folderData, index) => {
                    return (
                      <li
                        className="active"
                        className={
                          this.props.activeIndex === index ? "active" : ""
                        }
                        key={folderData.id}
                        onClick={() =>
                          this.props.handleFolderData(index, folderData)
                        }
                      >
                        <span>
                          {folderData.children ? folderData.children.length : 0}
                        </span>
                        <i className="far fa-folder"></i>
                        {folderData.folder_name}
                        {this.renderChilData(folderData)}
                      </li>
                    );
                  }
                )
              : "Loading..."}
              <Accodion />
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

         {/* Delete Model Create*/}

         {this.state.showModal1 && (
          <ModalDel
            modalIsOpen={this.state.showModal1}
            closeModal={this.closeModal}
            customStyles={customStyles}
          >
            <div className="modal-header text-center">
              <h4 className="modal-title"> Do you want to delete this item?</h4>
              <button
                type="button"
                className="close"
                onClick={this.closeModal1}
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>
            <div className="modal-body text-center">
              <h4>Folder Name</h4>
              <br />
                <span className="btnspace"></span>
              <button
                name="yess"
                className="btn btn-danger btn-md modal-btn1 text-center form-group"
               
              >
                Yes..
              </button> 
              <span className="btnspace22"></span>
              <button
                name="nono"
                onClick={this.closeModal1}
                className="btn btn-success btn-md modal-btn1 text-center form-group"
              >
                No..
              </button>
              <br />
            </div>
          </ModalDel>
         )}

         {/* Edit Model PopUp  */}
         {this.state.showModal2 && (
          <ModalEdit
            modalIsOpen2={this.state.showModal}
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
