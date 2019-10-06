import React from "react";
import util from "../../apiAction/axios/utility";
// import { createFolderData } from "../../apiAction/apiType/userFolder/folderActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../shared/modal/Modal";

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
      showToastMsg: false
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

  // componentDidUpdate(prevProps) {
  //   if (
  //     prevProps.folderDetails !== this.props.folderDetails &&
  //     this.props.folderDetails.status === 200
  //   ) {
  //     toast.success("Folder created successfully");
  //     this.setState({
  //       showToastMsg: true
  //     });
  //     this.closeModal();
  //     this.handleResetFields();
  //   }
  // }

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  handleProjectFolder = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  projectFolder = () => {
    const payLoad = {
      project_name: this.state.projectName,
      user_id: 1,
      parent_id: 0
    };
    // this.props.createFolderData(payLoad);
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
                onClick={this.projectFolder}
                disabled={!this.state.folderName && true}
              >
                Create
              </button>
            </div>
          </Modal>
        )}

        {this.state.showToastMsg && <ToastContainer />}
      </header>
    );
  }
}

// const mapStateToProps = state => ({
//   projectDetails: state.projectDetails.projectData
// });

export default util.storeConnect(PageTopHeader);
