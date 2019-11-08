import React from "react";
import DashboardDropDown from "./DashboardDropDown";
import docuImg from "../../assets/img/docimg.jpg";
import Modal from "../shared/modal/Modal";
import Select from "react-select";
import MediaModal from "../upload/MediaModal";
import moment from "moment";

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
    const filePath =
      this.props.data && this.props.data.type !== "youtube"
        ? `https://apiv2.bossvideoplayer.com/public/user/${this.props.data.url}`
        : this.props.data.url;
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
                  <div className="cappadd2">
                    <h5>{this.props.data.folder_name}</h5>
                    <DashboardDropDown
                      handleProjectMove={() =>
                        this.props.handleProjectMove(this.props.data)
                      }
                      handleMediaDuplicate={this.props.handleMediaDuplicate}
                      handleMediaDelete={this.props.handleMediaDelete}
                      handlePreview={this.props.handlePreview}
                      data={this.props.data}
                      showEditor={this.props.showEditor}
                      handleEditor={this.props.handleEditor}
                    />
                  </div>
                </div>
              </div>
            )}
            {(this.props.userFileData && this.props.data.type === "video") ||
            this.props.data.type === "youtube" ? (
              <div className="card-body">
                <video controls>
                  <source src={filePath} type="video/mp4" />
                </video>
                <div className="cappadd2">
                  <h5 title={this.props.data.actual_name}>
                    {this.props.data.actual_name}
                  </h5>
                  <p className="title" title={this.props.data.date_time}>
                    {moment(this.props.data.date_time).format(
                      "MM/DD/YYYY, hh:mm:ss a"
                    )}
                  </p>
                  <DashboardDropDown
                    handleProjectMove={() =>
                      this.props.handleProjectMove(this.props.data)
                    }
                    handleMediaDuplicate={this.props.handleMediaDuplicate}
                    handleMediaDelete={this.props.handleMediaDelete}
                    handlePreview={this.props.handlePreview}
                    data={this.props.data}
                    showEditor={this.props.showEditor}
                  />
                </div>
              </div>
            ) : null}
            {this.props.userFileData && this.props.data.type === "image" && (
              <div className="cardss">
                <div className="card-body">
                  <img src={filePath} />
                  <div className="cappadd2">
                    <h5 title={this.props.data.actual_name}>
                      {this.props.data.actual_name}
                    </h5>
                    <p className="title" title={this.props.data.date_time}>
                      {moment(this.props.data.date_time).format(
                        "MM/DD/YYYY, hh:mm:ss a"
                      )}
                    </p>
                    <DashboardDropDown
                      handleProjectMove={() =>
                        this.props.handleProjectMove(this.props.data)
                      }
                      handleMediaDuplicate={this.props.handleMediaDuplicate}
                      handleMediaDelete={this.props.handleMediaDelete}
                      handlePreview={this.props.handlePreview}
                      data={this.props.data}
                      showEditor={this.props.showEditor}
                    />
                  </div>
                </div>
              </div>
            )}
            {this.props.userFileData && this.props.data.type === "docs" && (
              <div className="cardss">
                <div className="card-body">
                  <img src={docuImg} />
                  <div className="cappadd2">
                    <h5 title={this.props.data.actual_name}>
                      {this.props.data.actual_name}
                    </h5>
                    <p className="title" title={this.props.data.date_time}>
                      {moment(this.props.data.date_time).format(
                        "MM/DD/YYYY, hh:mm:ss a"
                      )}
                    </p>
                    <DashboardDropDown
                      handleProjectMove={this.props.handleProjectMove}
                      handleMediaDuplicate={this.props.handleMediaDuplicate}
                      handleMediaDelete={this.props.handleMediaDelete}
                      handlePreview={this.props.handlePreview}
                      data={this.props.data}
                      showEditor={this.props.showEditor}
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
                onClick={() => this.props.moveFolder(this.state.selectedOption)}
                disabled={this.props.actionBtnDisable}
              >
                Move
              </button>
              <br />
              {this.props.actionBtnDisable && (
                <span>Please Wait while your project is moving...</span>
              )}
              <br />
            </div>
          </Modal>
        )}
        {this.props.showMediaDuplicate && (
          <MediaModal
            modalIsOpen={this.props.showMediaDuplicate}
            closeMediaModal={this.props.closeMediaModal}
            btnText={"Clone"}
            consfirmMsg={`Are you sure you want to make duplicate of ${this.props.selectedMedia.actual_name}?`}
            handleClick={this.props.duplicateFolder}
            actionBtnDisable={this.props.actionBtnDisable}
          />
        )}
        {this.props.showMediaDelete && (
          <MediaModal
            modalIsOpen={this.props.showMediaDelete}
            closeMediaModal={this.props.closeMediaModal}
            btnText={"Delete"}
            consfirmMsg={`Are you sure you want to delete ${this.props.selectedMedia.actual_name}?`}
            handleClick={this.props.duplicateFolder}
            actionBtnDisable={this.props.actionBtnDisable}
          />
        )}
      </>
    );
  }
}

export default FileType;
