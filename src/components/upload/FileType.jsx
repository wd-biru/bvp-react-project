import React from "react";
import DashboardDropDown from "./DashboardDropDown";
import docuImg from "../../assets/img/docimg.jpg";
import Modal from '../shared/modal/Modal';
import createFolderData from '../../apiAction/apiType/userFolder/folderSaga';

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


class FileType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      folderName: this.props.isActiveObject
        ? this.props.isActiveObject.folder_name
        : "",
      showToastMsg: false,
      deleteMode: false,
      handleDeleteTask: false
    };
  }
 
  handleFileType = filePath => {
    return filePath.split(".").pop();
  };
 
  // handleDelete = index => {
  //   //alert(this.props.isActiveObject);
  //   alert(this.props.data.folder_name);
  //   //alert(this.props.userFileData.file_type);
  //   //alert(this.props.data.url);
  // };
  handleDelete = item => {
    this.setState({
      showModal: !this.state.showModal,
      deleteMode: true,
      editMode: false
    });
  };
  closeModal = () => {
    this.setState({
      showModal: false
      //inputDefaultText: !this.state.inputDefaultText
    });
  };

  renderModalHeader = () => {
    let headerText = "Create Folder Name";
   if (this.state.deleteMode) {
      headerText = "Delete Folder Name";
    }
    return headerText;
  };

  createFolder = actionType => {
    const userId = localStorage.getItem("userId");
    const payLoad = {
      folder_name: this.state.deleteMode
        ? this.props.isActiveObject.folder_name
        : this.state.folderName,
      user_id: Number(userId),
      parent_id: 0,
      action: actionType,
      folder_id: this.handleFolderId()
    };
    this.setState({
      submitBtnDisable: true
    });
    this.props.createFolderData(payLoad);
  };

  handleDeleteTask = (state) => {
    console.log('handleDeleteTask Clicked');
  }


  render() {
    const filePath = "https://apiv2.bossvideoplayer.com/public/user";
    return (
      <div className="col-lg-3">
        <div className="cardss">
          {this.props.activeIndex === 0 && (
            <div
              className={`cardss ${this.props.activeClass ? "active" : ""}`}
              onClick={() =>
                this.props.handleActiveProject(
                  this.props.data,
                  this.props.index
                )
              }
            >
              <div>
              <div className="card-body">
                <div className="cappadd">
                  <h5>{this.props.data.folder_name}</h5>
                  
                  <DashboardDropDown 
                  handleDelete={this.handleDelete}
                  index = {this.index}
                  folder_name= {this.props.data.folder_name}
                  
                  />
                  
                </div>
              </div>
            </div>
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
                  <span>
                  Are you sure you want to delete folder{" "}
                  {this.props.data.folder_name}?
                </span>
                ) : (
                  <span>
                    Are you sure you want to delete folder ?{" "}
                    {this.props.data.folder_name}?
                  </span>
                  
                )}
                
                <br />
                <button onClick={() => this.state.handleDeleteTask }
                >Delete</button>
                 {this.state.submitBtnDisable && <span>Please Wait...</span>}
              </div>
            </Modal>
            )}
            </div>
          )}
          {this.props.userFileData && this.props.data.type === "video" && (
            <div className="card-body">
              <video controls>
                <source
                  src={`${filePath}/${this.props.data.url}`}
                  type="video/mp4"
                />
              </video>
              <div className="cappadd">
                <h5>
                  {this.props.isActiveObject
                    ? this.props.isActiveObject.folder_name
                    : ""}
                </h5>
                <p className="title">{this.props.userFileData.file_type}</p>
                <DashboardDropDown 
                  handleDelete={this.handleDelete}
                  index = {this.index}
                  folder_name= {this.props.data.folder_name}
                  
                  />
              </div>
            </div>
          )}
          {this.props.userFileData && this.props.data.type === "image" && (
            <div className="cardss">
              <div className="card-body">
                <img src={`${filePath}/${this.props.data.url}`} />
                <div className="cappadd">
                  <h5>
                    {this.props.isActiveObject
                      ? this.props.isActiveObject.folder_name
                      : ""}
                  </h5>
                  <p className="title">{this.props.userFileData.file_type}</p>
                  <DashboardDropDown />
                </div>
              </div>
            </div>
          )}
          {this.props.userFileData && this.props.data.type === "docs" && (
            <div className="cardss">
              <div className="card-body">
                <img src={docuImg} />
                <div className="cappadd">
                  <h5>
                    {this.props.isActiveObject
                      ? this.props.isActiveObject.folder_name
                      : ""}
                  </h5>
                  {this.props.userFileData.file_type}
                  <DashboardDropDown />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default FileType;
