import React from "react";
import coreUtil from "../../core/coreUtility";
import { createFolderData } from "../../services/createFolder/createFolderActions";
//import LogoImg from "../../assets/img/me/bvp-logo.png";
import Modal from "../shared/modal/Modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    height: "350px"
  }
};

class PageTopHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      folderName: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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
      user_id: 1
    };
    this.props.createFolderData(payLoad);
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
              onClick={this.handleCreateFolder}
            />
            <input type="button" name="" value="UPLOAD" className="UPLOAD" />
          </div>
        </div>
        {this.state.showModal && (
          <Modal
            modalIsOpen={this.state.showModal}
            closeModal={this.closeModal}
            customStyles={customStyles}
            contentLabel={"Create Folder"}
          >
            Enter Folder Name:{" "}
            <input
              type="text"
              name="folderName"
              value={this.state.folderName}
              onChange={this.handleInputChange}
            />
            <button
              id="createFolder"
              name="createName"
              onClick={this.createFolder}
            >
              Create
            </button>
          </Modal>
        )}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  folderDetails: state.folderDetails.folderData
});

export default coreUtil.connectToStore(PageTopHeader, mapStateToProps, {
  createFolderData
});
