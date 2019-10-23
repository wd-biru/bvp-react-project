import React from "react";
import util from "../../apiAction/axios/utility";
import { getUploadFolderData } from "../../apiAction/apiType/userFolder/folderActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../shared/modal/Modal";
import UploadPage from "../upload/UploadPage";

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

class PageTopHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      projectrName: "",
      showToastMsg: false,
      submitBtnDisable: false,
      showUploadModal: false
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleResetFields = () => {
    this.setState({
      projectrName: ""
    });
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.folderDetails !== this.props.folderDetails &&
      this.props.folderDetails.status === 200
    ) {
      this.setState({
        showToastMsg: true,
        submitBtnDisable: false
      });
      this.handleResetFields();
      this.closeModal();
    } else if (
      prevProps.folderDetails !== this.props.folderDetails &&
      this.props.folderDetails.status !== 200
    ) {
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

  handleProjectFolder = () => {
    this.setState({
      showModal: !this.state.showModal,
      projectrName: ""
    });
  };

  projectFolder = actionType => {
    const payLoad = {
      folder_name: this.state.folderName,
      user_id: Number(userId),
      parent_id: this.props.isActiveObject ? this.props.isActiveObject.id : 0,
      action: actionType,
      folder_id: 0
    };
    this.setState({
      submitBtnDisable: true
    });
    this.props.createFolderData(payLoad);
  };

  handleUploadData = () => {
    this.setState({
      showUploadModal: true
    });
  };

  handleUploadClose = () => {
    this.setState({
      showUploadModal: false
    });
  };

  render() {
    return (
      <header className="page-header">
        <div className="container-fluid">
          <h2 className="no-margin-bottom">Home</h2>
          <div className="secund-menu-button">
            <input
              type="button"
              name=""
              value="CREATE PROJECT"
              className="SYNC"
              data-toggle="modal"
              data-target="#myModal"
              onClick={this.handleProjectFolder}
              disabled={this.props.isActiveObject ? false : true}
            />
            <input
              type="button"
              name=""
              value="UPLOAD"
              className="UPLOAD"
              onClick={this.handleUploadData}
              disabled={this.props.isActiveObject ? false : true}
            />
          </div>
        </div>

        {this.state.showModal && (
          <Modal
            modalIsOpen={this.state.showModal}
            closeModal={this.closeModal}
            customStyles={customStyles}
            contentLabel={"Create Folder"}
          >
            <div className="modal-header text-center">
              <h4 className="modal-title"> Enter Project Name</h4>
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
                onClick={() => this.projectFolder("project")}
                disabled={!this.state.folderName && true}
              >
                Create
              </button>
              <br />
              {this.state.submitBtnDisable && <span>Please Wait...</span>}
            </div>
          </Modal>
        )}

        {this.state.showUploadModal && (
          <UploadPage
            getUploadFolderData={this.props.getUploadFolderData}
            activeProject={this.props.activeProject}
            handleUploadClose={this.handleUploadClose}
            uploadFolderData={this.props.uploadFolderData}
            isActiveObject={this.props.isActiveObject}
          />
        )}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  uploadFolderDetails: state.folderData.uploadFolderData
});

export default util.storeConnect(PageTopHeader, mapStateToProps, {
  getUploadFolderData
});
