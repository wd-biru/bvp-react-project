import React from "react";
import DashboardDropDown from "./DashboardDropDown";
import docuImg from "../../assets/img/docimg.jpg";
import Modal from "../shared/modal/Modal";
import Select from "react-select";
import MediaModal from "../upload/MediaModal";
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
      selectedOption: null
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  handleFileType = filePath => {
    return filePath.split(".").pop();
  };

  allFolderData() {
    const filterFolder =
      this.props.userFolderDetails && this.props.isActiveObject
        ? this.props.userFolderDetails.folders.filter(
            element => element.id !== this.props.isActiveObject.id
          )
        : [];
    const options = filterFolder.map(element => ({
      label: element.folder_name,
      value: element.id
    }));
    return options;
  }

  render() {
    const filePath = "https://apiv2.bossvideoplayer.com/public/user";
    return (
      <>
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
                <div className="card-body">
                  <div className="cappadd">
                    <h5>{this.props.data.folder_name}</h5>
                    <DashboardDropDown
                      handleProjectMove={this.props.handleProjectMove}
                      handleMediaDelete={this.props.handleMediaDelete}
                      data={this.props.data}
                    />
                  </div>
                </div>
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
                  <p className="title">{this.props.data.type}</p>
                  <DashboardDropDown
                    handleProjectMove={this.props.handleProjectMove}
                    handleMediaDelete={this.props.handleMediaDelete}
                    data={this.props.data}
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
                    <p className="title">{this.props.data.type}</p>
                    <DashboardDropDown
                      handleProjectMove={this.props.handleProjectMove}
                      handleMediaDelete={this.props.handleMediaDelete}
                      data={this.props.data}
                    />
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
                    {this.props.data.actual_name}
                    <DashboardDropDown
                      handleProjectMove={this.props.handleProjectMove}
                      handleMediaDelete={this.props.handleMediaDelete}
                      data={this.props.data}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {this.props.projectMove && (
          <Modal
            modalIsOpen={this.props.projectMove}
            closeModal={this.props.closeMediaModal}
            customStyles={customStyles}
            contentLabel={"Create Folder"}
            pauseOnFocusLoss={false}
          >
            <div className="modal-header text-center">
              <h4 className="modal-title">Project Move</h4>
              <button
                type="button"
                className="close"
                onClick={this.props.closeMediaModal}
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>

            <div className="modal-body text-center">
              <Select
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options={this.allFolderData()}
              />
              <br />

              <button
                id="createFolder"
                name="createName"
                className="btn btn-info btn-md modal-btn text-center form-group"
                // onClick={() => this.createFolder(actionType)}
                // disabled={!this.state.deleteMode && this.handleBtnDisable()}
              >
                Move
              </button>
              <br />
              {/* {this.state.submitBtnDisable && (
                <span>Please Wait while your project is moving...</span>
              )} */}
            </div>
          </Modal>
        )}
        {this.props.showMediaDelete && (
          <MediaModal
            showMediaDelete={this.props.showMediaDelete}
            closeMediaModal={this.props.closeMediaModal}
            btnText={this.props.showMediaDelete ? "Delete" : "Clone"}
          />
        )}
      </>
    );
  }
}

export default FileType;